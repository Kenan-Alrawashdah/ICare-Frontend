import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from 'src/app/components/admin2/add-employee/add-employee.component';

const routes: Routes = [
  {
    path:'AddEmployee',
    component:AddEmployeeComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Admin2RoutingModule { }
