import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-drugs',
  templateUrl: './my-drugs.component.html',
  styleUrls: ['./my-drugs.component.css'],
})
export class MyDrugsComponent implements OnInit {
  AddDrugForm: FormGroup;
  constructor() {
    this.AddDrugForm = new FormGroup({
      DrugName: new FormControl('', [Validators.required]),
      drugTimes1: new FormControl('', [Validators.required]),
      drugTimes2: new FormControl(''),
      drugTimes3: new FormControl(''),
      drugTimes4: new FormControl(''),
      ExpDate: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}
}
