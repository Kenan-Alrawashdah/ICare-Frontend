import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { AvilableOrdersComponent } from './components/delivery-dashboard/avilable-orders/avilable-orders.component';
import { EditAddressComponent } from './components/patient2/edit-address/edit-address.component';
import { OrderDetailsComponent } from './components/patient2/order-details/order-details.component';
import { EditDrugComponent } from './components/patient2/edit-drug/edit-drug.component';

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
    AvilableOrdersComponent

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
