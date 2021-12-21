import { Component, OnInit } from '@angular/core';
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
    private patientService:PatientService
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

}
