import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token.service';
import { HomeService } from '../home.service';
declare var FB: any;

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  RegistrationForm: FormGroup;
  emailExistValidation:boolean = false; 
  constructor(
    private formBuilder: FormBuilder,
    private homeService:HomeService,
    private tokenStorage:TokenStorageService,
    private router:Router,
    private authService:AuthService
  ) {
    this.RegistrationForm = new FormGroup({
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required ,Validators.minLength(8)]),
      phone: new FormControl(''),
    });
  }

  
  ngOnInit(): void {
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
    let fname = this.RegistrationForm.controls['fname'].value;
    let lname = this.RegistrationForm.controls['lname'].value;
    let email = this.RegistrationForm.controls['email'].value;
    let password = this.RegistrationForm.controls['password'].value;
    let phone = this.RegistrationForm.controls['phone'].value;
    this.homeService.register(fname, lname, email, password, phone).subscribe(
      (data) => {
        console.log('sadf')
        if(data.success == false)
        {
          this.emailExistValidation = true;
        }else {
          this.tokenStorage.saveToken(data.data.accessToken);
          this.tokenStorage.saveRefreshToken(data.data.refreshToken);
          this.router.navigate(['Home']).then(() => {
            window.location.reload();
          });
        } 
      },
      (error) => {
        console.log('sadf')
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
          } 
        });
    });
  }

}
