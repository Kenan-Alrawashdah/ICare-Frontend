import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { data } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token.service';
import { PatientService } from '../../patient2/patient.service';
import { EmployeeDashboardComponent } from '../employee-dashboard.component';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  AccountForm: FormGroup;
  constructor(
    private patientServices:PatientService,
    private toastr:ToastrService,
    private authService: AuthService,
    private tokenService: TokenStorageService,
    private EmployeeDashboardComponent:EmployeeDashboardComponent
  ) {
    this.AccountForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl(''),
    });
  }

  ngOnInit(): void {
    
    this.fillForm();
  }

  

  async fillForm(){
    var info = await this.patientServices.getPatientInfo().toPromise();
    if(info.success == true)
    {
      this.AccountForm = new FormGroup({
        firstName: new FormControl(info.data.firstName, [Validators.required]),
        lastName: new FormControl(info.data.lastName, [Validators.required]),
        phoneNumber: new FormControl(info.data.phoneNumber),
      });
    }
  }

  async onSubmit(){
    
    var result = await  this.patientServices.editPatientInfo(this.AccountForm.value);
    result.toPromise().then(
      data=>{
        if(data.success == true)
        {
          let token = this.tokenService.getToken();
          let refreshToken = this.tokenService.getRefreshToken();
           this.authService
            .refreshToken(token, refreshToken)
            .toPromise()
            .then((response) => {
              this.tokenService.saveToken(response['data']['accessToken']);
              this.tokenService.saveRefreshToken(response['data']['refreshToken'] );
              this.EmployeeDashboardComponent.ngOnInit();
              this.ngOnInit();
              this.toastr.success('Data updated successfully','',{timeOut:1500})
            });
          
        }
      },
      error=>{
        console.log(error)
      }
    )
  }

}
