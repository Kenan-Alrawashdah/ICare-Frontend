import { Component, OnInit } from '@angular/core';
import { AnnualEmployeeSalaries } from 'src/app/shared/Accountant/annual-employee-salaries.model';
import { DashboardService } from 'src/app/shared/Accountant/dashboard.service';
import { MonthlyEmployeeSalaries } from 'src/app/shared/Accountant/monthly-employee-salaries.model';
import { RegisteredAnnualCount } from 'src/app/shared/Accountant/registered-annual-count.model';
import { RegisteredDailyCount } from 'src/app/shared/Accountant/registered-daily-count.model';
import { RegisteredMonthlyCount } from 'src/app/shared/Accountant/registered-monthly-count.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  m = new RegisteredDailyCount();
  m1 = new RegisteredMonthlyCount();
  m2 = new RegisteredAnnualCount();
  me = new MonthlyEmployeeSalaries();
  me1 = new AnnualEmployeeSalaries();
  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService
      .getMonthlyEmployeeSalaries()
      .subscribe((data) => (this.me = data.data));
    this.dashboardService
      .getAnnualEmployeeSalaries()
      .subscribe((data) => (this.me1 = data.data));
    this.dashboardService
      .getRegisteredDailyCount()
      .subscribe((data) => (this.m = data.data));
    this.dashboardService
      .getRegisteredMonthlyCount()
      .subscribe((data) => (this.m1 = data.data));
    this.dashboardService
      .getRegisteredAnnualCount()
      .subscribe((data) => (this.m2 = data.data));
  }

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
