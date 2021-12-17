import { HttpClient } from '@angular/common/http';
import { ApiResponseData } from './../../../shared/api-response.model';
import { Injectable } from '@angular/core';
import { Role } from '../Models/GetRoles';
import { Constants } from 'src/app/Constants/constants';
import { AddEmployeeModel } from '../Models/AddEmployee';
import { GetAllTestimonial } from '../Models/get-all-testimonial.model';
import { GetPaymentOrders } from '../Models/get-payment-orders.model';
import { FormGroup } from '@angular/forms';

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
}
