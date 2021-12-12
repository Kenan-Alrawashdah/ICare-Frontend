import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'rxjs';
import { HomeService } from '../home.service';
import { CartItemModel } from '../models/cartItem.model';
import { CreateOrderModel } from '../models/CreateOrder.model';
import { LocationModel } from '../models/location.model';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  CheckOutForm: FormGroup;
  cartItems: CartItemModel[];
  total:number= 0;
  locations:LocationModel[];
  locationsNumber:number;
  selectedLocation:number = 0;

  constructor(
    private homeService:HomeService,
    private router:Router,
    private toastr:ToastrService,
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

  async getLocations(){
    await this.homeService.GetUserLocations().toPromise()
    .then(
      (response=>{
        this.locations = response.data;
        this.locationsNumber = response.data.length;
        console.log(this.locations);
      })
    )
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

  goTOAddLocation()
  {
    this.router.navigate(['/Patient/Address'])
  }



  onCheckOut()
  {
    if(this.selectedLocation != 0)
    {
      let order: CreateOrderModel = new CreateOrderModel();
  
       order.totalPrice = this.total; 
       order.locationId = this.selectedLocation;
       let CartsId:number[]=[] ; 
       this.cartItems.forEach(element => {
        CartsId.push(element.cartId);
       });
       order.cartsId = CartsId;
       console.log(order.cartsId);
       this.homeService.createOrder(order).subscribe();
       this.router.navigate(['/Home/ThankYou']);
    }else{
      this.toastr.warning('Please select location to deliver','',{timeOut:1500});
    }
  }
}
