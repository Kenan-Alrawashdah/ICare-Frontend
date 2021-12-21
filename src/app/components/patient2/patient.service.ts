import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/Constants/constants';
import { ApiResponseData } from 'src/app/shared/api-response.model';
import { AccountModel } from './models/account.model';
import { AddAddressModel } from './models/AddAddress.model';
import { AddDrugModel } from './models/AddDrug.Model';
import { ChangePasswordModel } from './models/ChangePassword.model';
import { EditDrugModel } from './models/EditDrug.model';
import { GetMyDrugsModel } from './models/GetMyDrug.model';
import { HealthReportResponseModel } from './models/healthReportReponse.model';
import { GetHeathReportRequestModel } from './models/healthReportRequest.model';
import { LocationModel } from './models/location.model';
import { OrderDetailsModel } from './models/OrderDetails.model';
import { OrdersModel } from './models/PatientOrders.model';
import { WaterModel } from './models/Water.modle';

const baseURL = Constants.baseURL;

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  orderId:number=-1;
  editDrugIdNumber = -1; 
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
  editPatientDrug(body:EditDrugModel){
    return this.http.post<ApiResponseData>(baseURL+'Patient/EditDrug',body);
  }

  getMyDrugs(){
    return this.http.get<ApiResponseData<GetMyDrugsModel[]>>(baseURL+'Patient/MyDrugs');
  }

  addAddress(body){
    console.log(body)
    return this.http.post<ApiResponseData>(baseURL+'Patient/AddLocation',body)
  }

  GetOrders(){
    return this.http.get<ApiResponseData>(baseURL+'Orders/GetPatientOrders')
  }

  GetUserLocations(){
    return this.http.get<ApiResponseData<LocationModel[]>>(baseURL+'Patient/GetUserLocations')
  }

  GetLocationById(id)
  {
    return this.http.get<ApiResponseData<LocationModel>>(baseURL+'Patient/GetLocationById/'+id)
  }

  EditLocation(body:LocationModel){
    console.log(body)
    return this.http.put<ApiResponseData>(baseURL+'Patient/EditLocation',body);
  }

  AddWater(body:WaterModel)
  {
    return this.http.post<ApiResponseData>(Constants.baseURL+'Patient/AddWater',body)
  }
 

  GetWater()
  {
    return this.http.get<ApiResponseData<WaterModel>>(Constants.baseURL+'Patient/GetWater')
  }

  EditWater(body:WaterModel)
  {
    console.log(body)
    return this.http.put<ApiResponseData>(Constants.baseURL+'Patient/EditWater',body)
  }

  deleteWater(id:number)
  {
    return this.http.delete<ApiResponseData>(Constants.baseURL+'Patient/DeleteWater/'+id)
  }


  changePassword(body:ChangePasswordModel)
  {
    return this.http.put<ApiResponseData>(Constants.baseURL+'User/ChangePassword',body);
  }

  getOrderDetails()
  {
    return this.http.get<ApiResponseData<OrderDetailsModel>>(Constants.baseURL+'Orders/GetOrderDetails/'+this.orderId);
  }
  
  getDrugForEdit()
  {
    return this.http.get<ApiResponseData<EditDrugModel>>(Constants.baseURL+'Patient/EditDrug/'+this.editDrugIdNumber)
  }

  deleteDrug(id:number)
  {
    return this.http.delete<ApiResponseData>(Constants.baseURL+'Patient/DeleteDrug/'+id)
  }

  deleteLocation(id:number)
  {
    return this.http.delete<ApiResponseData>(Constants.baseURL+'Patient/DeleteLocation/'+id)
  }

  public GetHealthReportsByMonth(body:GetHeathReportRequestModel)
  {
    return this.http.post<ApiResponseData<HealthReportResponseModel[]>>(Constants.baseURL+'Patient/GetHealthReports',body);

  }

}
