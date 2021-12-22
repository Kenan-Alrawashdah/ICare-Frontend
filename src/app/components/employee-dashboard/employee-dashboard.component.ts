import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/Constants/constants';
import { TokenStorageService } from 'src/app/services/token.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css'],
})
export class EmployeeDashboardComponent implements OnInit {
  name:string ;
  constructor(
    private tokenService:TokenStorageService
  ) { 
    this.name=tokenService.getUser();
  }
  ngOnInit(): void {}
  logOut() {
    this.tokenService.signOut();
  }
}
