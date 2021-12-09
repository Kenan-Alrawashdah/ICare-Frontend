import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../home.service';
import { CartItemModel } from '../models/cartItem.model';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  CheckOutForm: FormGroup;
  cartItems: CartItemModel[];
  total:number= 0;

  constructor(
    private homeService:HomeService
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
  }

  async getCartItems() {
    await this.homeService.GetCartItems().toPromise()
      .then(
        (response) => {
          this.cartItems = response.data;
          this.total =0;
          response.data.forEach(element => {
            this.total= this.total +element.price * element.quantity;
          });
        }
      )
  }
}
