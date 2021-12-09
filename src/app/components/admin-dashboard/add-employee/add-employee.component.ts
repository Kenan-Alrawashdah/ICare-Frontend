import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Role } from '../Models/GetRoles';
import { AdminService } from '../Service/admin.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
 
  AddEmployeeForm: FormGroup;
  roles : Role[]=[];
  constructor(private adminService: AdminService) {
    this.AddEmployeeForm = new FormGroup({
       fName : new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(55)]),
       lName : new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(55)]),
       email : new FormControl('',[Validators.required,Validators.email]),
       password : new FormControl('',[Validators.required,Validators.minLength(8)]),
       phone : new FormControl('',[Validators.required]),
       hourSalary : new FormControl('',[Validators.required]),
       MWH : new FormControl('',[Validators.required]),
       role : new FormControl('',[Validators.required])
      })
   }

  ngOnInit(): void {
   this.getRoles();
  }
  addEmployee(){
     return this.adminService.addEmployee(this.AddEmployeeForm.value)
            .subscribe((res)=>{
               console.log(res.success);
            },
            (error =>{
              console.log('Error :'+ error);
            })
            );
  }
  getRoles(){
      this.adminService.getRoles().subscribe((data)=>{
          if(data.success){
            console.log('kenan');
            this.roles = data.data;
          }
      },
      (error)=>{
        console.log('error :', error);
      });
  }
}
