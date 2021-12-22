import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token.service';

@Component({
  selector: 'app-admin2',
  templateUrl: './admin2.component.html',
  styleUrls: ['./admin2.component.css']
})
export class Admin2Component implements OnInit {

  name:string ;
  constructor(
    private tokenService:TokenStorageService
  ) { 
    this.name=tokenService.getUser();
  }

  ngOnInit(): void {
  }

  logOut()
  {
    this.tokenService.signOut();
  }
}
