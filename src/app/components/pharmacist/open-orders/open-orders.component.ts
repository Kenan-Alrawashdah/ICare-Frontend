import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private router:Router,
    private toastr:ToastrService
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

  SetOrderAsPlaced(id:number)
  {
    this.pharmacistService.SetOrderAsPlaced(id).subscribe(
      (response)=>{
        this.toastr.success('Order status set as Placed','',{timeOut:1500});
        this.ngOnInit();
      }
    )
  }

  SetOrderAsCanceled(id:number)
  {
    this.pharmacistService.SetOrderAsCanceled(id).subscribe(
      (response)=>{
        this.toastr.success('Order status set as Canceled','',{timeOut:1500});
        this.ngOnInit();
      }
    )
  }


}
