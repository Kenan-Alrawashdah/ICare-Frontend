import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private router:Router
  ) {
    
  }

   async ngOnInit() {
    await this.getAllCategories();
      this.getRangomDrugs();
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
