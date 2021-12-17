import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DashboardService } from 'src/app/shared/Delivery/dashboard.service';
import { ReservationAvailableCount } from 'src/app/shared/Delivery/reservation-available-count.model';
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
  NumberOfOrders: number;

  constructor(
    private deliveryService: DeliveryService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getLocation();
  }

  async getLocation() {
    await this.deliveryService
      .GetPlacedOrders()
      .toPromise()
      .then((response) => {
        this.ordersList = response.data;
        console.log(this.ordersList);
        if (this.ordersList == null) this.NumberOfOrders = 0;
        else this.NumberOfOrders = this.ordersList.length;
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
