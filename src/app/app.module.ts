import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoryComponent } from './components/Home/icare/category/category.component';
import { HomeComponent } from './components/Home/icare/home/home.component';
import { ProductComponent } from './components/Home/icare/product/product.component';
import { AboutComponent } from './components/Home/icare/about/about.component';
import { ContactComponent } from './components/Home/icare/contact/contact.component';
import { FooterComponent } from './components/Home/icare/footer/footer.component';

import { AddressComponent } from './components/Account/address/address.component';
import { AccountComponent } from './components/Account/account/account.component';
import { ChangePasswordComponent } from './components/Account/change-password/change-password.component';
import { DrugsComponent } from './components/Account/drugs/drugs.component';
import { MyDrugsComponent } from './components/Account/my-drugs/my-drugs.component';
import { OrdersComponent } from './components/Account/orders/orders.component';
import { WaterComponent } from './components/Account/water/water.component';
import { WishlistComponent } from './components/Account/wishlist/wishlist.component';
import { OrderDetailsComponent } from './components/Account/order-details/order-details.component';

import { CartComponent } from './components/Shop/cart/cart.component';
import { CheckOutComponent } from './components/Shop/check-out/check-out.component';
import { ProductSingleComponent } from './components/Shop/product-single/product-single.component';
import { ThankYouComponent } from './components/Shop/thank-you/thank-you.component';

import { HealthReportComponent } from './components/Account/health-report/health-report.component';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './components/Index/patient/patient.component';
import { IndexComponent } from './components/Index/patient/index/index.component';
import { ICareComponent } from './components/Home/icare/icare.component';
import { ProductCategoryComponent } from './components/Shop/product-category/product-category.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/Home',
    pathMatch: 'full',
  },
  {
    path: 'Home',
    component: ICareComponent,
  },
  {
    path: 'Index',
    component: PatientComponent,
  },
  {
    path: 'Patient/Account',
    component: AccountComponent,
  },
  {
    path: 'Patient/Account/Change-Password',
    component: ChangePasswordComponent,
  },
  {
    path: 'Patient/Account/Address',
    component: AddressComponent,
  },
  {
    path: 'Patient/Account/Health-Report',
    component: HealthReportComponent,
  },
  {
    path: 'Patient/Account/Add-Drug',
    component: MyDrugsComponent,
  },
  {
    path: 'Patient/Account/Order-Details',
    component: OrderDetailsComponent,
  },
  {
    path: 'Patient/Account/Orders',
    component: OrdersComponent,
  },
  {
    path: 'Patient/Account/Water',
    component: WaterComponent,
  },
  {
    path: 'Patient/Account/Wish-List',
    component: WishlistComponent,
  },
  {
    path: 'Patient/Account/Drugs',
    component: DrugsComponent,
  },
  {
    path: 'Patient/Shop/Cart',
    component: CartComponent,
  },
  {
    path: 'Patient/Shop/Category',
    component: ProductCategoryComponent,
  },
  {
    path: 'Patient/Shop/Check-Out',
    component: CheckOutComponent,
  },
  {
    path: 'Patient/Shop/Product',
    component: ProductSingleComponent,
  },
  {
    path: 'Patient/Shop/ThanksForPayment',
    component: ThankYouComponent,
  },
];
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
    ThankYouComponent,
    HealthReportComponent,
    PatientComponent,
    ICareComponent,
    ProductCategoryComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
