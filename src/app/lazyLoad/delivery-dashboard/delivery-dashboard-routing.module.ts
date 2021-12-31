import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from 'src/app/components/delivery-dashboard/account/account.component';
import { AvilableOrdersComponent } from 'src/app/components/delivery-dashboard/avilable-orders/avilable-orders.component';
import { DeliveryMainComponent } from 'src/app/components/delivery-dashboard/delivery-main/delivery-main.component';
import { DeliveryOrdersComponent } from 'src/app/components/delivery-dashboard/delivery-orders/delivery-orders.component';
import { MapComponent } from 'src/app/components/delivery-dashboard/map/map.component';
import { ChangePasswordComponent } from 'src/app/components/patient2/change-password/change-password.component';
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
    canActivate: [DeliveryGuard],
  },
  {
    path: 'Orders',
    component: DeliveryOrdersComponent,
    canActivate: [DeliveryGuard],
  },
  {
    path: 'AvailableOrders',
    component: AvilableOrdersComponent,
    canActivate: [DeliveryGuard],
  },
  {
    path: 'Account',
    component: AccountComponent,
    canActivate: [DeliveryGuard],
  },
  {
    path: 'ChangePassword',
    component: ChangePasswordComponent,
    canActivate: [DeliveryGuard],
  },
  {
    path: 'OrderMap/:lat/:lng',
    component: MapComponent,
    canActivate: [DeliveryGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryDashboardRoutingModule {}
