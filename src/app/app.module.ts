import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { authInterceptorProviders } from './services/auth.Interceptor';
import { Patient2Component } from './components/patient2/patient2.component';
import { Patient2Module } from './lazyLoad/patient2/patient2.module';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { DeliveryDashboardComponent } from './components/delivery-dashboard/delivery-dashboard.component';
import { Home2Component } from './components/home2/home2.component';
import { Home2Module } from './lazyLoad/home2/home2.module';
import { DeliveryDashboardModule } from './lazyLoad/delivery-dashboard/delivery-dashboard.module';
import { EmployeeDashboardModule } from './lazyLoad/employee-dashboard/employee-dashboard.module';
import { Admin2Component } from './components/admin2/admin2.component';
import { Admin2Module } from './lazyLoad/admin2/admin2.module';
import { PharmacistComponent } from './components/pharmacist/pharmacist.component';
import { PharmacistModule } from './lazyLoad/pharmacist/pharmacist.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthServiceConfig,
  SocialLoginModule,
} from 'angularx-social-login';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeDashboardComponent,
    DeliveryDashboardComponent,
    Patient2Component,
    Home2Component,
    Admin2Component,
    PharmacistComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //lazyLoad Models
    Patient2Module,
    Home2Module,
    Admin2Module,
    PharmacistModule,
    DeliveryDashboardModule,
    EmployeeDashboardModule,
    //--------
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    SocialLoginModule,
    AppRoutingModule,
  ],

  providers: [
    authInterceptorProviders,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '1339833275-e2bv8cv22feq8fojnr4fnqre8gcif5es.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('1291083414713212'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
