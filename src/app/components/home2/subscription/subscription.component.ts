import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { SubscriptionTypeModel } from '../models/SubscriptionType.model';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  SubscriptionTypeList:SubscriptionTypeModel[];

  constructor(
    private homeService:HomeService
  ) { }

  ngOnInit(): void {
    this.GetSubscriptionTypes()
  }

  async GetSubscriptionTypes()
  {
    await this.homeService.GetSubscriptionType().toPromise()
    .then(
    (response)=>{
      console.log(response)
      this.SubscriptionTypeList = response.data;
      console.log(this.SubscriptionTypeList)
    }
    )
  }

}
