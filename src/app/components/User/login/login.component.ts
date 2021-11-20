import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Constants } from 'src/app/Helper/constants';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    let email = this.loginForm.controls['email'].value;
    let password = this.loginForm.controls['password'].value;

    this.userService.login(email, password).subscribe(
      (data: any) => {
        if (data.success == 1) {
          localStorage.setItem(Constants.USER_KEY, JSON.stringify(data.Data));
          this.router.navigate(['/Index']);
        }
        console.log('response', data);
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
}
