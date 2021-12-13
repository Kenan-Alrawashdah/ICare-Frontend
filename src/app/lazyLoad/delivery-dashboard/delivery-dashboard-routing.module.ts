import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryMainComponent } from 'src/app/components/delivery-dashboard/delivery-main/delivery-main.component';
import { DeliveryOrdersComponent } from 'src/app/components/delivery-dashboard/delivery-orders/delivery-orders.component';

const routes: Routes = [
  {
    path: 'Delivery',
    redirectTo: 'Delivery/Dashboard',
    pathMatch: 'full',
  },
  {
    path: 'Dashboard',
    component: DeliveryMainComponent,
  },
  {
    path: 'Orders',
    component: DeliveryOrdersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryDashboardRoutingModule {}
