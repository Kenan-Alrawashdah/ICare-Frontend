import { HttpClient } from '@angular/common/http';
import { ApiResponseData } from './../../../shared/api-response.model';
import { Injectable } from '@angular/core';
import { Role } from '../Models/GetRoles';
import { Constants } from 'src/app/Constants/constants';
import { AddEmployeeModel } from '../Models/AddEmployee';
import { FormGroup } from '@angular/forms';

const baseURL = Constants.baseURL;
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  getRoles(){
    return this.http.get<ApiResponseData<Role[]>>(baseURL+'Admin/Role/GetAllRoles');
  }

  addEmployee(body:FormGroup){
    console.log('body : '+body.value);

    body.value.roleId = Number(body.value.roleId);
    return this.http.post<ApiResponseData>(baseURL+'Employee/EmployeeRegistration',body.value);
  }
}
