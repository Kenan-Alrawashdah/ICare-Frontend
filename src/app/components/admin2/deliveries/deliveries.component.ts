import { Component, OnInit } from '@angular/core';
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
    private adminService:AdminService
  ) { }

  ngOnInit(): void {
    this.GetDeliveries()
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
