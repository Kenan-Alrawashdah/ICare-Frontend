import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.css'],
})
export class WaterComponent implements OnInit {
  WaterForm:FormGroup;
  constructor() {
    this.WaterForm = new FormGroup({
      Liters: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}
}
