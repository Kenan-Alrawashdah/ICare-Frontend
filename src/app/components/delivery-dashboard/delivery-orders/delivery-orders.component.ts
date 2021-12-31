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
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

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
    private modalService: NgbModal,
    private tosart: ToastrService,
    private router: Router
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
        console.log(response)
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

  SetOrderAsDelivered(id: number) {
    if (confirm('you want to set as delivered')) {
      console.log(id);
      this.deliveryService.SetOrderAsDelivered(id).subscribe(() => {
        this.tosart.success('order set as delivered');
        this.ngOnInit();
      });
    }
  }
  goTo(url: string, lat, lng) {
    this.router.navigate([url + '/' + lat + '/' + lng]).then(() => {
      window.location.reload();
    });
  }
}
