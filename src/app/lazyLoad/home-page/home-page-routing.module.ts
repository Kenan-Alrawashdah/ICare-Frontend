import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ICareComponent } from 'src/app/components/Home/icare/icare.component';
import { ForgotPasswordComponent } from 'src/app/components/User/forgot-password/forgot-password.component';
import { LoginComponent } from 'src/app/components/User/login/login.component';
import { PaymentComponent } from 'src/app/components/User/payment/payment.component';
import { RegistrationComponent } from 'src/app/components/User/registration/registration.component';
import { SubscribeComponent } from 'src/app/components/User/subscribe/subscribe.component';

const routes: Routes = [
  {
    path: '',
    component: ICareComponent,
  },
  {
    path: 'User/SignIn',
    component: LoginComponent,
  },
  {
    path: 'User/ForgotPassword',
    component: ForgotPasswordComponent,
  },
  {
    path: 'User/PricePlan',
    component: SubscribeComponent,
  },
  {
    path: 'User/Payment',
    component: PaymentComponent,
  },
  {
    path: 'User/SignUp',
    component: RegistrationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    CommonModule],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
