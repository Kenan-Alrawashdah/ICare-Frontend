import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/Constants/constants';
import { ApiResponseData } from 'src/app/shared/api-response.model';
import { AccountModel } from './models/account.model';
import { AddAddressModel } from './models/AddAddress.model';
import { AddDrugModel } from './models/AddDrug.Model';
import { GetMyDrugsModel } from './models/GetMyDrug.model';
import { OrdersModel } from './models/PatientOrders.model';

const baseURL = Constants.baseURL;

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  constructor(
    private http:HttpClient
  ) { }

  getPatientInfo(){
    return this.http.get<ApiResponseData<AccountModel>>(baseURL+'User/MyAccount');
  }

  editPatientInfo(body:AccountModel){
    return this.http.post<ApiResponseData>(baseURL+'User/MyAccount',body);
  }

  addPatientDrug(body:AddDrugModel){
    return this.http.post<ApiResponseData>(baseURL+'Patient/AddPatientDrug',body);
  }

  getMyDrugs(){
    return this.http.get<ApiResponseData<GetMyDrugsModel[]>>(baseURL+'Patient/MyDrugs');
  }

  addAddress(body:AddAddressModel){
    return this.http.post<ApiResponseData>(baseURL+'Patient/AddLocation',body)
  }

  GetOrders(){
    return this.http.get<ApiResponseData>(baseURL+'Orders/GetPatientOrders')
  }
}
