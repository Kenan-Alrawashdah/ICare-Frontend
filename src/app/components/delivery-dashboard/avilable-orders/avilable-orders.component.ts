import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PlacedLocationModel } from '../model/placedLocation.model';
import { DeliveryService } from '../service/delivery.service';

@Component({
  selector: 'app-avilable-orders',
  templateUrl: './avilable-orders.component.html',
  styleUrls: ['./avilable-orders.component.css'],
})
export class AvilableOrdersComponent implements OnInit {
  ordersList: PlacedLocationModel[];
  closeResult: string = '';
  lat = '';
  lng = '';
  Locatins;
  ds: google.maps.DirectionsService;
  dr: google.maps.DirectionsRenderer;
  source: google.maps.LatLngLiteral;
  destination: google.maps.LatLngLiteral;

  constructor(
    private deliveryService: DeliveryService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getLocation();
    this.ds = new google.maps.DirectionsService();
    this.dr = new google.maps.DirectionsRenderer({
      map: null,
      suppressMarkers: true,
    });
  }

  async getLocation() {
    await this.deliveryService
      .GetPlacedOrders()
      .toPromise()
      .then((response) => {
        console.log(response);
        this.ordersList = response.data;
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
    navigator.geolocation.getCurrentPosition((position) => {
      this.source = {
        lat: parseFloat('40.714224'),
        lng: parseFloat('-73.991452'),
      };
    });
    const latlng = {
      lat: parseFloat(this.lat),
      lng: parseFloat(this.lng),
    };
    this.destination = latlng;
    geocoder
      .geocode({ location: latlng })
      .then((response) => {
        if (response.results[0]) {
          map.setZoom(11);

          var markerStart = new google.maps.Marker({
            position: this.source,
            draggable: true,
            animation: google.maps.Animation.DROP,
            icon: {
              url: './assets/map/truck_pin.svg',
              anchor: new google.maps.Point(35, 10),
              scaledSize: new google.maps.Size(100, 100),
            },
            map: map,
          });
          const destinationMarker = new google.maps.Marker({
            position: this.destination,
            map: map,
            draggable: true,
            animation: google.maps.Animation.DROP,
            icon: {
              url: './assets/map/destination_custom_pin.svg',
              anchor: new google.maps.Point(35, 10),
              scaledSize: new google.maps.Size(100, 100),
            },
          });

          map.panTo(this.destination);
          this.setRoutePolyline(map);
          infowindow.setContent(response.results[0].formatted_address);
          infowindow.open(map, destinationMarker);
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

  async open(content: any, id: number) {
    this.Locatins = this.ordersList.find((o) => o.orderId == id);
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      });
  }

  takeOrder(id: number) {
    this.deliveryService.Takeorder(id).subscribe((response) => {
      this.ngOnInit();
    });
  }
}
