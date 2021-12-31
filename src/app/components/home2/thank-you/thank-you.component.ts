import { Component, Injectable, OnInit } from '@angular/core';
import { Home2Component } from '../home2.component';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css'],
})
@Injectable({
  providedIn : 'root'
})
export class ThankYouComponent implements OnInit {
  constructor(private homeComponent: Home2Component) {
    
  }

  ngOnInit(): void {
  }
}
