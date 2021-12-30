import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token.service';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  RegistrationForm: FormGroup;
  emailExistValidation:boolean = false; 
  loginValidation: boolean;
  error: string;
  constructor(
    private formBuilder: FormBuilder,
    private homeService:HomeService,
    private tokenStorage:TokenStorageService,
    private router:Router,
    private authService:AuthService,
    private socialAuthService: SocialAuthService,
  ) {
    this.RegistrationForm = new FormGroup({
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required ,Validators.minLength(8)]),
      phone: new FormControl(''),
    });
  }

  
  ngOnInit(): void {}

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
