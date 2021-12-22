import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  ForgotPasswordForm:FormGroup;
  emailValidation:boolean = false; 
  constructor(
  private homeService:HomeService,
  private toastr:ToastrService,
  private ruoter:Router) { 
    this.ForgotPasswordForm = new FormGroup({
      email:new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.homeService.ForgotPassword(this.ForgotPasswordForm.value.email).subscribe(
      (response)=>{
        if(response.success ==false)
        {
          this.emailValidation = true;
        }else{
          this.toastr.success('we sent an email to '+this.ForgotPasswordForm.value.email +'please go and check your email');
          this.ruoter.navigate(['/Home']);
        }
      }
    )
  }

}
