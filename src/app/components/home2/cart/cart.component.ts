import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from '../home.service';
import { Home2Component } from '../home2.component';
import { CartItemModel } from '../models/cartItem.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItemModel[];
  total:number= 0;
  constructor(
    private homeService: HomeService,
    private Toastr:ToastrService,
    private homeComponent:Home2Component
  ) { }

  ngOnInit(): void {
    this.getCartItems()
  }

  async getCartItems() {
    await this.homeService.GetCartItems().toPromise()
      .then(
        (response) => {
          this.cartItems = response.data;
          response.data.forEach(element => {
            this.total= this.total +element.price;
          });
          console.log(this.cartItems)
          console.log(this.total)
        }
      )
  }

  deleteItem(id:number){
    this.homeService.DeleteCartItem(id).subscribe(
      (response)=>{
        if(response.success == true)
        {
          this.Toastr.success("Item Deleted Successfully", "Deleted",{
            timeOut: 1000,
          });
          this.ngOnInit();
          this.homeComponent.ngOnInit();

        }
      }
    )
  }

}
