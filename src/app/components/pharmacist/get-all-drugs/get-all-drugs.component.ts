import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryModel } from '../../home2/models/Category.model';
import { DrugModel } from '../Models/Drug.model';
import { PharmacistService } from '../Services/pharmacist.service';

@Component({
  selector: 'app-get-all-drugs',
  templateUrl: './get-all-drugs.component.html',
  styleUrls: ['./get-all-drugs.component.css']
})
export class GetAllDrugsComponent implements OnInit {

  listOfDrugs:DrugModel[];
  CategoryList:CategoryModel[];
  constructor(
    private pharmacistService:PharmacistService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getAllDrugs();
    this.getAllCategories();
  }

  async getAllDrugs(){
    await this.pharmacistService.getAll().toPromise()
    .then(
      (response)=>{
        this.listOfDrugs = response.data;
        console.log(this.listOfDrugs)
      }
    )
  }

  async getAllCategories(){
    await this.pharmacistService.GetAllCategory().toPromise()
    .then(
      (response)=>{
        this.CategoryList = response.data['categories'];
        console.log(this.CategoryList)
      }
    )
  }

  goToDrug(id:number){
    this.pharmacistService.drugId = id ; 
    this.router.navigate(['pharmacist/SingleDrug'])
  }

}
