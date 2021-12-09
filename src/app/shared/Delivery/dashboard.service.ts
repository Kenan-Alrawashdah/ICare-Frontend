import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/Constants/constants';
import { ApiResponseData } from '../api-response.model';
import { AllOrdersForDelivery } from './all-orders-for-delivery.model';
import { GetLocatinForUser } from './get-locatin-for-user.model';
import { GetNumberOfOrdersForDelivery } from './get-number-of-orders-for-delivery.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private httpClient: HttpClient) {}

  getAllOrdersForDelivery() {
    return this.httpClient.get<ApiResponseData<AllOrdersForDelivery[]>>(
      Constants.baseURL + 'Deliverys/getAllOrdersForDelivery'
    );
  }
  GetLocatinForUser(OrderId: number) {
    return this.httpClient.get<ApiResponseData<GetLocatinForUser>>(
      Constants.baseURL + 'Location/GetLocationByOrderId?OrderId=' + OrderId
    );
  }
  GetNumberOfOrdersForDelivery() {
    return this.httpClient.get<ApiResponseData<GetNumberOfOrdersForDelivery>>(
      Constants.baseURL + 'Deliverys/getNumberOfOrdersForDelivery'
    );
  }
  TakeOrder(id: number) {
    return this.httpClient.patch<ApiResponseData<GetNumberOfOrdersForDelivery>>(
      Constants.baseURL + 'Deliverys/TakeOrder?id=' + id,

      id
    );
  }
  OrderDeliverd(id: number) {
    return this.httpClient.patch<ApiResponseData<GetNumberOfOrdersForDelivery>>(
      Constants.baseURL + 'Deliverys/OrderDeliverd?id=' + id,
      id
    );
  }
}
