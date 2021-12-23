import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-add-health-report',
  templateUrl: './add-health-report.component.html',
  styleUrls: ['./add-health-report.component.css']
})
export class AddHealthReportComponent implements OnInit {

  AddHealthReportForm:FormGroup;
  selectedFile: File;
  error:string ; 
  constructor(
    private patientService:PatientService,
    private toastr:ToastrService, 
    private router:Router
  ) {
    this.AddHealthReportForm= new FormGroup({
      name:  new FormControl('', [Validators.required]),
      value: new FormControl('', [Validators.required]),
    })
   }

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.patientService.CreateHealthReport(this.AddHealthReportForm.value).subscribe(
      (response)=>{
        this.toastr.success('Report added successfully'); 
        this.router.navigate(['/Patient/HealthReport']);
      }
    )
  }

  getFile(event)
  {
    this.selectedFile = event.target.files.item(0);
  }

  upload() {
    this.patientService.upload(this.selectedFile).subscribe(
      (res) => {
        if(res.success == false)
        {
          this.error = res.errors[0];
        }
      }
    );
  }

 downloadFile(){
  let link = document.createElement("a");
  link.download = "HealthReport.pdf";
  link.href = "../../../../assets/HealthReport.pdf";
  link.click();
}

}
