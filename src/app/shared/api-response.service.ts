import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { ApiResponseData } from './api-response.model';

@Injectable({
  providedIn: 'root',
})
export class ApiResponseService {
  constructor(R: ApiResponseData<Data>) {}
}
