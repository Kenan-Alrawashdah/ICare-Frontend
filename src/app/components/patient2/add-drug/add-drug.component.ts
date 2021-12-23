import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { AddDrugModel } from '../models/AddDrug.Model';
import { MyDrugsComponent } from '../my-drugs/my-drugs.component';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-add-drug',
  templateUrl: './add-drug.component.html',
  styleUrls: ['./add-drug.component.css']
})
export class AddDrugComponent implements OnInit {

  drugNameValidation:boolean = false;
  firstDoseValidation:boolean = false;
  endDateValidation:boolean = false;
  secondeDose:boolean = false;
  thirdDose:boolean = false;
  fourthDose:boolean = false;
  drugName:string;
  endDate: Date;
  drugDoseTime1?:string;
  drugDoseTime2?:string;
  drugDoseTime3?:string;
  drugDoseTime4?:string;
  today:Date = new Date();
  
  constructor(
    private patientService:PatientService,
    private myDrugsComponen:MyDrugsComponent,
    private router:Router,
    private toastr:ToastrService
  ) { 
  }

  ngOnInit(): void {
  }


  onSubmit(){
    if(this.drugName != null && this.drugDoseTime1 != null && this.endDate != null)
    {
      if(new Date(this.endDate) < this.today)
      {
        this.toastr.warning('Expier date must be in the future','',{timeOut:1500});
      }else
      {
        let model: AddDrugModel=new AddDrugModel();
        model.drugName = this.drugName;
        model.endDate = this.endDate;
        model.drugDoseTime1 = this.drugDoseTime1;
        if(this.secondeDose == true)
        {
          model.drugDoseTime2 = this.drugDoseTime2;
        }
        if(this.thirdDose == true)
        {
        model.drugDoseTime3 = this.drugDoseTime3;
        }
        if(this.fourthDose == true)
        {
        model.drugDoseTime4 = this.drugDoseTime4;
        }
        this.patientService.addPatientDrug(model)
        .subscribe(
          (data)=>{
            this.toastr.success('Drug added successfully','Done',{timeOut:1500})
            this.myDrugsComponen.ngOnInit();
            this.router.navigate(['/Patient/MyDrugs']);
          }
          )
      }

     
      
      }else{
    if(this.drugName == null )
    {
      this.drugNameValidation = true;
    }else{
      this.drugNameValidation = false;
    }
    if( this.drugDoseTime1 == null )
    {
      this.firstDoseValidation = true;
    }else{
      this.firstDoseValidation = false;

    }
    if(this.endDate == null)
    {
      this.endDateValidation = true;
    }else{
      this.endDateValidation = false;
    }
  }

  }


}
