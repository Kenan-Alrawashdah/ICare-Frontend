import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponseData } from '../shared/api-response.model';
import { map } from 'rxjs/operators';
import { PatientInfo } from '../shared/Patient/Account/Models/patient-info.model';
import { UserToken } from '../shared/Patient/Account/Models/user-token.model';
import { AddPatientAddress } from '../shared/Patient/Account/Models/add-patient-address.model';
import { Forgotpassword } from '../shared/User/Models/forgotpassword.model';
import { Registration } from '../shared/User/Models/registration.model';
import { Constants } from '../Constants/constants';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(

    private httpClient: HttpClient,
  ) {}


  public login(email: string, password: string) {
    const body = {
      Email: email,
      Password: password,
    };
    return this.httpClient.post<ApiResponseData<UserToken>>(
      Constants.baseURL + 'Login/SignIn',
      body
    );
  }
  public ForgotPassword(email: string) {
    var fp = new Forgotpassword();
    fp.email = email;
    return this.httpClient.post<ApiResponseData>(
      Constants.baseURL + 'User/ForgotPassword',
      fp
    );
  }
  public upload(file: File) {
    let userInf = localStorage.getItem(Constants.USER_KEY);
    const headers = new HttpHeaders({
      Authorization: `Bearer ${userInf}`,
    });

    const formData: FormData = new FormData();
    formData.append('Image', file, file.name);
    return this.httpClient.post<ApiResponseData>(
      Constants.baseURL + 'User/UploadProilePicture',
      formData,
      { headers: headers }
    );
  }

  public register(
    fname: string,
    lname: string,
    email: string,
    password: string,
    phone: string
  ) {
    const body = {
      firstName: fname,
      lastName: lname,
      email: email,
      password: password,
      phoneNumber: phone,
    };

    return this.httpClient.post<ApiResponseData<UserToken>>(

      'User/PatientRegistration',
      body
    );

    // this.httpClient.post<ApiResponseData<UserToken>>(
    //   Constants.baseURL + 'User/PatientRegistration',
    //   body
    // );
  }
  public getPatientInfo() {
    let userInf = JSON.parse(localStorage.getItem(Constants.USER_KEY));

    const headers = new HttpHeaders({
      Authorization: `Bearer ${userInf?.token}`,
    });

    return this.httpClient
      .get<ApiResponseData<UserToken>>(Constants.baseURL + 'GetPationtInfo', {
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
