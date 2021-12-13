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

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { authInterceptorProviders } from './services/auth.Interceptor';
import { Patient2Component } from './components/patient2/patient2.component';
import { Patient2Module } from './lazyLoad/patient2/patient2.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminDashboardModule } from './lazyLoad/admin-dashboard/admin-dashboard.module';
import { AddEmployeeComponent } from './components/admin-dashboard/add-employee/add-employee.component';

import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { EmployeeMainComponent } from './components/employee-dashboard/employee-main/employee-main.component';
import { EmployeesInformationComponent } from './components/employee-dashboard/employees-information/employees-information.component';
import { DeliveryDashboardComponent } from './components/delivery-dashboard/delivery-dashboard.component';
import { DeliveryMainComponent } from './components/delivery-dashboard/delivery-main/delivery-main.component';
import { Home2Component } from './components/home2/home2.component';
import { Home2Module } from './lazyLoad/home2/home2.module';
import { DeliveryDashboardModule } from './lazyLoad/delivery-dashboard/delivery-dashboard.module';
import { EmployeeDashboardModule } from './lazyLoad/employee-dashboard/employee-dashboard.module';
import { PharmacerDashboardComponent } from './components/pharmacer-dashboard/pharmacer-dashboard.component';
import { PharmacerMainComponent } from './components/pharmacer-dashboard/pharmacer-main/pharmacer-main.component';
import { PharmacerCategorieComponent } from './components/pharmacer-dashboard/pharmacer-categorie/pharmacer-categorie.component';
import { DeliveryOrdersComponent } from 'src/app/components/delivery-dashboard/delivery-orders/delivery-orders.component';
import { Admin2Component } from './components/admin2/admin2.component';
import { Admin2Module } from './lazyLoad/admin2/admin2.module';
import { PharmacistComponent } from './components/pharmacist/pharmacist.component';
import { PharmacistModule } from './lazyLoad/pharmacist/pharmacist.module';
import { AddDrugComponent } from './components/pharmacist/add-drug/add-drug.component';
import { GetAllDrugsComponent } from './components/pharmacist/get-all-drugs/get-all-drugs.component';
import { SingleDrugComponent } from './components/pharmacist/single-drug/single-drug.component';
import { EditDrugComponent } from './components/pharmacist/edit-drug/edit-drug.component';
import { OpenOrdersComponent } from './components/pharmacist/open-orders/open-orders.component';
import { OrderDrugsComponent } from './components/pharmacist/order-drugs/order-drugs.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/Home',
    pathMatch: 'full',
  },
  {
    path: 'Home',
    component: Home2Component,
    loadChildren: () =>
      import('./lazyLoad/home2/home2-routing.module').then(
        (m) => m.Home2RoutingModule
      ),
  },
  {
    path: 'Patient',
    component: Patient2Component,
    loadChildren: () =>
      import('./lazyLoad/patient2/patient2-routing.module').then(
        (m) => m.Patient2RoutingModule
      ),
  },
  {
    path: 'Admin',
    component: AdminDashboardComponent,
    loadChildren: () =>
      import('./lazyLoad/admin-dashboard/admin-dashboard-routing.module').then(
        (m) => m.AdminDashboardRoutingModule
      ),
  },
  {
    path: 'Delivery',
    component: DeliveryDashboardComponent,
    loadChildren: () =>
      import(
        './lazyLoad/delivery-dashboard/delivery-dashboard-routing.module'
      ).then((m) => m.DeliveryDashboardRoutingModule),
  },
  {
    path: 'Accountant',
    component: EmployeeDashboardComponent,
    loadChildren: () =>
      import(
        './lazyLoad/employee-dashboard/employee-dashboard-routing.module'
      ).then((m) => m.EmployeeDashboardRoutingModule),
    },

  {
    path: 'Pharmacer',
    component: PharmacerDashboardComponent,
    loadChildren: () =>
      import(
        './lazyLoad/pharmacer-dashboard/pharmacer-dashboard-routing.module'
      ).then((m) => m.PharmacerDashboardRoutingModule),
  },
  {
    path: 'Admin2',
    component: Admin2Component,
    loadChildren: () =>
    import(
      './lazyLoad/admin2/admin2-routing.module'
    ).then((m) => m.Admin2RoutingModule),
  }
  ,
  {
    path: 'pharmacist',
    component: PharmacistComponent,
    loadChildren: () =>
    import(
      './lazyLoad/pharmacist/pharmacist-routing.module'
    ).then((m) => m.PharmacistRoutingModule),
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
    AdminDashboardComponent,
    AddEmployeeComponent,
    EmployeeDashboardComponent,
    EmployeeMainComponent,
    EmployeesInformationComponent,
    //-------
    DeliveryDashboardComponent,
    DeliveryMainComponent,
    Patient2Component,
    AdminDashboardComponent,
    Home2Component,
    PharmacerDashboardComponent,
    PharmacerMainComponent,
    PharmacerCategorieComponent,
    DeliveryOrdersComponent,
    Admin2Component,
    PharmacistComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //lazyLoad Models 
    Patient2Module,
    Home2Module,
    Admin2Module,
    PharmacistModule,
    AdminDashboardModule,
    DeliveryDashboardModule,
    EmployeeDashboardModule,
    //--------
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],

  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
