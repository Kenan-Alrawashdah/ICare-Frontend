import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from 'src/app/components/admin-dashboard/add-employee/add-employee.component';
import { MainComponent } from 'src/app/components/admin-dashboard/main/main.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'main',
    pathMatch: 'full'
  },
  {
    path:'main',
    component:MainComponent
  },
  {
    path:'add',
    component:AddEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
