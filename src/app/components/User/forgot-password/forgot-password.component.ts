import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}
  public ForgotPasswordForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]]
  });
  ngOnInit(): void {}
  onSubmit() {
    let email = this.ForgotPasswordForm.controls['email'].value;

    this.userService.ForgotPassword(email).subscribe(
      (data) => {
        if (data.success == true) {
        }
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
}
