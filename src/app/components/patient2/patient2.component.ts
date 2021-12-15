import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token.service';
import { AccountModel } from './models/account.model';
import { PatientService } from './patient.service';

@Component({
  selector: 'app-patient2',
  templateUrl: './patient2.component.html',
  styleUrls: ['./patient2.component.css'],
})
export class Patient2Component implements OnInit {
  user: AccountModel = null;

  constructor(
    private tokenService: TokenStorageService,
    private patientServices: PatientService,
    private tokenservices:TokenStorageService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.getUserName();
  }

  async getUserName() {
    var info = await this.patientServices
      .getPatientInfo()
      .toPromise()
      .then((response) => {
        this.user = response.data;
      });
  }

  LogOut()
  {
    this.tokenService.signOut();
    this.router.navigate(['/Home']);
  }
}
