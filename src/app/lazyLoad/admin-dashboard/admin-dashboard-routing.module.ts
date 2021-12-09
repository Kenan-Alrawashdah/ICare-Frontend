import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from 'src/app/components/admin-dashboard/main/main.component';

const routes: Routes = [
  {
    path: 'Admin',
    redirectTo: 'Admin/main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    component: MainComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDashboardRoutingModule {}
