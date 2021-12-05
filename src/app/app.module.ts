import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoryComponent } from './components/Home/icare/category/category.component';
import { HomeComponent } from './components/Home/icare/home/home.component';
import { ProductComponent } from './components/Home/icare/product/product.component';
import { AboutComponent } from './components/Home/icare/about/about.component';
import { ContactComponent } from './components/Home/icare/contact/contact.component';
import { FooterComponent } from './components/Home/icare/footer/footer.component';
import { DrugsComponent } from './components/Patient/Account/drugs/drugs.component';
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
import { AuthGuardService } from './guards/auth.service';

import { Search } from './shared/User/Models/search.model';
import { HomePageService } from './shared/User/Services/home-page.service';
import { authInterceptorProviders } from './services/auth.Interceptor';
import { Patient2Component } from './components/patient2/patient2.component';
import { AccountComponent } from './components/patient2/account/account.component';
import { Patient2Module } from './lazyLoad/patient2/patient2.module';
import { AddDrugComponent } from './components/patient2/add-drug/add-drug.component';

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
    component : Patient2Component,
    loadChildren: () =>
      import('./lazyLoad/patient2/patient2-routing.module').then(
        (m) => m.Patient2RoutingModule
      )
  },
  {path:"signin",
  component: RegistrationComponent
  }
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
    DrugsComponent,
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
    Patient2Component,
    AddDrugComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Patient2Module
    
  ],
  providers: [Search,
    authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
