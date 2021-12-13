import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OpenOrderModel } from '../Models/OpenOrders.model';
import { PharmacistService } from '../Services/pharmacist.service';

@Component({
  selector: 'app-open-orders',
  templateUrl: './open-orders.component.html',
  styleUrls: ['./open-orders.component.css']
})
export class OpenOrdersComponent implements OnInit {


  OpenOrders:OpenOrderModel[]
  constructor(
    private pharmacistService:PharmacistService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.GetAlOpenOrders()
  }

  goToOrderDrugs(id:number){
    this.pharmacistService.orderDrugId = id;
    this.router.navigate(['/pharmacist/OrderDrugs']);
  }

  async GetAlOpenOrders()
  {
    this.pharmacistService.getAllOpenOrders().toPromise()
    .then(
      (response)=>
      {
        this.OpenOrders = response.data
        console.log(this.OpenOrders)
      }
    )
  }


}
