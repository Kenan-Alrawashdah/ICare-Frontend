import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../Constants/constants';
import { ApiResponseData } from '../shared/api-response.model';
import { UserToken } from '../shared/Patient/Account/Models/user-token.model';

const AUTH_API = 'http://localhost:5000/api/Login/SignIn';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) { }

    // login, register
    public login(email: string, password: string) {
        const body = {
          Email: email,
          Password: password,
        };
        console.log(body)
        return this.http.post<ApiResponseData<UserToken>>(
            AUTH_API ,
          body
        );
      }








    refreshToken(token: string) {
        return this.http.post(AUTH_API + 'refreshtoken', {
            refreshToken: token
        }, httpOptions);
    }
}