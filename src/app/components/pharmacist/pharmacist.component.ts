import { Component, Injectable, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token.service';


@Component({
  selector: 'app-pharmacist',
  templateUrl: './pharmacist.component.html',
  styleUrls: ['./pharmacist.component.css']
})
@Injectable({
  providedIn:'root'
})
export class PharmacistComponent implements OnInit {

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
