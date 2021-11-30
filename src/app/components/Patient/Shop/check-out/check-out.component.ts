import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css'],
})
export class CheckOutComponent implements OnInit {
  CheckOutForm: FormGroup;
  constructor() {
    this.CheckOutForm = new FormGroup({
      cardNumber: new FormControl('', [Validators.required]),
      cardName: new FormControl('', [Validators.required]),
      expiry: new FormControl('', [Validators.required]),
      CVC: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}
}
