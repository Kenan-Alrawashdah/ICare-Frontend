import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from 'src/app/components/Account/account/account.component';
import { AddressComponent } from 'src/app/components/Account/address/address.component';
import { ChangePasswordComponent } from 'src/app/components/Account/change-password/change-password.component';
import { DrugsComponent } from 'src/app/components/Account/drugs/drugs.component';
import { HealthReportComponent } from 'src/app/components/Account/health-report/health-report.component';
import { MyDrugsComponent } from 'src/app/components/Account/my-drugs/my-drugs.component';
import { OrderDetailsComponent } from 'src/app/components/Account/order-details/order-details.component';
import { OrdersComponent } from 'src/app/components/Account/orders/orders.component';
import { WaterComponent } from 'src/app/components/Account/water/water.component';
import { WishlistComponent } from 'src/app/components/Account/wishlist/wishlist.component';
import { PatientComponent } from 'src/app/components/Index/patient/patient.component';
import { CartComponent } from 'src/app/components/Shop/cart/cart.component';
import { CheckOutComponent } from 'src/app/components/Shop/check-out/check-out.component';
import { ProductCategoryComponent } from 'src/app/components/Shop/product-category/product-category.component';
import { ProductSingleComponent } from 'src/app/components/Shop/product-single/product-single.component';
import { ThankYouComponent } from 'src/app/components/Shop/thank-you/thank-you.component';
import { AuthGuardService } from 'src/app/guards/auth.service';

const routes: Routes = [
  {
    path: '',
    component: PatientComponent,
  },
  {
    path: 'Account',
    component: AccountComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'Account/Change-Password',
    component: ChangePasswordComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'Account/Address',
    component: AddressComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'Account/Health-Report',
    component: HealthReportComponent,
  },
  {
    path: 'Account/Add-Drug',
    component: MyDrugsComponent,
  },
  {
    path: 'Account/Order-Details',
    component: OrderDetailsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'Account/Orders',
    component: OrdersComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'Account/Water',
    component: WaterComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'Account/Wish-List',
    component: WishlistComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'Account/Drugs',
    component: DrugsComponent,
  },
  {
    path: 'Shop/Cart',
    component: CartComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'Shop/Category',
    component: ProductCategoryComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'Shop/Check-Out',
    component: CheckOutComponent,
  },
  {
    path: 'Shop/Product',
    component: ProductSingleComponent,
  },
  {
    path: 'Shop/ThanksForPayment',
    component: ThankYouComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexPageRoutingModule { }
