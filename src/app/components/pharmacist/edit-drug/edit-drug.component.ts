import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryModel } from '../../home2/models/Category.model';
import { PharmacistService } from '../Services/pharmacist.service';

@Component({
  selector: 'app-edit-drug',
  templateUrl: './edit-drug.component.html',
  styleUrls: ['./edit-drug.component.css']
})
export class EditDrugComponent implements OnInit {

  EditDrugFormGroup:FormGroup;
  image : File = null ;
  CategoryList:CategoryModel[];
  CategoryId:number;
  constructor(
    private pharmacistService:PharmacistService,
    public fb: FormBuilder,
    private router:Router
  ) { 
    this.GetDrug()
  }

  async GetDrug(){
    await this.pharmacistService.GetDrug().toPromise()
    .then(
      (response)=>{
        
        console.log(response.data.drugCategory)
        this.EditDrugFormGroup = this.fb.group({
          DrugCategoryId: [,Validators.required],
          id: [response.data.id,Validators.required],
          Name: [response.data.name,Validators.required],
          Price: [response.data.price,Validators.required],
          Brand: [response.data.brand,Validators.required],
          AvailableQuantity: [response.data.availableQuantity,Validators.required],
          Description: [response.data.description,Validators.required],
          image: [null]
        })
         
      }
    )
  }

  onFileSelected(event){
    this.image =<File> event.target.files[0];
  }

async ngOnInit() {
  if(this.pharmacistService.drugId == -1 )
  {
    this.router.navigate(['pharmacist/GetAllDrugs'])
  }else{
    
    await  this.getAllCategories();
  }
  
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
  onSubmit(){
    this.EditDrugFormGroup.patchValue({
      image: this.image
    });
    console.log(this.EditDrugFormGroup.value)
    this.pharmacistService.EditDrug(this.EditDrugFormGroup.value).subscribe(
      (response)=>{
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

}
