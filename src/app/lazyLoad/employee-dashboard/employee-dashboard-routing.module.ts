import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from 'src/app/components/employee-dashboard/account/account.component';
import { EmployeeMainComponent } from 'src/app/components/employee-dashboard/employee-main/employee-main.component';
import { EmployeesInformationComponent } from 'src/app/components/employee-dashboard/employees-information/employees-information.component';
import { ChangePasswordComponent } from 'src/app/components/patient2/change-password/change-password.component';
import { AccountantGuard } from 'src/app/guards/accountant.guard';

const routes: Routes = [
  {
    path: 'Accountant',
    redirectTo: 'Accountant/main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    component: EmployeeMainComponent,
    canActivate:[AccountantGuard]
  },
  {
    path: 'Employees-information',
    component: EmployeesInformationComponent,
    canActivate:[AccountantGuard]
  },
  {
    path:'Account',
    component:AccountComponent,
    canActivate:[AccountantGuard]
  },
  {
    path:'ChangePassword',
    component:ChangePasswordComponent,
    canActivate:[AccountantGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeDashboardRoutingModule {}
