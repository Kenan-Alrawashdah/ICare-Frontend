import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvilableOrdersComponent } from 'src/app/components/delivery-dashboard/avilable-orders/avilable-orders.component';
import { DeliveryMainComponent } from 'src/app/components/delivery-dashboard/delivery-main/delivery-main.component';
import { DeliveryOrdersComponent } from 'src/app/components/delivery-dashboard/delivery-orders/delivery-orders.component';
import { DeliveryGuard } from 'src/app/guards/delivery.guard';

const routes: Routes = [
  {
    path: 'Delivery',
    redirectTo: 'Delivery/AvailableOrders',
    pathMatch: 'full',
  },
  {
    path: 'Dashboard',
    component: DeliveryMainComponent,
    canActivate:[DeliveryGuard]
  },
  {
    path: 'Orders',
    component: DeliveryOrdersComponent,
    canActivate:[DeliveryGuard]
  },
  {
    path:'AvailableOrders', 
    component: AvilableOrdersComponent,
    canActivate:[DeliveryGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryDashboardRoutingModule {}
