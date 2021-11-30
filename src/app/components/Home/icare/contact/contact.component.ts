import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  ContactForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.ContactForm = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Subject: new FormControl('', [Validators.required]),
      Phone: new FormControl(''),
      Message: new FormControl('', [Validators.required]),
    });
  }
  onSubmit() {
    console.log(this.ContactForm.value);
  }
}
