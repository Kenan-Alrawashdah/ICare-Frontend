import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../Constants/constants';
import { ApiResponseData } from '../shared/api-response.model';
import { UserToken } from '../shared/UserToken.model';

const AUTH_API = 'http://localhost:5000';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public login(email: string, password: string) {
    const body = {
      Email: email,
      Password: password,
    };
    console.log(body);
    return this.http.post<ApiResponseData<UserToken>>(
      AUTH_API + '/api/Login/SignIn',
      body
    );
  }

  refreshToken(token: string, refreshToken: string) {
    return this.http.post(
      AUTH_API + '/Refresh',
      {
        accessToken: token,
        refreshToken: refreshToken,
      },
      httpOptions
    );
  }
}
