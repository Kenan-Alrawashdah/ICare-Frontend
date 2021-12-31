import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(
    private homeService:HomeService,
    private Toastr:ToastrService
  ) { }

  ngOnInit(): void {
  }

  ContactForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    userSubject: new FormControl('', [Validators.required]),
    userPhone: new FormControl(''),
    userMessage: new FormControl('', [Validators.required]),
  });
  onSubmit() {
    this.homeService.AddTestimonial(this.ContactForm).subscribe((data) => {
      if (data.success) {
        this.Toastr.success('Sent Successfully', 'Testimonial ');
        this.ContactForm.reset();
      } else {
        this.Toastr.error(data.errors.toString());
      }
    });
  }

}
