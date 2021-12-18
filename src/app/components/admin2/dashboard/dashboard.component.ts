import { Component, OnInit } from '@angular/core';
import { AnnualEmployeeSalaries } from 'src/app/shared/Accountant/annual-employee-salaries.model';
import { DashboardService } from 'src/app/shared/Accountant/dashboard.service';
import { MonthlyEmployeeSalaries } from 'src/app/shared/Accountant/monthly-employee-salaries.model';
import { RegisteredAnnualCount } from 'src/app/shared/Accountant/registered-annual-count.model';
import { RegisteredDailyCount } from 'src/app/shared/Accountant/registered-daily-count.model';
import { RegisteredMonthlyCount } from 'src/app/shared/Accountant/registered-monthly-count.model';
import { Chart } from 'chart.js';
import { GetPatientStatsLast5Year } from '../Models/get-patient-stats-last5-year.model';
import { GetSalesStatsLast5Year } from '../Models/get-sales-stats-last5-year.model';
import { AdminService } from '../admin.service';

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
  PatientStats: GetPatientStatsLast5Year[];
  count: number[] = [];
  label: number[] = [];

  count1: number[] = [];
  label1: number[] = [];
  SaleStats: GetSalesStatsLast5Year[];

  chart: any = [];
  chart2: any = [];

  constructor(
    private dashboardService: DashboardService,
    private adminService: AdminService
  ) {}

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
    this.adminService.GetPatientStatsLast5Year().subscribe((data) => {
      this.PatientStats = data.data;
      this.PatientStats.forEach((element) => {
        this.label.push(element.year);
        this.count.push(element.count);
      });
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.label,
          datasets: [
            {
              data: this.count,
              borderColor: '#3e95cd',
              label: 'Number Of Patients',
              backgroundColor: 'rgba(93, 175, 89, 0.1)',
              borderWidth: 3,
            },
          ],
        },
      });
    });
    this.adminService.GetSalesStatsLast5Year().subscribe((data) => {
      this.SaleStats = data.data;
      this.SaleStats.forEach((element) => {
        this.label1.push(element.year);
        this.count1.push(element.total);
      });
      this.chart2 = new Chart('canvas1', {
        type: 'line',
        data: {
          labels: this.label1,
          datasets: [
            {
              data: this.count1,
              borderColor: '#3e95cd',
              label: 'Drug Sales',
              backgroundColor: 'rgba(93, 175, 89, 0.1)',
              borderWidth: 3,
            },
          ],
        },
      });
    });
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
