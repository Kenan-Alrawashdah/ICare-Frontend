import { Component, OnInit } from '@angular/core';
import { PlacedLocationModel } from '../model/placedLocation.model';
import { DeliveryService } from '../service/delivery.service';

@Component({
  selector: 'app-avilable-orders',
  templateUrl: './avilable-orders.component.html',
  styleUrls: ['./avilable-orders.component.css']
})
export class AvilableOrdersComponent implements OnInit {

  ordersList:PlacedLocationModel[]

  constructor(
    private deliveryService:DeliveryService
  ) { }

  ngOnInit(): void {
    this.getLocation()
  }

  async getLocation()
  {
    await this.deliveryService.GetPlacedOrders().toPromise()
    .then(
      (response)=>{
        console.log(response);
        this.ordersList = response.data;
      }
    )
  }

}
