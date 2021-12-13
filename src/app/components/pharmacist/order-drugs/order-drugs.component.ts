import { Component, OnInit } from '@angular/core';
import { OrderDrugsModel } from '../Models/OrderDrugs.model';
import { PharmacistService } from '../Services/pharmacist.service';

@Component({
  selector: 'app-order-drugs',
  templateUrl: './order-drugs.component.html',
  styleUrls: ['./order-drugs.component.css']
})
export class OrderDrugsComponent implements OnInit {

  orderDrugList:OrderDrugsModel[]
  constructor(
    private pharmacistService:PharmacistService
  ) { }

  ngOnInit(): void {
    this.GetOrderDrugs()
  }

  async GetOrderDrugs()
  {
    await this.pharmacistService.GetOrderDrugs().toPromise()
    .then(
      (response)=>{
        this.orderDrugList = response.data
        console.log(this.orderDrugList)
      }
    )
  }

}
