import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from '../home.service';
import { CategoryModel } from '../models/Category.model';
import { DrugModel } from '../models/Drug.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  images:string[] = [
   'assets/img/slider/slider-1.svg',
  'assets/img/slider/slider-1.svg',
     'assets/img/slider/slider-1.svg'

]
RandomDrugsList:DrugModel[];
  Categories:CategoryModel[];
   constructor(
    private homeService: HomeService,
    private Toastr: ToastrService,
    private router:Router,
  private spinner: NgxSpinnerService
  ) {
    
  }

   async ngOnInit() {
    this.spinner.show()
    await this.getAllCategories();
      this.getRangomDrugs();
  }
  ngAfterViewInit()
  {
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);
    
  }
  
  getRangomDrugs()
  {
    this.homeService.GetRandomDrugs().subscribe(
      (response)=>{
        this.RandomDrugsList = response.data
      }
    )
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
    this.homeService.CategoryName = this.Categories.find(c => c.id == id).name;
   this.router.navigate(['Home/Drugs'])
  }

  public GoToDrug(id:number){
    this.homeService.DrugId = id;
    this.router.navigate(['Home/Drug']);
  }
  

}
