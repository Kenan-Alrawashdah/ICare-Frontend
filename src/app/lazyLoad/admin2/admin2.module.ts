import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Admin2RoutingModule } from './admin2-routing.module';

import { GetAllTestimonialComponent } from 'src/app/components/admin2/get-all-testimonial/get-all-testimonial.component';
import { PaymentOrdersComponent } from 'src/app/components/admin2/payment-orders/payment-orders.component';
import { AddEmployeeComponent } from 'src/app/components/admin2/add-employee/add-employee.component';
import { NgChartsModule } from 'ng2-charts';
import { SubscriptionSettingsComponent } from 'src/app/components/admin2/subscription-settings/subscription-settings.component';
import { EditSubscriptionComponent } from 'src/app/components/admin2/edit-subscription/edit-subscription.component';
import { DeliveriesComponent } from 'src/app/components/admin2/deliveries/deliveries.component';
import { AddDeliveryComponent } from 'src/app/components/admin2/add-delivery/add-delivery.component';
import { AccountComponent } from 'src/app/components/admin2/account/account.component';
import { GetEmployeeComponent } from 'src/app/components/admin2/get-employee/get-employee.component';
import { DashboardComponent } from 'src/app/components/admin2/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AddEmployeeComponent,
    GetAllTestimonialComponent,
    PaymentOrdersComponent,
    SubscriptionSettingsComponent,
    EditSubscriptionComponent,
    DeliveriesComponent,
    AddDeliveryComponent,
    AccountComponent,
    GetEmployeeComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    Admin2RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule
  ]

})
export class Admin2Module {}
