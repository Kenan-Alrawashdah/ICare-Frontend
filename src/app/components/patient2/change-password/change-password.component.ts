import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ChangePasswordModel } from '../models/ChangePassword.model';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  ChangePasswordForm: FormGroup;
  matchValidation:boolean = false;
  oldPasswordValidation:boolean = false; 
  constructor(
    private patientService:PatientService,
    private toastr:ToastrService
  ) {
   
  }

  ngOnInit(): void {
    this.ChangePasswordForm = new FormGroup({
      oldPassword: new FormControl('', [Validators.required]),
      newPassword: new FormControl('', [Validators.required,Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
    this.matchValidation = false;
    this.oldPasswordValidation = false; 
  }

  onSubmit()
  {
    if(this.ChangePasswordForm.value.newPassword != this.ChangePasswordForm.value.confirmPassword )
    {
      this.matchValidation = true;
    }else{
      let model :ChangePasswordModel = new  ChangePasswordModel();
      model.newPassword = this.ChangePasswordForm.value.newPassword;
      model.oldPassword = this.ChangePasswordForm.value.oldPassword;
      this.patientService.changePassword(model).subscribe(
        (response)=>{
          if(response.success == true)
          {
            this.toastr.success('Password has been changed successfully','',{timeOut:2000});
            this.ngOnInit()
          }else{
            if(response.errors[0] == "Wrong password"){
              this.oldPasswordValidation= true
            }
          }
        }
      )
    }
  }
}
