import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { GetPaymentOrders } from '../Models/get-payment-orders.model';


@Component({
  selector: 'app-payment-orders',
  templateUrl: './payment-orders.component.html',
  styleUrls: ['./payment-orders.component.css'],
})
export class PaymentOrdersComponent implements OnInit {
  PaymentOrders: GetPaymentOrders[];

  constructor(
    private adminService: AdminService,
  ) {}
  Search = new FormGroup({
    from: new FormControl('', [Validators.required]),
    to: new FormControl('', [Validators.required]),
  });
  onSubmit() {
    this.adminService
      .SearchInByDatePaymentOrders(this.Search)
      .subscribe((data) => {
        if (data.success) {
          this.PaymentOrders = data.data;
        }
      });
  }
  ngOnInit(): void {
    this.adminService.GetPaymentOrders().subscribe((data) => {
      if (data.success) {
        this.PaymentOrders = data.data;
      }
    });
  }
}
