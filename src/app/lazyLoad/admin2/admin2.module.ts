import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Admin2RoutingModule } from './admin2-routing.module';
import { AddEmployeeComponent } from 'src/app/components/admin2/add-employee/add-employee.component';
import { GetAllTestimonialComponent } from 'src/app/components/admin2/get-all-testimonial/get-all-testimonial.component';
import { PaymentOrdersComponent } from 'src/app/components/admin2/payment-orders/payment-orders.component';

@NgModule({
  declarations: [
    AddEmployeeComponent,
    GetAllTestimonialComponent,
    PaymentOrdersComponent,
  ],
  imports: [
    CommonModule,
    Admin2RoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class Admin2Module {}
