import { Component, OnInit } from '@angular/core';
import { AnnualEmployeeSalaries } from 'src/app/shared/Accountant/annual-employee-salaries.model';
import { DashboardService } from 'src/app/shared/Accountant/dashboard.service';
import { GetAllEmployees } from 'src/app/shared/Accountant/get-all-employees.model';
import { MonthlyEmployeeSalaries } from 'src/app/shared/Accountant/monthly-employee-salaries.model';

@Component({
  selector: 'app-employees-information',
  templateUrl: './employees-information.component.html',
  styleUrls: ['./employees-information.component.css'],
})
export class EmployeesInformationComponent implements OnInit {
  m = new MonthlyEmployeeSalaries();
  m1 = new AnnualEmployeeSalaries();
  EmpList: GetAllEmployees[];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService
      .getMonthlyEmployeeSalaries()
      .subscribe((data) => (this.m = data.data));
    this.dashboardService
      .getAnnualEmployeeSalaries()
      .subscribe((data) => (this.m1 = data.data));
    this.dashboardService
      .getAllEmployee()
      .subscribe(
        (data) => (this.EmpList = data.data as unknown as GetAllEmployees[])
      );
  }
}
