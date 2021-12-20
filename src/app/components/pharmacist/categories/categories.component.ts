import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../../home2/models/Category.model';
import { PharmacistService } from '../Services/pharmacist.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  CategoriesList:CategoryModel[]

  constructor(
    private pharmacistService:PharmacistService
  ) { }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories()
  {
    this.pharmacistService.GetAllCategories().subscribe(
      (response)=>{
        this.CategoriesList = response.data['categories']
      }
    )
  }
}
