import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HealthReportResponseModel } from '../models/healthReportReponse.model';
import { GetHeathReportRequestModel } from '../models/healthReportRequest.model';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-health-report',
  templateUrl: './health-report.component.html',
  styleUrls: ['./health-report.component.css']
})
export class HealthReportComponent implements OnInit {

  date:string;
  reportList:HealthReportResponseModel[]
  constructor(
    private patientService:PatientService,
    private toastr:ToastrService
  ) { 
    let now = new Date()
    this.date = now.getFullYear()+'-'+(now.getMonth()+1)
  }

  ngOnInit(): void {
    this.onClick();
  }

  onClick()
  {
    let request = new GetHeathReportRequestModel();
    request.month = +this.date.substring(5,7);
    request.year = +this.date.substring(0,4);
    this.patientService.GetHealthReportsByMonth(request).subscribe(
      (response)=>{
        this.reportList = response.data
      }
    )
    
  }

  delete(id:number)
  {
    if(confirm('Are you sure you want to delete it'))
    {
      this.patientService.DeleteHealthReport(id).subscribe(
        ()=>{
          this.toastr.success('Report deleted successfully','',{timeOut:1500})
          this.ngOnInit();
        }
      )
    }
  }

}
