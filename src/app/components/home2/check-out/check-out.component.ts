import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from '../home.service';
import { Home2Component } from '../home2.component';
import { CartItemModel } from '../models/cartItem.model';
import { CreateOrderModel } from '../models/CreateOrder.model';
import { LocationModel } from '../models/location.model';
declare let paypal: any;
@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css'],
})
export class CheckOutComponent implements OnInit {
  CheckOutForm: FormGroup;
  cartItems: CartItemModel[];
  total: number = 0;
  locations: LocationModel[];
  locationsNumber: number;
  selectedLocation: number = 0;
  addScript: boolean = false;

  constructor(
    private homeService: HomeService,
    private router: Router,
    private toastr: ToastrService,
    private homeComponent:Home2Component
  ) {
    this.CheckOutForm = new FormGroup({
      cardNumber: new FormControl('', [Validators.required]),
      cardName: new FormControl('', [Validators.required]),
      expiry: new FormControl('', [Validators.required]),
      CVC: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getCartItems();
    this.getLocations();
  }

  async getLocations() {
    await this.homeService
      .GetUserLocations()
      .toPromise()
      .then((response) => {
        this.locations = response.data;
        this.locationsNumber = response.data.length;
        console.log(this.locations);
      });
    if (this.locationsNumber == 0) {
      this.toastr.warning('Please add a location to complete the payment', '', {
        timeOut: 1500,
      });
    }
  }

  async getCartItems() {
    await this.homeService
      .GetCartItems()
      .toPromise()
      .then((response) => {
        this.cartItems = response.data;
        this.total = 0;
        response.data.forEach((element) => {
          this.total = this.total + element.price * element.quantity;
        });
      });
  }

  goTOAddLocation() {
    this.router.navigate(['/Patient/AddAddress']);
  }
  onCheckOut() {
    if (this.selectedLocation != 0) {
      
      let order: CreateOrderModel = new CreateOrderModel();
      order.totalPrice = this.total;
      order.locationId = this.selectedLocation;
      let CartsId: number[] = [];
      this.cartItems.forEach((element) => {
      CartsId.push(element.cartId);
      });
      order.cartsId = CartsId;
      console.log(order.cartsId);
      this.homeService.createOrder(order).subscribe(
        ()=>{
          this.router.navigate(['/Home/ThankYou']).then(
            ()=>{
              this.homeComponent.ngOnInit();
            }
          );
        }
      );
      
    } else {
      this.toastr.warning('Please select location to deliver', '', {
        timeOut: 1500,
      });
    }
  }

  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox:
        'ASV8RKeof7CFrr0VhXiu-50xLBsu6EhXCavQE9_hzvq_-d3x4flBhU6j_l_ssiWIgHJYhEWhYyiLLQvG',
      production:
        'EE5UoDIZFtGw5ldbADOB5Bu5SIvjpMY65vRMZGMDkluHRkNPQhSAQyU9qUYLKkjAH1GoXnBFIdRSWrCy',
    },
    commit: true,
    payment: (data, actions) => {
      if (this.selectedLocation == 0) {
        this.toastr.warning('Please select location to deliver', '', {
          timeOut: 1500,
        });
        return actions.payment.cancel();
      } else
        return actions.payment.create({
          payment: {
            transactions: [
              {
                amount: {
                  total: this.total,
                  currency: 'USD',
                },
              },
            ],
          },
        });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        this.onCheckOut();
      });
    },
  };

  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, 'paypal-checkout-btn');
      });
    }
  }
  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');
      scripttagElement.src = 'http://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    });
  }
}
