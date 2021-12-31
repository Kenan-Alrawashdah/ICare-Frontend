import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PharmacistService } from '../Services/pharmacist.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  imageFile : File = null ;
  AddCategoryFormGroup:FormGroup;
  nameValidator:boolean =false;
  imageValidator:boolean = false;
  constructor(
    private pharmacistService:PharmacistService,
    private toastr:ToastrService,
    private router:Router,
    public fb: FormBuilder
  ) { 
    this.AddCategoryFormGroup = this.fb.group({
      Name: ['',Validators.required],
      image: [null,Validators.required]
    })
  }
  ngOnInit(): void {
  }

  onFileSelected(event){
    this.imageFile =<File> event.target.files[0];
  }

  onSubmit(){

    console.log(this.AddCategoryFormGroup.value.Name)
    if(this.AddCategoryFormGroup.value.Name == '')
    {
      this.nameValidator =true;
    }if(this.imageFile == null){
      this.imageValidator =true;
    }else {
      this.AddCategoryFormGroup.patchValue({
        image: this.imageFile
      });
      this.pharmacistService.AddCategory(this.AddCategoryFormGroup.value).subscribe(
        (response)=>{
          this.toastr.success('Category added successfully'); 
          this.router.navigate(['/pharmacist/Categories']);
        },
        (error)=>{
          console.log(error);
        }
      );
    }

 
  }

}
