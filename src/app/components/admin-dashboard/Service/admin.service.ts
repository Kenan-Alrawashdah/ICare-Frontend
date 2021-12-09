import { HttpClient } from '@angular/common/http';
import { ApiResponseData } from './../../../shared/api-response.model';
import { Injectable } from '@angular/core';
import { Role } from '../Models/GetRoles';
import { Constants } from 'src/app/Constants/constants';
import { AddEmployeeModel } from '../Models/AddEmployee';

const baseURL = Constants.baseURL;
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  getRoles(){
    return this.http.get<ApiResponseData<Role[]>>(baseURL+'Admin/Role/GetAllRoles');
  }

  addEmployee(body:AddEmployeeModel){
    return this.http.post<ApiResponseData>(baseURL+' ',body);
  }
}
