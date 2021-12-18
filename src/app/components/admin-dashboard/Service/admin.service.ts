import { HttpClient } from '@angular/common/http';
import { ApiResponseData } from './../../../shared/api-response.model';
import { Injectable } from '@angular/core';
import { Role } from '../Models/GetRoles';
import { Constants } from 'src/app/Constants/constants';
import { AddEmployeeModel } from '../Models/AddEmployee';

import { GetAllTestimonial } from '../Models/get-all-testimonial.model';
import { GetPaymentOrders } from '../Models/get-payment-orders.model';
import { FormGroup } from '@angular/forms';
import { GetPatientStatsLast5Year } from '../Models/get-patient-stats-last5-year.model';
import { GetSalesStatsLast5Year } from '../Models/get-sales-stats-last5-year.model';


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

  addEmployee(body: AddEmployeeModel) {
    return this.http.post<ApiResponseData>(baseURL + ' ', body);
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


  addEmployee(body:FormGroup){
    console.log('body : '+body.value);

    body.value.roleId = Number(body.value.roleId);
    return this.http.post<ApiResponseData>(baseURL+'Employee/EmployeeRegistration',body.value);
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

 
}
