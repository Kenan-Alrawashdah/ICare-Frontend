import { Component, OnInit } from '@angular/core';
import { OrderDetailsModel } from '../models/OrderDetails.model';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  order:OrderDetailsModel;
  constructor(
    private patientService:PatientService
  ) { }

  ngOnInit(): void {
    this.getOrderDetails()
  }

  async getOrderDetails()
  {
    await this.patientService.getOrderDetails().toPromise()
    .then(
      (response)=>{
        console.log(response)
        this.order = response.data;
        console.log(this.order)
      }
    )
  }
}
