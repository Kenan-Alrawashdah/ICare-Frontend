import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from 'src/app/components/pharmacist/add-category/add-category.component';
import { AddDrugComponent } from 'src/app/components/pharmacist/add-drug/add-drug.component';
import { CategoriesComponent } from 'src/app/components/pharmacist/categories/categories.component';
import { EditCategoryComponent } from 'src/app/components/pharmacist/edit-category/edit-category.component';
import { EditDrugComponent } from 'src/app/components/pharmacist/edit-drug/edit-drug.component';
import { GetAllDrugsComponent } from 'src/app/components/pharmacist/get-all-drugs/get-all-drugs.component';
import { OpenOrdersComponent } from 'src/app/components/pharmacist/open-orders/open-orders.component';
import { OrderDrugsComponent } from 'src/app/components/pharmacist/order-drugs/order-drugs.component';
import { SingleDrugComponent } from 'src/app/components/pharmacist/single-drug/single-drug.component';

const routes: Routes = [
  {
    path: 'pharmacist',
    redirectTo: 'pharmacist/GetAllDrugs',
    pathMatch: 'full',
  },
  {
    path: 'AddDrug',
    component: AddDrugComponent,
  },
  {
    path: 'GetAllDrugs',
    component: GetAllDrugsComponent,
  },
  {
    path:'SingleDrug',
    component:SingleDrugComponent
  },
  {
    path:'EditDrug',
    component:EditDrugComponent
  },{
    path:'OpenOrders',
    component:OpenOrdersComponent
  },
  {
    path:'OrderDrugs',
    component:OrderDrugsComponent
  },
  {
    path:'Categories',
    component:CategoriesComponent
  },
  {
    path:'AddCategory',
    component:AddCategoryComponent
  },
  {
    path:'EditCategory',
    component:EditCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PharmacistRoutingModule {}
