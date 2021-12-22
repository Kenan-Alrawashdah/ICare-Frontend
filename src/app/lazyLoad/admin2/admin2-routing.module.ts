import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddEmployeeComponent } from 'src/app/components/admin2/add-employee/add-employee.component';
import { DashboardComponent } from 'src/app/components/admin2/dashboard/dashboard.component';
import { GetAllTestimonialComponent } from 'src/app/components/admin2/get-all-testimonial/get-all-testimonial.component';
import { PaymentOrdersComponent } from 'src/app/components/admin2/payment-orders/payment-orders.component';
import { GetEmployeeComponent } from 'src/app/components/admin2/get-employee/get-employee.component';
import { SubscriptionSettingsComponent } from 'src/app/components/admin2/subscription-settings/subscription-settings.component';
import { EditSubscriptionComponent } from 'src/app/components/admin2/edit-subscription/edit-subscription.component';
import { DeliveriesComponent } from 'src/app/components/admin2/deliveries/deliveries.component';
import { AddDeliveryComponent } from 'src/app/components/admin2/add-delivery/add-delivery.component';
import { AdminGuard } from 'src/app/guards/admin.guard';

const routes: Routes = [
  {
    path: 'Admin',
    redirectTo: 'Admin/Dashboard',
    pathMatch: 'full',
  }
  ,{
    path: 'AddEmployee',
    component: AddEmployeeComponent,
    canActivate:[AdminGuard]

  }
  ,
  {
    path:'GetEmployee',
    component:GetEmployeeComponent,
    canActivate:[AdminGuard]

  },
  {
    path: 'Testimonials',
    component: GetAllTestimonialComponent,
    canActivate:[AdminGuard]

  },
  {
    path: 'Sales',
    component: PaymentOrdersComponent,
    canActivate:[AdminGuard]

  },
  {
    path: 'Dashboard',
    component: DashboardComponent,
    canActivate:[AdminGuard]

  },
  {
    path:"SubscriptionSettings",
    component:SubscriptionSettingsComponent,
    canActivate:[AdminGuard]

  },
  {
    path:'EditSubscription/:id',
    component:EditSubscriptionComponent,
    canActivate:[AdminGuard]

  },
  {
    path:'Deliveries',
    component:DeliveriesComponent,
    canActivate:[AdminGuard]

  },
  {
    path:'AddDelivery',
    component:AddDeliveryComponent,
    canActivate:[AdminGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Admin2RoutingModule {}
