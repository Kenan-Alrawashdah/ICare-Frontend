import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/Constants/constants';
import { TokenStorageService } from 'src/app/services/token.service';

@Component({
  selector: 'app-delivery-dashboard',
  templateUrl: './delivery-dashboard.component.html',
  styleUrls: ['./delivery-dashboard.component.css'],
})
export class DeliveryDashboardComponent implements OnInit {
  name:string ;
  constructor(
    private tokenService:TokenStorageService,
    private router:Router
  ) { 
  }
  ngOnInit(): void {
    this.name=this.tokenService.getUser();
  }
  logOut() {
    this.tokenService.signOut();
  }

  goTo(url:string)
  {
    this.router.navigate([url]).then(
      ()=>{
        window.location.reload()
      }
    )
  }
}
