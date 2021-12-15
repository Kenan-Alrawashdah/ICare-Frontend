import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvilableOrdersComponent } from 'src/app/components/delivery-dashboard/avilable-orders/avilable-orders.component';
import { DeliveryMainComponent } from 'src/app/components/delivery-dashboard/delivery-main/delivery-main.component';
import { DeliveryOrdersComponent } from 'src/app/components/delivery-dashboard/delivery-orders/delivery-orders.component';

const routes: Routes = [
  // {
  //   path: 'Delivery',
  //   redirectTo: 'Delivery/Dashboard',
  //   pathMatch: 'full',
  // },
  {
    path: 'Dashboard',
    component: DeliveryMainComponent,
  },
  {
    path: 'Orders',
    component: DeliveryOrdersComponent,
  },
  {
    path:'AvailableOrders', 
    component: AvilableOrdersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryDashboardRoutingModule {}
