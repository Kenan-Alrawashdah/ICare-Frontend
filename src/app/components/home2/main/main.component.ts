import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from '../home.service';
import { CategoryModel } from '../models/Category.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  images = [
    {path: 'assets/img/slider/slider-1.svg'},
    {path: 'assets/img/slider/slider-1.svg'},
    {path: 'assets/img/slider/slider-1.svg'},

]
  Categories:CategoryModel[];
   constructor(
    private homeService: HomeService,
    private Toastr: ToastrService,
    private router:Router
  ) {
    
  }

   async ngOnInit() {
    await this.getAllCategories();
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
        this.Toastr.success('success', 'Testimonial');
        this.ContactForm.reset();
      } else {
        this.Toastr.error(data.errors.toString());
      }
    });
  }

    async getAllCategories(){
    await this.homeService.GetAllCategory().toPromise().
    then(
      (response)=>{
        this.Categories = response.data['categories']
      }
    )

  }

  public goToCategoryDrugs(id:number){
    this.homeService.CategoryId = id;
   this.router.navigate(['Home/Drugs'])
  }
  

}
