import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoryComponent } from './components/Home/icare/category/category.component';
import { HomeComponent } from './components/Home/icare/home/home.component';
import { ProductComponent } from './components/Home/icare/product/product.component';
import { AboutComponent } from './components/Home/icare/about/about.component';
import { ContactComponent } from './components/Home/icare/contact/contact.component';
import { FooterComponent } from './components/Home/icare/footer/footer.component';

import { AddressComponent } from './components/Patient/Account/address/address.component';
import { AccountComponent } from './components/Patient/Account/account/account.component';
import { ChangePasswordComponent } from './components/Patient/Account/change-password/change-password.component';
import { DrugsComponent } from './components/Patient/Account/drugs/drugs.component';
import { MyDrugsComponent } from './components/Patient/Account/my-drugs/my-drugs.component';
import { OrdersComponent } from './components/Patient/Account/orders/orders.component';
import { WaterComponent } from './components/Patient/Account/water/water.component';
import { WishlistComponent } from './components/Patient/Account/wishlist/wishlist.component';
import { OrderDetailsComponent } from './components/Patient/Account/order-details/order-details.component';

import { CartComponent } from './components/Patient/Shop/cart/cart.component';
import { CheckOutComponent } from './components/Patient/Shop/check-out/check-out.component';
import { ProductSingleComponent } from './components/Patient/Shop/product-single/product-single.component';
import { ThankYouComponent } from './components/Patient/Shop/thank-you/thank-you.component';

import { HealthReportComponent } from './components/Patient/Account/health-report/health-report.component';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './components/Patient/Index/patient/patient.component';
import { IndexComponent } from './components/Patient/Index/patient/index/index.component';
import { ICareComponent } from './components/Home/icare/icare.component';
import { ProductCategoryComponent } from './components/Patient/Shop/product-category/product-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/User/header/header.component';
import { LoginComponent } from './components/User/login/login.component';
import { SubscribeComponent } from './components/User/subscribe/subscribe.component';
import { RegistrationComponent } from './components/User/registration/registration.component';
import { ForgotPasswordComponent } from './components/User/forgot-password/forgot-password.component';
import { PaymentComponent } from './components/User/payment/payment.component';

import { RequestService } from './services/Request.Service';
import { authInterceptorProviders } from './services/auth.Interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/Home',
    pathMatch: 'full',
  },
  {
    path: 'Home',
    loadChildren: () =>
      import('./lazyLoad/home-page/home-page-routing.module').then(
        (m) => m.HomePageRoutingModule
      ),
  },
  {
    path: 'Patient',
    loadChildren: () =>
      import('./lazyLoad/index-page/index-page-routing.module').then(
        (m) => m.IndexPageRoutingModule
      ),
  },
  { path: 'signin', component: RegistrationComponent },
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
    HeaderComponent,
    LoginComponent,
    SubscribeComponent,
    RegistrationComponent,
    ForgotPasswordComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [RequestService, authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
