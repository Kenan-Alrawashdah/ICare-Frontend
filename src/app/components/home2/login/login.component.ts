import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token.service';
import { Home2Component } from '../home2.component';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthService,
} from 'angularx-social-login';
import { HomeService } from '../home.service';
import { Registration } from '../models/registration.model';

declare var FB: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginValidation: boolean = false;
  error: string = '';
  constructor(
    private router: Router,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private home2Component: Home2Component,
    private socialAuthService: SocialAuthService,
    private homeService: HomeService
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  async onSubmit() {
    let email = this.loginForm.controls['email'].value;
    let password = this.loginForm.controls['password'].value;

    await this.authService
      .login(email, password)
      .toPromise()
      .then(
        (data) => {
          if (data.success) {
            this.tokenStorage.saveToken(data.data.accessToken);
            this.tokenStorage.saveRefreshToken(data.data.refreshToken);
            let role = this.tokenStorage.GetRole();
            if (role == 'Admin') {
              this.router.navigate(['Admin']).then(() => {
                window.location.reload();
              });
            } else if (role == 'Employee') {
              this.router.navigate(['Accountant']).then(() => {
                window.location.reload();
              });
            } else if (role == 'Delivery') {
              this.router.navigate(['Delivery']).then(() => {
                window.location.reload();
              });
            } else if (role == 'Pharmacist') {
              this.router.navigate(['pharmacist']).then(() => {
                window.location.reload();
              });
            } else {
              this.router.navigate(['Home']).then(() => {
                window.location.reload();
              });
            }
          } else {
            this.loginValidation = true;
            this.error = data.errors[0];
          }
        },
        (err) => {
          // this.errorMessage = err.error.message;
          // this.isLoginFailed = true;
          console.log('error' + err.error.message);
        }
      );
  }

  Google(): void {
    this.socialAuthService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((data) => {
        console.log(data);
        this.homeService
          .LoginAndRegistrationUsingSocial(
            data.firstName,
            data.lastName,
            data.email
          )
          .subscribe((data) => {
            if (data.success) {
              this.tokenStorage.saveToken(data.data.accessToken);
              this.tokenStorage.saveRefreshToken(data.data.refreshToken);
              this.router.navigate(['Home']).then(() => {
                window.location.reload();
              });
            } else {
              this.loginValidation = true;
              this.error = data.errors[0];
            }
          });
      });
  }
  Facebook(): void {
    this.socialAuthService
      .signIn(FacebookLoginProvider.PROVIDER_ID)
      .then((data) => {
        var fname: string = data.response.first_name;
        var lname: string = data.response.last_name;
        var email: string = data.response.email;
        this.homeService
          .LoginAndRegistrationUsingSocial(fname, lname, email)
          .subscribe((data) => {
            if (data.success) {
              this.tokenStorage.saveToken(data.data.accessToken);
              this.tokenStorage.saveRefreshToken(data.data.refreshToken);
              this.router.navigate(['Home']).then(() => {
                window.location.reload();
              });
            } else {
              this.loginValidation = true;
              this.error = data.errors[0];
            }
          });
      });
  }
}
