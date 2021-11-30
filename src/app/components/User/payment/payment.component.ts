import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  PaymentForm: FormGroup;
  constructor() {
    this.PaymentForm = new FormGroup({
      CardNumber: new FormControl('', [Validators.required]),
      ExpDate: new FormControl('', [Validators.required]),
      CVCCode: new FormControl('', [Validators.required]),
      CardName: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}
}
