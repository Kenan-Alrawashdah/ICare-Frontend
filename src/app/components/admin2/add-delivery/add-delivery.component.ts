import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';
import { Role } from '../Models/GetRoles';

@Component({
  selector: 'app-add-delivery',
  templateUrl: './add-delivery.component.html',
  styleUrls: ['./add-delivery.component.css']
})
export class AddDeliveryComponent implements OnInit {

  AddEmployeeForm: FormGroup;
  emailValidation:boolean = false; 
  err : string;
  constructor( 
    public fb: FormBuilder,
    private adminService:AdminService,
    private router:Router,
    private Toastr:ToastrService
    ) {
    this.AddEmployeeForm = new FormGroup({
      firstName : new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(55)]),
      lastName : new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(55)]),
      email : new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required,Validators.minLength(8)]),
      phoneNumber : new FormControl('',[Validators.required]),
     });
   }
   
  ngOnInit(): void {
  }
  
  addEmployee(){

     this.adminService.AddDelivery(this.AddEmployeeForm.value).subscribe((res)=>{
             if(res.success){
               console.log(res.success);
               this.err = '';
               this.Toastr.success('Delivery added successfully');
               this.router.navigate(['/Admin/Deliveries']);
             }else{
              this.emailValidation  = true; 
             }
    }
    , (err)=>{
      console.log(err);     
    })
  }


}
