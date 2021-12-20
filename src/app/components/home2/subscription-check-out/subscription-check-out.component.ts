import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { switchMap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token.service';
import { HomeService } from '../home.service';
import { CartItemModel } from '../models/cartItem.model';
import { CreateOrderModel } from '../models/CreateOrder.model';
import { LocationModel } from '../models/location.model';
import { SubscriptionTypeModel } from '../models/SubscriptionType.model';

declare let paypal: any;

@Component({
  selector: 'app-subscription-check-out',
  templateUrl: './subscription-check-out.component.html',
  styleUrls: ['./subscription-check-out.component.css'],
})
export class SubscriptionCheckOutComponent implements OnInit {
  id: string;
  SType: SubscriptionTypeModel;

  CheckOutForm: FormGroup;
  cartItems: CartItemModel[];
  total: number = 100;
  selectedLocation: number = 0;
  addScript: boolean = false;

  constructor(
    private homeService: HomeService,
    private router: Router,
    private toastr: ToastrService,
    private _Activatedroute: ActivatedRoute,
    private authService: AuthService,
    private tokenService: TokenStorageService
  ) {
    this.id = this._Activatedroute.snapshot.paramMap.get('id');
    this.CheckOutForm = new FormGroup({
      cardNumber: new FormControl('', [Validators.required]),
      cardName: new FormControl('', [Validators.required]),
      expiry: new FormControl('', [Validators.required]),
      CVC: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    let role = this.tokenService.GetRole(); 
    console.log(role)
    if(role == 'Subscriber')
    {
      this.toastr.warning('Your are already have subscription');
      this.router.navigate(['']);
    }
    this.GetSubscriptionType();
  }



  async GetSubscriptionType() {
    await this.homeService
      .GetSubscriptionTypeById(this.id)
      .toPromise()
      .then((response) => {
        console.log(response);
        this.SType = response.data;
        if (response.data.onSale) {
          this.total = response.data.priceAfterSale;
        } else {
          this.total = response.data.price;
        }
        console.log(this.SType);
      });
  }

  onCheckOut() {
    console.log(this.id);
    this.homeService.Subscribe(this.id).subscribe((response) => {
      if (response.success == true) {
        let token = this.tokenService.getToken();
        let refreshToken = this.tokenService.getRefreshToken();
        this.authService
          .refreshToken(token, refreshToken)
          .toPromise()
          .then((response) => {
            this.tokenService.saveToken(response['data']['accessToken']);
            this.tokenService.saveRefreshToken(
              response['data']['refreshToken']
            );
            console.log(this.tokenService.GetRole());
          });
      }
    });
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
        console.log('sussecc');
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
