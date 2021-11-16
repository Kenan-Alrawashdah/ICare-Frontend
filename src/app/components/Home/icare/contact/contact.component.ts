import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  ContactForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    let Name = '';
    let Email = '';
    let Subject = '';
    let Phone = '';
    let Message = '';

    this.ContactForm = new FormGroup({
      Name: new FormControl(Name, [Validators.required]),
      Email: new FormControl(Email, [Validators.required]),
      Subject: new FormControl(Subject, [Validators.required]),
      Phone: new FormControl(Phone, [Validators.required]),
      Message: new FormControl(Message, [Validators.required]),
    });
  }

  onSubmit() {
    const Name = this.ContactForm.value.Name;
    const Email = this.ContactForm.value.Email;
    const Subject = this.ContactForm.value.Subject;
    const Phone = this.ContactForm.value.Phone;
    const Message = this.ContactForm.value.Message;
  }
}
