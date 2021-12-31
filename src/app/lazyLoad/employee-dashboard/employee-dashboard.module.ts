import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeDashboardRoutingModule } from './employee-dashboard-routing.module';
import { AccountComponent } from 'src/app/components/employee-dashboard/account/account.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeMainComponent } from 'src/app/components/employee-dashboard/employee-main/employee-main.component';
import { EmployeesInformationComponent } from 'src/app/components/employee-dashboard/employees-information/employees-information.component';


@NgModule({
  declarations: [
    AccountComponent,
    EmployeeMainComponent,
    EmployeesInformationComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeDashboardRoutingModule
  ]
})
export class EmployeeDashboardModule { }
