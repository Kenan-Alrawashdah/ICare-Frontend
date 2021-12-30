import { Component, OnInit } from '@angular/core';
import { Home2Component } from '../home2.component';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css'],
})
export class ThankYouComponent implements OnInit {
  constructor(private homeComponent: Home2Component) {}

  ngOnInit(): void {
    this.homeComponent.ngOnInit();
  }
}
