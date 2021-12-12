import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AllOrdersForDelivery } from 'src/app/shared/Delivery/all-orders-for-delivery.model';
import { DashboardService } from 'src/app/shared/Delivery/dashboard.service';
import { GetLocatinForUser } from 'src/app/shared/Delivery/get-locatin-for-user.model';
import { GetNumberOfOrdersForDelivery } from 'src/app/shared/Delivery/get-number-of-orders-for-delivery.model';
@Component({
  selector: 'app-delivery-main',
  templateUrl: './delivery-main.component.html',
  styleUrls: ['./delivery-main.component.css'],
})
export class DeliveryMainComponent implements OnInit {
  OrderList: AllOrdersForDelivery[];
  NumberOfOrders: GetNumberOfOrdersForDelivery;
  Locatins: GetLocatinForUser;
  closeResult: string = '';

  constructor(
    private dashboardService: DashboardService,
    private modalService: NgbModal
  ) {}

  async ngOnInit() {
    this.dashboardService.GetNumberOfOrdersForDelivery().subscribe((data) => {
      this.NumberOfOrders = data.data;
    });
    await this.dashboardService
      .getAllOrdersForDelivery()
      .toPromise()
      .then((data) => {
        this.OrderList = data.data;
        console.log(this.OrderList);
      });
  }

  async open(content: any, id: number) {
    await this.dashboardService
      .GetLocatinForUser(id)
      .toPromise()
      .then((data) => {
        this.Locatins = data.data as GetLocatinForUser;
      });

    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      });
  }

  TakeOrder(id: number) {
    this.dashboardService.TakeOrder(id).subscribe(() => this.ngOnInit());
  }
  OrderDeliverd(id: number) {
    this.dashboardService.OrderDeliverd(id).subscribe(() => this.ngOnInit());
  }
}
