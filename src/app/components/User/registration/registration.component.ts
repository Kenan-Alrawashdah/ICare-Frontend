import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Registration } from 'src/app/shared/User/Models/registration.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  RegistrationForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.RegistrationForm = new FormGroup({
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
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
