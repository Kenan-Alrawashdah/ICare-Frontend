import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoryComponent } from './components/Home/category/category.component';
import { HomeComponent } from './components/Home/home/home.component';
import { ProductComponent } from './components/Home/product/product.component';
import { AboutComponent } from './components/Home/about/about.component';
import { ContactComponent } from './components/Home/contact/contact.component';
import { FooterComponent } from './components/Home/footer/footer.component';
import { AddressComponent } from './components/Account/address/address.component';
import { AccountComponent } from './components/Account/account/account.component';
import { ChangePasswordComponent } from './components/Account/change-password/change-password.component';
import { DrugsComponent } from './components/Account/drugs/drugs.component';
import { MyDrugsComponent } from './components/Account/my-drugs/my-drugs.component';
import { OrdersComponent } from './components/Account/orders/orders.component';
import { WaterComponent } from './components/Account/water/water.component';
import { WishlistComponent } from './components/Account/wishlist/wishlist.component';
import { OrderDetailsComponent } from './components/Account/order-details/order-details.component';
import { IndexComponent } from './components/Index/index/index.component';
import { CartComponent } from './components/Shop/cart/cart.component';
import { CheckOutComponent } from './components/Shop/check-out/check-out.component';
import { ProductSingleComponent } from './components/Shop/product-single/product-single.component';
import { ThankYouComponent } from './components/Shop/thank-you/thank-you.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    HomeComponent,
    ProductComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    AddressComponent,
    AccountComponent,
    ChangePasswordComponent,
    DrugsComponent,
    MyDrugsComponent,
    OrdersComponent,
    WaterComponent,
    WishlistComponent,
    OrderDetailsComponent,
    IndexComponent,
    CartComponent,
    CheckOutComponent,
    ProductSingleComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
