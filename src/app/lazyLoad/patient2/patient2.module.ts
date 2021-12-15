import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Patient2RoutingModule } from './patient2-routing.module';
import { AccountComponent } from 'src/app/components/patient2/account/account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangePasswordComponent } from 'src/app/components/patient2/change-password/change-password.component';
import { MyDrugsComponent } from 'src/app/components/patient2/my-drugs/my-drugs.component';
import { AddressComponent } from 'src/app/components/patient2/address/address.component';
import { OrdersComponent } from 'src/app/components/patient2/orders/orders.component';
import { AddDrugComponent } from 'src/app/components/patient2/add-drug/add-drug.component';
import { AddAddressComponent } from 'src/app/components/patient2/add-address/add-address.component';
import { EditAddressComponent } from 'src/app/components/patient2/edit-address/edit-address.component';
import { WaterComponent } from 'src/app/components/patient2/water/water.component';


@NgModule({
  declarations: [
    AccountComponent,
    ChangePasswordComponent,
    MyDrugsComponent,
    AddressComponent,
    OrdersComponent,
    AddDrugComponent,
    AddAddressComponent,
    EditAddressComponent,
    WaterComponent
  ],
  imports: [
    CommonModule,
    Patient2RoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class Patient2Module { }
