import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Constants } from 'src/app/Constants/constants';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private userService: UserService,
     private router: Router,
     private authService:AuthService,
     private tokenStorage:TokenStorageService,
     ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  async onSubmit() {
    let email = this.loginForm.controls['email'].value;
    let password = this.loginForm.controls['password'].value;


    await this.authService.login(email, password).toPromise().then(
      data => {
        console.log(data)
        if(data.success)
        {
          this.tokenStorage.saveToken(data.data.accessToken);
          this.tokenStorage.saveRefreshToken(data.data.refreshToken);
          this.tokenStorage.saveUser(data);
          this.router.navigate(['Home']);
        }else{
          console.log(data.errors)
        }
        

      },
      err => {
         // this.errorMessage = err.error.message;
         // this.isLoginFailed = true; 
        console.log('error' + err.error.message);
      }
    );

    console.log(this.tokenStorage.getToken());
    console.log(this.tokenStorage.getRefreshToken());
    console.log(this.tokenStorage.getUser());
    
    
  }
}
