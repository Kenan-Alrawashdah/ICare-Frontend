import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryModel } from '../../home2/models/Category.model';
import { PharmacistService } from '../Services/pharmacist.service';

@Component({
  selector: 'app-add-drug',
  templateUrl: './add-drug.component.html',
  styleUrls: ['./add-drug.component.css']
})
export class AddDrugComponent implements OnInit {

  AddDrugFormGroup:FormGroup;
  imageFile : File = null ;
  CategoryList:CategoryModel[];
  constructor(
    private pharmacistService:PharmacistService,
    public fb: FormBuilder,
    private router:Router,
    private toastr:ToastrService
  ) { 
    this.AddDrugFormGroup = this.fb.group({
      DrugCategoryId: ['',Validators.required],
      Name: ['',Validators.required],
      Price: ['',Validators.required],
      Brand: ['',Validators.required],
      AvailableQuantity: ['',Validators.required],
      Description: ['',Validators.required],
      image: [null]
    })
  }

  onFileSelected(event){
    this.imageFile =<File> event.target.files[0];
  }

  ngOnInit(): void {
    this.getAllCategories();
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
    this.AddDrugFormGroup.patchValue({
      image: this.imageFile
    });
    this.pharmacistService.addDrug(this.AddDrugFormGroup.value).subscribe(
      (response)=>{
        this.toastr.success('Drug added successfully');
      this.router.navigate(['/pharmacist/GetAllDrugs']);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

}
