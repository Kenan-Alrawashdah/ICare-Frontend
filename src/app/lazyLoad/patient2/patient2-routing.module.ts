import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from 'src/app/components/patient2/account/account.component';
import { AddAddressComponent } from 'src/app/components/patient2/add-address/add-address.component';
import { AddDrugComponent } from 'src/app/components/patient2/add-drug/add-drug.component';
import { AddHealthReportComponent } from 'src/app/components/patient2/add-health-report/add-health-report.component';
import { AddressComponent } from 'src/app/components/patient2/address/address.component';
import { ChangePasswordComponent } from 'src/app/components/patient2/change-password/change-password.component';
import { EditAddressComponent } from 'src/app/components/patient2/edit-address/edit-address.component';
import { EditDrugComponent } from 'src/app/components/patient2/edit-drug/edit-drug.component';
import { HealthReportComponent } from 'src/app/components/patient2/health-report/health-report.component';
import { MyDrugsComponent } from 'src/app/components/patient2/my-drugs/my-drugs.component';
import { OrderDetailsComponent } from 'src/app/components/patient2/order-details/order-details.component';
import { OrdersComponent } from 'src/app/components/patient2/orders/orders.component';
import { WaterComponent } from 'src/app/components/patient2/water/water.component';
import { PatientGuard } from 'src/app/guards/patient.guard';
import { SubscriberGuard } from 'src/app/guards/subscriber.guard';

const routes: Routes = [
  {
    path: 'Account',
    component: AccountComponent,
    canActivate:[PatientGuard]

  },
  {
    path:'ChangePassword',
    component:ChangePasswordComponent,
    canActivate:[PatientGuard]

  },
  {
    path:'AddDrug',
    component:AddDrugComponent,
    canActivate:[SubscriberGuard]
  },
  {
    path:'MyDrugs',
    component:MyDrugsComponent,
    canActivate:[SubscriberGuard]
  },
  {
    path:'Address',
    component:AddressComponent,
    canActivate:[PatientGuard]
  },
  {
    path:'Orders',
    component:OrdersComponent,
    canActivate:[PatientGuard]
  },
  {
    path:'AddAddress',
    component:AddAddressComponent,
    canActivate:[PatientGuard]
  },
  {
    path:'EditAddress/:id',
    component:EditAddressComponent,
    canActivate:[PatientGuard]
  },
  {
    path:'WaterNotification',
    component:WaterComponent,
    canActivate:[SubscriberGuard]
  },
  {
    path:'OrderDetails',
    component:OrderDetailsComponent,
    canActivate:[PatientGuard]
  },{
    path:'EditDrug',
    component:EditDrugComponent,
    canActivate:[SubscriberGuard]
  },{
    path:'HealthReport',
    component:HealthReportComponent,
    canActivate:[SubscriberGuard]
  },
  {
    path:'AddHealthReport',
    component:AddHealthReportComponent,
    canActivate:[SubscriberGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule]
})
export class Patient2RoutingModule { }
