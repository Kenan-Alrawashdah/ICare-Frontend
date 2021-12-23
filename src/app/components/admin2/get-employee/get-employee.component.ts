import { GetAllEmployees } from 'src/app/shared/Accountant/get-all-employees.model';
import { DashboardService } from 'src/app/shared/Accountant/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { TokenStorageService } from 'src/app/services/token.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.css']
})
export class GetEmployeeComponent implements OnInit {
  Employees: GetAllEmployees[];
  constructor(
    private dashboardService: DashboardService,
    private adminService:AdminService,
    private toastr:ToastrService
    ) { }

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

    delete(id:number,name:string)
    {
      if(confirm('are you sure you want to delete this employee ' + name ))
      {
        this.adminService.DeleteUser(id).subscribe(
          ()=>{
            this.toastr.success('Delivery deleted successfully','',{timeOut:1500});
            this.ngOnInit();
          }
        )
      }
    }
}
