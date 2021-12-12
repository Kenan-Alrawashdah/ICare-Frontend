import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Admin2RoutingModule } from './admin2-routing.module';
import { AddEmployeeComponent } from 'src/app/components/admin2/add-employee/add-employee.component';


@NgModule({
  declarations: [
    AddEmployeeComponent
  ],
  imports: [
    CommonModule,
    Admin2RoutingModule
  ]
})
export class Admin2Module { }
