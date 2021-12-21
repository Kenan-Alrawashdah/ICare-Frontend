import { Component, OnInit } from '@angular/core';
import { SubscriptionTypeModel } from '../../home2/models/SubscriptionType.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-subscription-settings',
  templateUrl: './subscription-settings.component.html',
  styleUrls: ['./subscription-settings.component.css']
})
export class SubscriptionSettingsComponent implements OnInit {

  typesList:SubscriptionTypeModel[]; 
  constructor(
    private adminService:AdminService
  ) { }

  ngOnInit(): void {
    this.GetTypes()
  }

  async GetTypes()
  {
    await this.adminService.GetSubscriptionType().toPromise()
    .then(
      (response)=>{
        this.typesList = response.data
      }
    )
  }

}
