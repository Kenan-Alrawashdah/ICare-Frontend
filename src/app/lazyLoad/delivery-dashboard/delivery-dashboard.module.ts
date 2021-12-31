import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryDashboardRoutingModule } from './delivery-dashboard-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountComponent } from 'src/app/components/delivery-dashboard/account/account.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AvilableOrdersComponent } from 'src/app/components/delivery-dashboard/avilable-orders/avilable-orders.component';
import { DeliveryOrdersComponent } from 'src/app/components/delivery-dashboard/delivery-orders/delivery-orders.component';
import { MapComponent } from 'src/app/components/delivery-dashboard/map/map.component';

@NgModule({
  declarations: [
    AccountComponent,
    AvilableOrdersComponent,
    DeliveryOrdersComponent,
    MapComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DeliveryDashboardRoutingModule,
    NgbModule,
  ],
})
export class DeliveryDashboardModule {}
