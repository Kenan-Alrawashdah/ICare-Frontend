import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from 'src/app/components/patient2/account/account.component';
import { AddDrugComponent } from 'src/app/components/patient2/add-drug/add-drug.component';
import { AddressComponent } from 'src/app/components/patient2/address/address.component';
import { ChangePasswordComponent } from 'src/app/components/patient2/change-password/change-password.component';
import { MyDrugsComponent } from 'src/app/components/patient2/my-drugs/my-drugs.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule]
})
export class Patient2RoutingModule { }
