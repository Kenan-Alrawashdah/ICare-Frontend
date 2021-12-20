import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from '../home.service';
import { NotificationModel } from '../models/Notification.model';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  datePipe = new DatePipe('en-US');
  date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  notificationsList:NotificationModel[]
  constructor(
    private homeService:HomeService,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {
    this.GetNotifications()
  }

  dateOnChange()
  {
    this.toastr.success('Notifications Reloaded');
    this.ngOnInit()
  }

  async GetNotifications()
  {
    await this.homeService.GetNotifications(this.date).toPromise()
    .then(
      (response)=>{
        console.log(response)
        this.notificationsList = response.data
      }
    )
  }

}
