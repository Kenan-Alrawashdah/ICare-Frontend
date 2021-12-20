import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';
import { SubscriptionTypeModel } from '../Models/SubscriptionType.model';

@Component({
  selector: 'app-edit-subscription',
  templateUrl: './edit-subscription.component.html',
  styleUrls: ['./edit-subscription.component.css'],
})
export class EditSubscriptionComponent implements OnInit {
  id: string;
  type: SubscriptionTypeModel;
  SubscriptionForm: FormGroup;
  ribbonDisable:boolean;
  constructor(
    private adminService: AdminService,
    private _Activatedroute: ActivatedRoute,
    private router:Router,
    private toastr:ToastrService
  ) {
    this.id = this._Activatedroute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.GetType();
    this.SubscriptionForm.get("hasRibbon").valueChanges.subscribe(
      (value)=>{
        if(value == true)
        {
          this.ribbonDisable = true;
        }else{
          this.ribbonDisable = false;
          this.SubscriptionForm.controls['ribbon'].setValue('');
        }
      }
    )
  }

  onSubmit()
  {
    this.adminService.EditSubscription(this.SubscriptionForm.value).subscribe(
      (response)=>{
        this.toastr.success('Edited successfully');
        this.router.navigate(['/Admin/SubscriptionSettings']);
      }
    )
  }

  
  async GetType() {
    await this.adminService
      .GetSubscriptionTypeById(this.id)
      .toPromise()
      .then((response) => {
        this.SubscriptionForm = new FormGroup({
          price: new FormControl(response.data.price, [Validators.required]),
          days: new FormControl(response.data.days, [Validators.required]),
          onSale: new FormControl(response.data.onSale, [Validators.required]),
          priceAfterSale: new FormControl(response.data.priceAfterSale, [Validators.required]),
          hasRibbon: new FormControl(response.data.hasRibbon, [Validators.required]),
          ribbon: new FormControl(response.data.ribbon, [Validators.required]),
          name: new FormControl(response.data.name, [Validators.required]),
          ribbonColor: new FormControl(response.data.ribbonColor, [Validators.required]),
          id: new FormControl(response.data.id, [Validators.required]),
          createdOn: new FormControl(response.data.createdOn, [Validators.required]),
        });
      });
  }
}
