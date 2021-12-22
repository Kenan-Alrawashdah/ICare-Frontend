import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AllOrdersForDelivery } from 'src/app/shared/Delivery/all-orders-for-delivery.model';
import { DashboardService } from 'src/app/shared/Delivery/dashboard.service';
import { GetLocatinForUser } from 'src/app/shared/Delivery/get-locatin-for-user.model';
import { ReservationAvailableCount } from 'src/app/shared/Delivery/reservation-available-count.model';
import { Loader } from '@googlemaps/js-api-loader';
import { DeliveryService } from '../service/delivery.service';
import { DeliveryOrdersModel } from '../model/DeliveryOrders.model';
import { GetNumberOfOrdersForDelivery } from 'src/app/shared/Delivery/get-number-of-orders-for-delivery.model';

declare const google: any;

@Component({
  selector: 'app-delivery-orders',
  templateUrl: './delivery-orders.component.html',
  styleUrls: ['./delivery-orders.component.css'],
})
export class DeliveryOrdersComponent implements OnInit {
  myOrders: DeliveryOrdersModel[];
  closeResult: string = '';
  lat = '';
  lng = '';
  Locatins;
  NumberOfOrders: number;
  map: google.maps.Map;
  ds: google.maps.DirectionsService;
  dr: google.maps.DirectionsRenderer;
  source: google.maps.LatLngLiteral;
  destination: google.maps.LatLngLiteral;

  constructor(
    private deliveryService: DeliveryService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getMyOrders();
    this.map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        center: { lat: 31.963158, lng: 35.930359 },
      }
    );

    this.ds = new google.maps.DirectionsService();
    this.dr = new google.maps.DirectionsRenderer();
  }

  ChangeMapLocation(lat, lng) {
    this.lat = lat;
    this.lng = lng;
    navigator.geolocation.getCurrentPosition((position) => {
      this.source = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
    const geocoder = new google.maps.Geocoder();
    this.geocodeLatLng(geocoder, this.map);
  }

  geocodeLatLng(geocoder: google.maps.Geocoder, map: google.maps.Map) {
    const latlng = {
      lat: parseFloat(this.lat),
      lng: parseFloat(this.lng),
    };
    geocoder.geocode({ location: latlng }).then((response) => {
        if (response.results[0]) {
          new google.maps.Marker({
            position: this.source,
            animation: google.maps.Animation.DROP,
            icon: {
              url: './assets/map/truck_pin.svg',
              anchor: new google.maps.Point(35, 10),
              scaledSize: new google.maps.Size(100, 100),
            },
            map: map,
          });
          const latlng = {
            lat: parseFloat(this.lat),
            lng: parseFloat(this.lng),
          };
          this.destination = latlng;

          new google.maps.Marker({
            position: this.destination,
            map: map,
            animation: google.maps.Animation.DROP,
            icon: {
              url: './assets/map/destination_custom_pin.svg',
              anchor: new google.maps.Point(35, 10),
              scaledSize: new google.maps.Size(100, 100),
            },
          });
          map.panTo(this.destination);
          this.setRoutePolyline(map);
        } else {
          window.alert('No results found');
        }
      })
      .catch((e) => window.alert('Geocoder failed due to: ' + e));
  }

  setRoutePolyline(map: google.maps.Map) {
    let request = {
      origin: this.source,
      destination: this.destination,
      travelMode: google.maps.TravelMode.DRIVING,
    };

    this.ds.route(request, (response, status) => {
      this.dr.setOptions({
        suppressPolylines: false,
        map: map,
      });

      if (status == google.maps.DirectionsStatus.OK) {
        this.dr.setDirections(response);
      }
    });
  }
  async getMyOrders() {
    await this.deliveryService
      .GetMyOrders()
      .toPromise()
      .then((response) => {
        this.myOrders = response.data;
        this.NumberOfOrders = this.myOrders.length;
      });
  }
  async open(content: any, id: number) {
    this.Locatins = this.myOrders.find((o) => o.orderId == id);
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      });
  }
}
