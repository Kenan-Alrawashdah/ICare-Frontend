import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';
import { DeliveryModel } from '../Models/Delivery.model';

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.css']
})
export class DeliveriesComponent implements OnInit {

  deliveriesList:DeliveryModel[];

  constructor(
    private adminService:AdminService,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {
    this.GetDeliveries()
  }

  delete(id:number,name:string)
  {
    if(confirm('are you sure you want to delete this delivery ' + name ))
    {
      this.adminService.DeleteUser(id).subscribe(
        ()=>{
          this.toastr.success('Delivery deleted successfully','',{timeOut:1500});
          this.ngOnInit();
        }
      )
    }
  }

  async GetDeliveries()
  {
    await this.adminService.GetAllDeliveries().toPromise()
    .then(
      (response)=>{
        this.deliveriesList = response.data
      }
    )
  }

}
