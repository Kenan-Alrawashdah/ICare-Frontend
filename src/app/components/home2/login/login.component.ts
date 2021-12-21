import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token.service';
import { Home2Component } from '../home2.component';
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
    private home2Component: Home2Component
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
    (window as any).fbAsyncInit = function () {
      FB.init({
        appId: '1291083414713212',
        cookie: true,
        xfbml: true,
        version: 'v12.0',
      });
      FB.AppEvents.logPageView();
    };
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
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
            this.router.navigate(['Home']).then(() => {
              window.location.reload();
            });
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

  submitLogin() {
    console.log('submit login to facebook');
    // FB.login();
    FB.login((response) => {
      this.authService
        .LoginByFaceBook(response.authResponse.accessToken)
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
