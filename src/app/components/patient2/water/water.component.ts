import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.css']
})
export class WaterComponent implements OnInit {

  WaterForm:FormGroup;
  isEditing:boolean = false;
  fromToValidation =false;
  constructor(
    private patientService:PatientService,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {
    this.GetWater();
  }

  onSubmit()
  {
  

    let from = Number(this.WaterForm.value.from.substring(0, 2))*60 + Number(this.WaterForm.value.from.substring(3, 5))
    let to = Number(this.WaterForm.value.to.substring(0, 2))*60 + Number(this.WaterForm.value.to.substring(3, 5))
 
    if(from >= to)
    {
      this.toastr.warning('start time must be before end time')
    }else{
        if(this.isEditing == false)
            {
              this.patientService.AddWater(this.WaterForm.value).subscribe
              (
                ()=>{
                  this.toastr.success('Water Notification set successfully','',{timeOut:1500});
                  this.ngOnInit();
                }
              )
            }else{
              this.patientService.EditWater(this.WaterForm.value).subscribe
              (
                ()=>{
                  this.toastr.success('Water Notification Edit successfully','',{timeOut:1500});
                  this.ngOnInit();
                }
              )
            }
    }
    

   

  }

  async GetWater()
  {
    await this.patientService.GetWater().toPromise()
    .then(
      (response)=>{
        console.log(response)
        if(response.success)
        {
          this.WaterForm = new FormGroup({
            id : new FormControl(response.data.id),
            every : new FormControl(response.data.every,[Validators.required,Validators.min(15)]),
            from : new FormControl(response.data.from,Validators.required),
            to : new FormControl(response.data.to,[Validators.required])
          })
          this.isEditing = true;
        }else{
          this.WaterForm = new FormGroup({
            every : new FormControl('',[Validators.required,Validators.min(15)]),
            from : new FormControl('',Validators.required),
            to : new FormControl('',[Validators.required])
          })
        }
      }
    )
  }

  deleteWater()
  {
    this.patientService.deleteWater(this.WaterForm.value.id).subscribe(
      (response)=>{
        if(response.success == true)
        {
          this.toastr.success('water notification stopped','',{timeOut:1500});
          this.isEditing = false;
          this.ngOnInit();
        }
      }
    )
  }

}
