import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/Constants/constants';
import { ApiResponseData } from '../api-response.model';
import { AnnualEmployeeSalaries } from './annual-employee-salaries.model';
import { GetAllEmployees } from './get-all-employees.model';
import { GetAllPatientSubscription } from './get-all-patient-subscription.model';
import { MonthlyEmployeeSalaries } from './monthly-employee-salaries.model';
import { RegisteredAnnualCount } from './registered-annual-count.model';
import { RegisteredDailyCount } from './registered-daily-count.model';
import { RegisteredMonthlyCount } from './registered-monthly-count.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private httpClient: HttpClient) {}

  getRegisteredDailyCount() {
    return this.httpClient.get<ApiResponseData<RegisteredDailyCount>>(
      Constants.baseURL + 'Accountant/getRegisteredDailyCount'
    );
  }
  getRegisteredMonthlyCount() {
    return this.httpClient.get<ApiResponseData<RegisteredMonthlyCount>>(
      Constants.baseURL + 'Accountant/getRegisteredMonthlyCount'
    );
  }
  getRegisteredAnnualCount() {
    var m = new RegisteredAnnualCount();
    return this.httpClient.get<ApiResponseData<RegisteredAnnualCount>>(
      Constants.baseURL + 'Accountant/getRegisteredAnnualCount'
    );
  }
  getMonthlyEmployeeSalaries() {
    return this.httpClient.get<ApiResponseData<MonthlyEmployeeSalaries>>(
      Constants.baseURL + 'Accountant/getMonthlyEmployeeSalaries'
    );
  }
  getAnnualEmployeeSalaries() {
    return this.httpClient.get<ApiResponseData<AnnualEmployeeSalaries>>(
      Constants.baseURL + 'Accountant/getAnnualEmployeeSalaries'
    );
  }
  DailyCareSystemReport() {
    return this.httpClient
      .get(Constants.baseURL + 'Accountant/DailyCareSystemReport', {
        responseType: 'blob',
      })
      .subscribe(
        (data) => {
          this.downloadFile('DailyCareSystemReport', data);
        },
        (error) => console.log(error)
      );
  }
  MonthlyCareSystemReport() {
    return this.httpClient
      .get(Constants.baseURL + 'Accountant/MonthlyCareSystemReport', {
        responseType: 'blob',
      })
      .subscribe(
        (data) => {
          this.downloadFile('MonthlyCareSystemReport', data);
        },
        (error) => console.log(error)
      );
  }

  AnnualCareSystemReport() {
    return this.httpClient
      .get(Constants.baseURL + 'Accountant/AnnualCareSystemReport', {
        responseType: 'blob',
      })
      .subscribe(
        (data) => {
          this.downloadFile('AnnualCareSystemReport', data);
        },
        (error) => console.log(error)
      );
  }
  downloadFile(name: string, data: Response | any) {
    const blob = new Blob([data], { type: 'text/csv' });
    console.log(blob);
    const url = window.URL.createObjectURL(blob);
    var anchor = document.createElement('a');
    anchor.download = name + '.csv';
    anchor.href = url;
    anchor.click();
  }

  getAllEmployee() {
    return this.httpClient.get<ApiResponseData<GetAllEmployees>>(
      Constants.baseURL + 'User/getAllEmployees'
    );
  }
  GetAllPatientSubscription() {
    return this.httpClient.get<ApiResponseData<GetAllPatientSubscription>>(
      Constants.baseURL + 'Patient/GetAllPatientSubscription'
    );
  }
}
