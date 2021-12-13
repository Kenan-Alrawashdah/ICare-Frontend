import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token.service';

@Component({
  selector: 'app-pharmacer-dashboard',
  templateUrl: './pharmacer-dashboard.component.html',
  styleUrls: ['./pharmacer-dashboard.component.css'],
})
export class PharmacerDashboardComponent implements OnInit {
  constructor(private tokenService: TokenStorageService) {}

  ngOnInit(): void {}
  logout() {
    this.tokenService.signOut();
  }
}
