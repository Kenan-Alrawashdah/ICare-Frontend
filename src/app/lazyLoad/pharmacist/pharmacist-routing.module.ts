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
import { PharmacistGuard } from 'src/app/guards/pharmacist.guard';

const routes: Routes = [
  {
    path: 'pharmacist',
    redirectTo: 'pharmacist/GetAllDrugs',
    pathMatch: 'full',
  },
  {
    path: 'AddDrug',
    component: AddDrugComponent,
    canActivate:[PharmacistGuard]
  },
  {
    path: 'GetAllDrugs',
    component: GetAllDrugsComponent,
    canActivate:[PharmacistGuard]

  },
  {
    path:'SingleDrug',
    component:SingleDrugComponent,
    canActivate:[PharmacistGuard]

  },
  {
    path:'EditDrug',
    component:EditDrugComponent,
    canActivate:[PharmacistGuard]

  },{
    path:'OpenOrders',
    component:OpenOrdersComponent,
    canActivate:[PharmacistGuard]

  },
  {
    path:'OrderDrugs',
    component:OrderDrugsComponent,
    canActivate:[PharmacistGuard]

  },
  {
    path:'Categories',
    component:CategoriesComponent,
    canActivate:[PharmacistGuard]

  },
  {
    path:'AddCategory',
    component:AddCategoryComponent,
    canActivate:[PharmacistGuard]

  },
  {
    path:'EditCategory',
    component:EditCategoryComponent,
    canActivate:[PharmacistGuard]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PharmacistRoutingModule {}
