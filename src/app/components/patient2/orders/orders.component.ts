import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersModel } from '../models/PatientOrders.model';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders:OrdersModel[]
  constructor(
    private patientService:PatientService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getOrders();
  }

  async getOrders(){
    await this.patientService.GetOrders().toPromise()
    .then(
      (respone)=>{
        this.orders = respone.data
        console.log(this.orders)
      }
    )
  }

  goToDrugDetails(id:number)
  {
    this.patientService.orderId = id;
    this.router.navigate(['/Patient/OrderDetails']);
  }

}
