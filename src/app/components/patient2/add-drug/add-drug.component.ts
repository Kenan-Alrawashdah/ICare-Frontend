import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-add-drug',
  templateUrl: './add-drug.component.html',
  styleUrls: ['./add-drug.component.css']
})
export class AddDrugComponent implements OnInit {

  AddDrugForm: FormGroup;
  SecondeDose:boolean = false;
  
  constructor(
    private patientService:PatientService
  ) { 
    this.AddDrugForm = new FormGroup({
      drugName:      new FormControl('',[Validators.required]),
      endDate:       new FormControl('',[Validators.required]),
      drugDoseTime1: new FormControl(''),
      drugDoseTime2: new FormControl(''),
      drugDoseTime3: new FormControl(''),
      drugDoseTime4: new FormControl(''),
    }

    )
  }

  ngOnInit(): void {
  }

  SecondeDoseOnClick(){
    // if(this.SecondeDose){

    // }
    console.log('-------')
    console.log(this.SecondeDoseOnClick)

  }

  onSubmit(){
    this.patientService.addPatientDrug(this.AddDrugForm.value)
    .subscribe(
      (data)=>{
        console.log('data')
        console.log(data)
      },
      (error)=>{
        console.log(error)
      }
    )
  }

}
