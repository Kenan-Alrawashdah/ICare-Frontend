import { GetAllEmployees } from 'src/app/shared/Accountant/get-all-employees.model';
import { DashboardService } from 'src/app/shared/Accountant/dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.css']
})
export class GetEmployeeComponent implements OnInit {
  Employees: GetAllEmployees[];
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getEmplyees();
  }

    getEmplyees(){
      this.dashboardService
      .getAllEmployee()
      .subscribe(
        (data) => {

          console.log(data)
          this.Employees = data.data as unknown as GetAllEmployees[]
          
        }
      );
    }
}
