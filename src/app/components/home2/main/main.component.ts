import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(
    private homePageService: HomeService,
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
