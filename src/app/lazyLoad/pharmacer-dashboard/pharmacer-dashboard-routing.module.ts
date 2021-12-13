import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PharmacerCategorieComponent } from 'src/app/components/pharmacer-dashboard/pharmacer-categorie/pharmacer-categorie.component';
import { PharmacerMainComponent } from 'src/app/components/pharmacer-dashboard/pharmacer-main/pharmacer-main.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/Pharmacer/Dashboard',
    pathMatch: 'full',
  },
  {
    path: 'Dashboard',
    component: PharmacerMainComponent,
  },
  {
    path: 'Categorie',
    component: PharmacerCategorieComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PharmacerDashboardRoutingModule {}
