import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AllOrdersForDelivery } from 'src/app/shared/Delivery/all-orders-for-delivery.model';
import { DashboardService } from 'src/app/shared/Delivery/dashboard.service';
import { GetLocatinForUser } from 'src/app/shared/Delivery/get-locatin-for-user.model';
import { ReservationAvailableCount } from 'src/app/shared/Delivery/reservation-available-count.model';
import { Loader } from '@googlemaps/js-api-loader';

declare const google: any;

@Component({
  selector: 'app-delivery-orders',
  templateUrl: './delivery-orders.component.html',
  styleUrls: ['./delivery-orders.component.css'],
})
export class DeliveryOrdersComponent implements OnInit {
  OrdersForDelivery: AllOrdersForDelivery[];
  ReservationAvailableCount: ReservationAvailableCount;
  Locatins: GetLocatinForUser;
  closeResult: string = '';

  lat = '';
  lng = '';

  constructor(
    private dashboardService: DashboardService,
    private modalService: NgbModal
  ) {}

  async ngOnInit() {
    this.dashboardService.ReservationAvailableCount().subscribe((data) => {
      this.ReservationAvailableCount = data.data;
    });
    await this.dashboardService
      .getAllOrdersAvailableForDelivery()
      .toPromise()
      .then((data) => {
        this.OrdersForDelivery = data.data;
      });
  }
  ChangeMapLocation(lat, lng) {
    this.lat = lat;
    this.lng = lng;
    const map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        zoom: 15,
        center: { lat: 50.0, lng: 50.0 },
        mapTypeId: 'satellite',
      }
    );
    const geocoder = new google.maps.Geocoder();
    const infowindow = new google.maps.InfoWindow();
    this.geocodeLatLng(geocoder, map, infowindow);
  }
  async open(content: any, id: number) {
    await this.dashboardService
      .GetLocatinForUser(id)
      .toPromise()
      .then((data) => {
        this.Locatins = data.data;
      });
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      });
  }

  ReservationAvailable(id: number) {
    this.dashboardService
      .ReservationAvailable(id)
      .subscribe(() => this.ngOnInit());
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
}
