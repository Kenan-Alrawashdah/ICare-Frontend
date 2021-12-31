import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
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
    private modalService: NgbModal,
    private toastr: ToastrService,
    private router: Router
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

        console.log(response);
        this.ordersList = response.data;
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
      this.toastr.success('order taken successfully');
      this.ngOnInit();
    });
  }
  async goTo(url: string, lat, lng) {
    await this.router.navigate([url + '/' + lat + '/' + lng]).then(() => {
      window.location.reload();
    });
  }
}
