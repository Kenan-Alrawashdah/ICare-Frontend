import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/components/home2/login/login.component';
import { MainComponent } from 'src/app/components/home2/main/main.component';
import { RegistrationComponent } from 'src/app/components/home2/registration/registration.component';
import { DrugsComponent } from 'src/app/components/home2/drugs/drugs.component';
import { DrugComponent } from 'src/app/components/home2/drug/drug.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/Home/main',
    pathMatch:'full'
  },
{
  path:'main',
  component:MainComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'register',
  component:RegistrationComponent
},
{
  path:'Drugs',
  component:DrugsComponent
},
{
  path:'Drug',
  component:DrugComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Home2RoutingModule { }
