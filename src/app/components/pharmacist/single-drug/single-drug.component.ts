import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DrugModel } from '../../home2/models/Drug.model';
import { PharmacistService } from '../Services/pharmacist.service';

@Component({
  selector: 'app-single-drug',
  templateUrl: './single-drug.component.html',
  styleUrls: ['./single-drug.component.css']
})
export class SingleDrugComponent implements OnInit {
  
  drug:DrugModel;
  Quantity:number = 0 ;
  constructor(
    private pharmacistService:PharmacistService,
    private router:Router,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {
    if(this.pharmacistService.drugId == -1 )
    {
      this.router.navigate(['pharmacist/GetAllDrugs'])
    }else{
      this.GetDrug()
      this.Quantity =0 ;
    }
  }

  async GetDrug(){
    await this.pharmacistService.GetDrug().toPromise()
    .then(
      (response)=>{
        this.drug = response.data;
      }
    )
  }

  AddQuantity()
  {
    
    this.pharmacistService.AddQuantity(this.pharmacistService.drugId,this.Quantity).subscribe(
      (Response)=>{
        console.log(Response)
        this.toastr.success('Quantity added successfully','',{timeOut:1500});
        this.ngOnInit();
      }
    )
  }
  
}
