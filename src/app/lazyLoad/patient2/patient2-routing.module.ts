import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from 'src/app/components/patient2/account/account.component';
import { AddAddressComponent } from 'src/app/components/patient2/add-address/add-address.component';
import { AddDrugComponent } from 'src/app/components/patient2/add-drug/add-drug.component';
import { AddressComponent } from 'src/app/components/patient2/address/address.component';
import { ChangePasswordComponent } from 'src/app/components/patient2/change-password/change-password.component';
import { EditAddressComponent } from 'src/app/components/patient2/edit-address/edit-address.component';
import { EditDrugComponent } from 'src/app/components/patient2/edit-drug/edit-drug.component';
import { MyDrugsComponent } from 'src/app/components/patient2/my-drugs/my-drugs.component';
import { OrderDetailsComponent } from 'src/app/components/patient2/order-details/order-details.component';
import { OrdersComponent } from 'src/app/components/patient2/orders/orders.component';
import { WaterComponent } from 'src/app/components/patient2/water/water.component';

const routes: Routes = [
  {
    path: 'Account',
    component: AccountComponent,
  },
  {
    path:'ChangePassword',
    component:ChangePasswordComponent
  },
  {
    path:'AddDrug',
    component:AddDrugComponent
  },
  {
    path:'MyDrugs',
    component:MyDrugsComponent
  },
  {
    path:'Address',
    component:AddressComponent
  },
  {
    path:'Orders',
    component:OrdersComponent
  },
  {
    path:'AddAddress',
    component:AddAddressComponent
  },
  {
    path:'EditAddress/:id',
    component:EditAddressComponent
  },
  {
    path:'WaterNotification',
    component:WaterComponent
  },
  {
    path:'OrderDetails',
    component:OrderDetailsComponent
  },{
    path:'EditDrug',
    component:EditDrugComponent
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
