import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HomePageService } from 'src/app/shared/User/Services/home-page.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(
    private homePageService: HomePageService,
    private Toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  ContactForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    userSubject: new FormControl('', [Validators.required]),
    userPhone: new FormControl(''),
    userMessage: new FormControl('', [Validators.required]),
  });
  onSubmit() {
    this.homePageService.AddTestimonial(this.ContactForm).subscribe((data) => {
      if (data.success) {
        this.Toastr.success('success', 'Testimonial');
        this.ContactForm.reset();
      } else {
        this.Toastr.error(data.errors.toString());
      }
    });
  }
}
