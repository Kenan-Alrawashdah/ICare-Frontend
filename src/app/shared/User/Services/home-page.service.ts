import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponseData } from '../../api-response.model';
import { Search } from '../Models/search.model';
import { Usersearch } from '../Models/usersearch.model';
import { UsersearchRequest } from '../Models/usersearch-request.model';
import { GetAllDrugs } from '../Models/get-all-drugs.model';
import { Constants } from 'src/app/Constants/constants';

@Injectable({
  providedIn: 'any',
})
export class HomePageService {
  constructor(private httpClient: HttpClient, private search: Search) {}
  list: Usersearch[];

  public GetDrugByNameSearch(search: string) {
    var m1 = new UsersearchRequest();
    m1.search = search;
    return this.httpClient.post<ApiResponseData<Usersearch>>(
      Constants.baseURL + 'User/GetDrugByNameSearch',
      m1
    );
  }
  public GetAllDrug() {
    return this.httpClient.get<ApiResponseData<GetAllDrugs>>(
      Constants.baseURL + 'Drugs/GetAll'
    );
  }
}
