import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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

  constructor(
    private deliveryService: DeliveryService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getMyOrders();
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

  ChangeMapLocation(lat, lng) {
    this.lat = lat;
    this.lng = lng;
    const map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        zoom: 15,
        center: { lat: lat, lng: lng },
      }
    );
    const geocoder = new google.maps.Geocoder();
    const infowindow = new google.maps.InfoWindow();
    this.geocodeLatLng(geocoder, map, infowindow);
  }

  geocodeLatLng(
    geocoder: google.maps.Geocoder,
    map: google.maps.Map,
    infowindow: google.maps.InfoWindow
  ) {
    const latlng = {
      lat: parseFloat(this.lat),
      lng: parseFloat(this.lng),
    };
    geocoder
      .geocode({ location: latlng })
      .then((response) => {
        if (response.results[0]) {
          map.setZoom(11);

          const marker = new google.maps.Marker({
            position: latlng,
            map: map,
          });

          infowindow.setContent(response.results[0].formatted_address);
          infowindow.open(map, marker);
        } else {
          window.alert('No results found');
        }
      })
      .catch((e) => window.alert('Geocoder failed due to: ' + e));
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
