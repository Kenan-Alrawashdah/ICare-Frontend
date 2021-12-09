import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { ToastrService } from 'ngx-toastr';
import { DrugsComponent } from '../drugs/drugs.component';
import { HomeService } from '../home.service';
import { Home2Component } from '../home2.component';
import { DrugModel } from '../models/Drug.model';

@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.css']
})
export class DrugComponent implements OnInit {

  drug:DrugModel;
  quantity:number =1; 
  constructor(
    private homeService:HomeService,
    private router:Router,
    private homComponent:Home2Component,
    private Toastr:ToastrService
  ) { }

  ngOnInit(): void {
    this.getDrug()
  }

  async CheckItemIfInCart(id:number){
    await this.homeService.CheckItemIfInCart(id).toPromise()
    .then(
      (response)=>{
        if(response.success == true)
        {
          this.addToCart(id);
        }else{
          this.Toastr.warning(response.errors[0], '',{
            timeOut: 2000,
          });
        }
      }
    )
  }


  addToCart(id:number)
  {
    console.log(id)
    this.homeService.AddToCart(id,this.quantity).subscribe(
      (data)=>{
      this.homComponent.ngOnInit();
      if(data.success ==true)
      this.Toastr.success('Item added successfully', '',{
        timeOut: 2000,
      });
      }
    );
  }

  async getDrug(){
    if(this.homeService.DrugId != -1)
    {
      await this.homeService.GetDrug().toPromise()
      .then(
        (response)=>{
          this.drug=response.data;
        }
      )
    }else{
      this.router.navigate(['Home']);
    }
    
  }

  more(){
    this.quantity++;
  }

  less(){
    if(this.quantity !=1)
    this.quantity--;
  }

    

}
