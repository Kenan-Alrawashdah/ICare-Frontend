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
  }
  
  ngOnInit(): void {
    this.name=this.tokenService.getUser();
  }

  logOut()
  {
    this.tokenService.signOut();
  }
}
