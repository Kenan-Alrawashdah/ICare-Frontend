import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/Constants/constants';

import { FormGroup } from '@angular/forms';
import { ApiResponseData } from 'src/app/shared/api-response.model';
import { Role } from './Models/GetRoles';
import { AddEmployeeModel } from './Models/AddEmployee';
import { GetAllTestimonial } from './Models/get-all-testimonial.model';
import { GetPatientStatsLast5Year } from './Models/get-patient-stats-last5-year.model';
import { GetPaymentOrders } from './Models/get-payment-orders.model';
import { GetSalesStatsLast5Year } from './Models/get-sales-stats-last5-year.model';
import { SubscriptionTypeModel } from './Models/SubscriptionType.model';

const baseURL = Constants.baseURL;
@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getRoles() {
    return this.http.get<ApiResponseData<Role[]>>(
      baseURL + 'Admin/Role/GetAllRoles'
    );
  }

  public GetAllTestimonial() {
    return this.http.get<ApiResponseData<GetAllTestimonial[]>>(
      Constants.baseURL + 'Testimonial/GetAllTestimonial'
    );
  }
  public GetPaymentOrders() {
    return this.http.get<ApiResponseData<GetPaymentOrders[]>>(
      Constants.baseURL + 'Admin/GetPaymentOrders'
    );
  }
  public SearchInByDatePaymentOrders(form: FormGroup) {
    return this.http.post<ApiResponseData<GetPaymentOrders[]>>(
      Constants.baseURL + 'Admin/SearchInByDatePaymentOrders',
      form.value
    );
  }

  addEmployee(body: FormGroup) {
    console.log('body : ' + body.value);

    body.value.roleId = Number(body.value.roleId);
    return this.http.post<ApiResponseData>(
      baseURL + 'Employee/EmployeeRegistration',
      body.value
    );
  }

  public GetPatientStatsLast5Year() {
    return this.http.get<ApiResponseData<GetPatientStatsLast5Year[]>>(
      Constants.baseURL + 'Admin/GetPatientStatsLast5Year'
    );
  }
  public GetSalesStatsLast5Year() {
    return this.http.get<ApiResponseData<GetSalesStatsLast5Year[]>>(
      Constants.baseURL + 'Admin/GetSalesStatsLast5Year'
    );
  }

  public GetSubscriptionType()
  {
    return this.http.get<ApiResponseData<SubscriptionTypeModel[]>>(Constants.baseURL + 'Subscription/GetTypes/');
  }

  public GetSubscriptionTypeById(id:string)
  {
    return this.http.get<ApiResponseData<SubscriptionTypeModel>>(Constants.baseURL + 'Subscription/GetSubscriptionById/'+id);
  }

  public EditSubscription(body:SubscriptionTypeModel)
  {
    return this.http.put<ApiResponseData>(Constants.baseURL + 'Subscription/EditSubscription',body);
  }
}
