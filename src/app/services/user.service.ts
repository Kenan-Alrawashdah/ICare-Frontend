import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponseData } from '../shared/api-response.model';
import { map } from 'rxjs/operators';
import { PatientInfo } from '../shared/Patient/Account/Models/patient-info.model';
import { Constants } from '../Helper/constants';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  private readonly baseURL: String = '';
  public login(email: string, password: string) {
    const body = {
      Email: email,
      Password: password,
    };
    return this.httpClient.post<ApiResponseData>(this.baseURL + 'SignIn', body);
  }

  public register(
    fname: string,
    lname: string,
    email: string,
    password: string,
    phone: string
  ) {
    const body = {
      Fname: fname,
      Lname: lname,
      Email: email,
      Password: password,
      Phone: phone,
    };
    return this.httpClient.post<ApiResponseData>(this.baseURL + 'SignUp', body);
  }
  public getPatientInfo() {
    let userInf = JSON.parse(localStorage.getItem(Constants.USER_KEY));
    const headers = new HttpHeaders({
      Authorization: `Bearer ${userInf?.token}`,
    });

    return this.httpClient
      .get<ApiResponseData>(this.baseURL + 'GetPationtInfo', {
        headers: headers,
      })
      .pipe(
        map((res) => {
          if (res.success == true) {
            // let patientInfo=new PatientInfo();
            // if(res.Data){
            //   res.Data.map((x: PatientInfo) => {
            //     patientInfo.
            //   });
            // }
          }
        })
      );
  }
}
