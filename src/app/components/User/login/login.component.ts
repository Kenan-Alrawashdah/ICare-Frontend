import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Constants } from 'src/app/Helper/constants';
import { UserService } from 'src/app/services/user.service';

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
}
