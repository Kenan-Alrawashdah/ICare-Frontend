import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/Constants/constants';
import { ApiResponseData } from 'src/app/shared/api-response.model';
import { DeliveryOrdersModel } from '../model/DeliveryOrders.model';
import { PlacedLocationModel } from '../model/placedLocation.model';

@Injectable({
  providedIn: 'root',
})
export class DeliveryService {
  constructor(private httpClient: HttpClient) {}

  public GetPlacedOrders() {
    return this.httpClient.get<ApiResponseData<PlacedLocationModel[]>>(
      Constants.baseURL + 'Orders/GetPlacedOrders'
    );
  }

  public Takeorder(id: number) {
    return this.httpClient.get<ApiResponseData>(
      Constants.baseURL + 'Deliverys/TakeOrder/' + id
    );
  }

  public GetMyOrders() {
    return this.httpClient.get<ApiResponseData<DeliveryOrdersModel[]>>(
      Constants.baseURL + 'Deliverys/getAllOrdersForDelivery'
    );
  }

  public SetOrderAsDelivered(id:number)
  {
    return this.httpClient.get<ApiResponseData>(Constants.baseURL+'Orders/SetOrderAsDelivered/'+id)
  }
}
