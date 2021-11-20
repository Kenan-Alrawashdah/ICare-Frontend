import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  public RegistrationForm = this.formBuilder.group({
    fname: ['', Validators.required],
    lname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    phone: ['', Validators.required],
  });
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    let fname = this.RegistrationForm.controls['fname'].value;
    let lname = this.RegistrationForm.controls['lname'].value;
    let email = this.RegistrationForm.controls['email'].value;
    let password = this.RegistrationForm.controls['password'].value;
    let phone = this.RegistrationForm.controls['phone'].value;

    this.userService.register(fname, lname, email, password, phone).subscribe(
      (data) => {
        console.log('response', data);
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
}
