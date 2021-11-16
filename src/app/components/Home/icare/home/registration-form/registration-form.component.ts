import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/User/Services/user.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
  constructor(public service: UserService) {}

  ngOnInit(): void {}
}
