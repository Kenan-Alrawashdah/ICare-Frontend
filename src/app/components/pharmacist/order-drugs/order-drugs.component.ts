import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private pharmacistService:PharmacistService,
    private toastr:ToastrService,
    private router:Router
  ) { }

  ngOnInit(): void {
    if(this.pharmacistService.orderDrugId == -1)
    {
      this.router.navigate(['pharmacist/OpenOrders']);
    }else{
      this.GetOrderDrugs()
    }
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

  SetOrderAsPlaced()
  {
    this.pharmacistService.SetOrderAsPlaced(this.pharmacistService.orderDrugId).subscribe(
      (response)=>{
        this.toastr.success('Order status set as Placed','',{timeOut:1500});
        this.router.navigate(['/pharmacist/OpenOrders']);
      }
    )
  }

  SetOrderAsCanceled()
  {
    this.pharmacistService.SetOrderAsCanceled(this.pharmacistService.orderDrugId).subscribe(
      (response)=>{
        this.toastr.success('Order status set as Canceled','',{timeOut:1500});
        this.router.navigate(['/pharmacist/OpenOrders']);
      }
    )
  }

}
