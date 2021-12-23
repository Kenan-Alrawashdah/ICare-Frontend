import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EditDrugModel } from '../models/EditDrug.model';
import { MyDrugsComponent } from '../my-drugs/my-drugs.component';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-edit-drug',
  templateUrl: './edit-drug.component.html',
  styleUrls: ['./edit-drug.component.css']
})
export class EditDrugComponent implements OnInit {

  
  drugNameValidation:boolean = false;
  firstDoseValidation:boolean = false;
  endDateValidation:boolean = false;
  secondeDose:boolean = false;
  thirdDose:boolean = false;
  fourthDose:boolean = false;
  drugName:string;
  endDate: string;
  drugDoseTime1?:string;
  drugDoseTime2?:string;
  drugDoseTime3?:string;
  drugDoseTime4?:string;
  today:Date = new Date(); 
  constructor(
    private patientService:PatientService,
    private myDrugsComponent:MyDrugsComponent,
    private router:Router,
    private toastr:ToastrService
  ) { 
  }

  ngOnInit(): void {
    if(this.patientService.editDrugIdNumber  == -1)
    {
      this.router.navigate(['/Patient/MyDrugs']);
    }else{
      this.getDrug()
    }
  }

  async getDrug()
  {
    await this.patientService.getDrugForEdit().toPromise()
    .then(
      (response)=>{
        
        this.drugName = response.data.drugName; 
        this.endDate = response.data.endDate2;
        if(response.data.drugDoseTime1 != null)
        {
          this.drugDoseTime1 = response.data.drugDoseTime1; 
        }
        if(response.data.drugDoseTime2 != null)
        {
          this.drugDoseTime2 = response.data.drugDoseTime2;
          this.secondeDose =true;  
        }
        if(response.data.drugDoseTime3 != null)
        {
          this.drugDoseTime3 = response.data.drugDoseTime3;
          this.thirdDose =true;  
        }
        if(response.data.drugDoseTime4 != null)
        {
          this.drugDoseTime4 = response.data.drugDoseTime4;
          this.fourthDose =true;  
        }
      }
    )
  }


  onSubmit2(){
    console.log(this.endDate)
    if(this.drugName != '' && this.drugDoseTime1 != '' && this.endDate != '')
    {
      if(new Date(this.endDate) < this.today)
      {
        this.toastr.warning('Expier date must be in the future','',{timeOut:1500});
      }else{
        let model: EditDrugModel=new EditDrugModel();
        model.id = this.patientService.editDrugIdNumber;
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
        this.patientService.editPatientDrug(model)
        .subscribe(
          (data)=>{
            this.toastr.success('Drug edited successfully ','Done',{timeOut:1500})
            this.myDrugsComponent.ngOnInit();
            this.router.navigate(['/Patient/MyDrugs']);
          }
          )
      }
      
    
      
      }else{
    if(this.drugName == '' )
    {
      this.drugNameValidation = true;
    }else{
      this.drugNameValidation = false;
    }
    if( this.drugDoseTime1 == '' )
    {
      this.firstDoseValidation = true;
    }else{
      this.firstDoseValidation = false;

    }
    if(this.endDate == '')
    {
      this.endDateValidation = true;
    }else{
      this.endDateValidation = false;
    }
  }

  }

}
