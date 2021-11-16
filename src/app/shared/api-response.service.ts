import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { ApiBaseUrl, ApiResponseData } from './api-response.model';

@Injectable({
  providedIn: 'root',
})
export class ApiResponseService {
  constructor(apiResponse: ApiBaseUrl,R : ApiResponseData<Data>) {
    apiResponse.BaseURL;
    
  }
}
