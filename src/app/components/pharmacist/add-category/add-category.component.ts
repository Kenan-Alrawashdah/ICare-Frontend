import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PharmacistService } from '../Services/pharmacist.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  imageFile : File = null ;
  AddCategoryFormGroup:FormGroup;

  constructor(
    private pharmacistService:PharmacistService,
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
    this.AddCategoryFormGroup.patchValue({
      image: this.imageFile
    });
    this.pharmacistService.AddCategory(this.AddCategoryFormGroup.value).subscribe(
      (response)=>{
        console.log(response);
        console.log('123')
      },
      (error)=>{
        console.log(error);
        console.log('safd')
      }
    );
  }

}
