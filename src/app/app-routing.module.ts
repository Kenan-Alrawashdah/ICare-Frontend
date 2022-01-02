import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Admin2Component } from './components/admin2/admin2.component';
import { DeliveryDashboardComponent } from './components/delivery-dashboard/delivery-dashboard.component';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { Home2Component } from './components/home2/home2.component';
import { Patient2Component } from './components/patient2/patient2.component';
import { PharmacistComponent } from './components/pharmacist/pharmacist.component';
import { AccountantGuard } from './guards/accountant.guard';
import { AdminGuard } from './guards/admin.guard';
import { DeliveryGuard } from './guards/delivery.guard';
import { NotEmployeeGuard } from './guards/not-employee.guard';
import { PharmacistGuard } from './guards/pharmacist.guard';

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
    canActivate: [NotEmployeeGuard],
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
    path: 'Delivery',
    component: DeliveryDashboardComponent,
    loadChildren: () =>
      import(
        './lazyLoad/delivery-dashboard/delivery-dashboard-routing.module'
      ).then((m) => m.DeliveryDashboardRoutingModule),
    canActivate: [DeliveryGuard],
  },
  {
    path: 'Accountant',
    component: EmployeeDashboardComponent,
    loadChildren: () =>
      import(
        './lazyLoad/employee-dashboard/employee-dashboard-routing.module'
      ).then((m) => m.EmployeeDashboardRoutingModule),
    canActivate: [AccountantGuard],
  },
  {
    path: 'Admin',
    component: Admin2Component,
    loadChildren: () =>
      import('./lazyLoad/admin2/admin2-routing.module').then(
        (m) => m.Admin2RoutingModule
      ),
    canActivate: [AdminGuard],
  },
  {
    path: 'pharmacist',
    component: PharmacistComponent,
    loadChildren: () =>
      import('./lazyLoad/pharmacist/pharmacist-routing.module').then(
        (m) => m.PharmacistRoutingModule
      ),
    canActivate: [PharmacistGuard],
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
