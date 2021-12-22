import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/components/home2/login/login.component';
import { MainComponent } from 'src/app/components/home2/main/main.component';
import { RegistrationComponent } from 'src/app/components/home2/registration/registration.component';
import { DrugsComponent } from 'src/app/components/home2/drugs/drugs.component';
import { DrugComponent } from 'src/app/components/home2/drug/drug.component';
import { CartComponent } from 'src/app/components/home2/cart/cart.component';
import { CheckOutComponent } from 'src/app/components/home2/check-out/check-out.component';
import { ThankYouComponent } from 'src/app/components/home2/thank-you/thank-you.component';
import { SubscriptionComponent } from 'src/app/components/home2/subscription/subscription.component';
import { SubscriptionCheckOutComponent } from 'src/app/components/home2/subscription-check-out/subscription-check-out.component';
import { PatientGuard } from 'src/app/guards/patient.guard';
import { GuestGuard } from 'src/app/guards/guest.guard';
import { NotificationsComponent } from 'src/app/components/home2/notifications/notifications.component';
import { AboutusComponent } from 'src/app/components/home2/aboutus/aboutus.component';
import { ThankYou2Component } from 'src/app/components/home2/thank-you2/thank-you2.component';
import { ForgotPasswordComponent } from 'src/app/components/home2/forgot-password/forgot-password.component';

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
  component:LoginComponent,
  canActivate:[GuestGuard]
},
{
  path:'register',
  component:RegistrationComponent,
  canActivate:[GuestGuard]

},
{
  path:'Drugs',
  component:DrugsComponent
},
{
  path:'Drug',
  component:DrugComponent
},
{
  path:'CheckOut',
  component:CheckOutComponent,
  canActivate:[PatientGuard]
},{
  path:'Cart',
  component:CartComponent,
  canActivate:[PatientGuard]
},{
  path:'ThankYou',
  component:ThankYouComponent,
  canActivate:[PatientGuard]
},{
  path:'Subscription',
  component:SubscriptionComponent
},
{
  path:'SubscriptionCheckOut/:id',
  component:SubscriptionCheckOutComponent,
  canActivate:[PatientGuard]
},{
  path:'Notifications',
  component:NotificationsComponent
},
{
  path:'AboutUs',
  component:AboutusComponent
},
{
  path:'Thanks',
  component:ThankYou2Component
},
{
  path:'ForgotPassword',
  component:ForgotPasswordComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Home2RoutingModule { }
