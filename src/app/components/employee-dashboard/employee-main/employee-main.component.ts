import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/shared/Accountant/dashboard.service';
import { GetAllPatientSubscription } from 'src/app/shared/Accountant/get-all-patient-subscription.model';
import { RegisteredAnnualCount } from 'src/app/shared/Accountant/registered-annual-count.model';
import { RegisteredDailyCount } from 'src/app/shared/Accountant/registered-daily-count.model';
import { RegisteredMonthlyCount } from 'src/app/shared/Accountant/registered-monthly-count.model';

@Component({
  selector: 'app-employee-main',
  templateUrl: './employee-main.component.html',
  styleUrls: ['./employee-main.component.css'],
})
export class EmployeeMainComponent implements OnInit {
  m = new RegisteredDailyCount();
  m1 = new RegisteredMonthlyCount();
  m2 = new RegisteredAnnualCount();
  PatientList: GetAllPatientSubscription[];

  constructor(private dashboardService: DashboardService) {
    this.dashboardService
      .getRegisteredDailyCount()
      .subscribe((data) => (this.m = data.data));
    this.dashboardService
      .getRegisteredMonthlyCount()
      .subscribe((data) => (this.m1 = data.data));
    this.dashboardService
      .getRegisteredAnnualCount()
      .subscribe((data) => (this.m2 = data.data));
    this.dashboardService
      .GetAllPatientSubscription()
      .subscribe(
        (data) =>
          (this.PatientList =
            data.data as unknown as GetAllPatientSubscription[])
      );
  }

  ngOnInit(): void {}

  AnnualCareSystemReport() {
    this.dashboardService.AnnualCareSystemReport();
  }
  MonthlyCareSystemReport() {
    this.dashboardService.MonthlyCareSystemReport();
  }
  DailyCareSystemReport() {
    this.dashboardService.DailyCareSystemReport();
  }

}
