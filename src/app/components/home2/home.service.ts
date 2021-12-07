import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Constants } from 'src/app/Constants/constants';
import { ApiResponseData } from 'src/app/shared/api-response.model';
import { CategoryModel } from './models/Category.model';
import { GetAllDrugs } from './models/getAllDrugs.model';
import { SearchModel } from './models/search.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private httpClient: HttpClient) {}
  list: SearchModel[];

  public GetDrugByNameSearch(search: string) {
    const body = {
      search: search,
    };
    return this.httpClient.post<ApiResponseData<SearchModel>>(
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

  public GetAllCategory(){
    return this.httpClient.get<ApiResponseData<CategoryModel[]>>(Constants.baseURL+'Admin/Category/GetAllDrugCategories');
  }
}
