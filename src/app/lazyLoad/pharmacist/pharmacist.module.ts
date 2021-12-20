import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PharmacistRoutingModule } from './pharmacist-routing.module';
import { GetAllDrugsComponent } from 'src/app/components/pharmacist/get-all-drugs/get-all-drugs.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddDrugComponent } from 'src/app/components/pharmacist/add-drug/add-drug.component';
import { EditDrugComponent } from 'src/app/components/pharmacist/edit-drug/edit-drug.component';
import { SingleDrugComponent } from 'src/app/components/pharmacist/single-drug/single-drug.component';
import { OpenOrdersComponent } from 'src/app/components/pharmacist/open-orders/open-orders.component';
import { OrderDrugsComponent } from 'src/app/components/pharmacist/order-drugs/order-drugs.component';
import { CategoriesComponent } from 'src/app/components/pharmacist/categories/categories.component';
import { AddCategoryComponent } from 'src/app/components/pharmacist/add-category/add-category.component';


@NgModule({
  declarations: [
    GetAllDrugsComponent,
    AddDrugComponent,
    EditDrugComponent,
    SingleDrugComponent,
    OpenOrdersComponent,
    OrderDrugsComponent,
    CategoriesComponent,
    AddCategoryComponent

  ],
  imports: [
    CommonModule,
    PharmacistRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PharmacistModule { }
