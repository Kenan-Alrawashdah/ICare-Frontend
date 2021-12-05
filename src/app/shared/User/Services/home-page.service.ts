import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponseData } from '../../api-response.model';
import { Usersearch } from '../Models/usersearch.model';
import { GetAllDrugs } from '../Models/get-all-drugs.model';
import { Constants } from 'src/app/Constants/constants';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'any',
})
export class HomePageService {
  constructor(private httpClient: HttpClient) {}
  list: Usersearch[];

  public GetDrugByNameSearch(search: string) {
    const body = {
      search: search,
    };
    return this.httpClient.post<ApiResponseData<Usersearch>>(
      Constants.baseURL + 'User/GetDrugByNameSearch',
      body
    );
  }
  public GetAllDrug() {
    return this.httpClient.get<ApiResponseData<GetAllDrugs>>(
      Constants.baseURL + 'Drugs/GetAll'
    );
  }

  public AddTestimonial(form: FormGroup) {
    return this.httpClient.post<ApiResponseData>(
      Constants.baseURL + 'Testimonial/AddNewTestimonial',
      form.value
    );
  }
}
