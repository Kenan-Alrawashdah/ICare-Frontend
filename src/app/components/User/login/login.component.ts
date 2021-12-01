import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Constants } from 'src/app/Helper/constants';
import { UserService } from 'src/app/services/user.service';
declare var FB: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
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
  onSubmit() {
    let email = this.loginForm.controls['email'].value;
    let password = this.loginForm.controls['password'].value;

    this.userService.login(email, password).subscribe(
      (data) => {
        if (data.success == true) {
          localStorage.setItem(Constants.USER_KEY, data.data.token);

          var payLoad = JSON.parse(
            window.atob(localStorage.getItem(Constants.USER_KEY).split('.')[1])
          );
          var userRole = payLoad.role;
          //this.toast.success('Welcome to first toast ', 'aasdasdas');
          if (userRole == 'Admin') {
            this.router.navigate(['/Index']);
          } else if (userRole == 'Patient') {
            this.router.navigate(['/Index']);
          } else if (userRole == 'Subscriber') {
            this.router.navigate(['/Index']);
          } else if (userRole == 'Employee') {
            this.router.navigate(['/Index']);
          } else {
            this.router.navigate(['/Index']);
          }
        }
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  submitLogin() {
    console.log('submit login to facebook');
    // FB.login();
    FB.login((response) => {
      console.log('submitLogin', response);
    });
  }
}
