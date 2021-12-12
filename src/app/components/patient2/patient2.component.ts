import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token.service';
import { AccountModel } from './models/account.model';
import { PatientService } from './patient.service';

@Component({
  selector: 'app-patient2',
  templateUrl: './patient2.component.html',
  styleUrls: ['./patient2.component.css']
})
export class Patient2Component implements OnInit {

  user:AccountModel;

  constructor(
    private tokenService:TokenStorageService,
    private patientServices:PatientService
  ) { }

  ngOnInit(): void {
    this.getUserName();
  }

  async getUserName(){
    var info = await this.patientServices.getPatientInfo().toPromise()
    .then(
(response)=>{
  this.user = response.data;
}

    )
  
    
  }

}
