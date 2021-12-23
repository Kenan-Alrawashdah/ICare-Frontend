import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryDashboardRoutingModule } from './delivery-dashboard-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountComponent } from 'src/app/components/delivery-dashboard/account/account.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DeliveryDashboardRoutingModule,
    NgbModule],
})
export class DeliveryDashboardModule {}
