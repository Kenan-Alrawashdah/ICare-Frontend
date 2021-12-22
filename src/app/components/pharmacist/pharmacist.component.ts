import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token.service';


@Component({
  selector: 'app-pharmacist',
  templateUrl: './pharmacist.component.html',
  styleUrls: ['./pharmacist.component.css']
})
export class PharmacistComponent implements OnInit {

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
