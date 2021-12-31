import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PharmacistService } from '../Services/pharmacist.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  imageFile : File = null ;
  AddCategoryFormGroup:FormGroup;
  nameValidator:boolean =false;

  constructor(
    private pharmacistService:PharmacistService,
    private toastr:ToastrService,
    private router:Router,
    public fb: FormBuilder
  ) { 
    this.pharmacistService.getCategoryById().toPromise().then(
      (response)=>{
        console.log(response)
        this.AddCategoryFormGroup = this.fb.group({
          id:[response.data.id],
          name: [response.data.name,Validators.required],
          image: [null,Validators.required]
        })
      }
    )
  }
  ngOnInit(): void {
    if(this.pharmacistService.EditDrugId == -1)
    {
      this.router.navigate(['/pharmacist/Categories'])
    }
  }

  onFileSelected(event){
    this.imageFile =<File> event.target.files[0];
  }



  onSubmit(){
    console.log(this.AddCategoryFormGroup.value)
    if(this.AddCategoryFormGroup.value.name == '')
    {
      this.nameValidator =true;
    }else {
      this.AddCategoryFormGroup.patchValue({
        image: this.imageFile
      });
      this.pharmacistService.EditCategory(this.AddCategoryFormGroup.value).subscribe(
        (response)=>{
          this.toastr.success('Category edited successfully'); 
          this.router.navigate(['/pharmacist/Categories']);
        },
        (error)=>{
          console.log(error);
        }
      );
    }

}
}
