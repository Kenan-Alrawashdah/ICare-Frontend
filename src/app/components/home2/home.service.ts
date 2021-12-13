import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Constants } from 'src/app/Constants/constants';
import { ApiResponseData } from 'src/app/shared/api-response.model';
import { CartItemModel } from './models/cartItem.model';
import { CategoryModel } from './models/Category.model';
import { CreateOrderModel } from './models/CreateOrder.model';
import { DrugModel } from './models/Drug.model';
import { GetAllDrugs } from './models/getAllDrugs.model';
import { LocationModel } from './models/location.model';
import { SearchModel } from './models/search.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private httpClient: HttpClient) {}
  list: SearchModel[];
  CategoryId:number=-1 ;
  DrugId:number=-1;

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

  public GetAllCategoryDrugs(){
    return this.httpClient.get<ApiResponseData<DrugModel[]>>(Constants.baseURL+'Drugs/GetCategoryDrugs/'+this.CategoryId);
  }

  public GetDrug(){
    return this.httpClient.get<ApiResponseData<DrugModel>>(Constants.baseURL+'Drugs/GetDrugById/'+this.DrugId);
  }

  public AddToCart(id:number,Quantity:number){
    return this.httpClient.post<ApiResponseData>(Constants.baseURL+'Carts/AddDrugToCategory',{'drugId':id,'Quantity':Quantity})
  }

  public GetCartItems(){
    return this.httpClient.get<ApiResponseData<CartItemModel[]>>(Constants.baseURL+'Carts/GetCartItems');
  }

  public DeleteCartItem(id:number){
    return this.httpClient.delete<ApiResponseData>(Constants.baseURL+'Carts/DeleteCartItem/'+id);
  }

  public CheckItemIfInCart(id:number){
    return this.httpClient.get<ApiResponseData>(Constants.baseURL+'Carts/CheckItemIfInCart/'+id);
  }

  public AddQuantity(id:number){
    return this.httpClient.get<ApiResponseData>(Constants.baseURL+'Carts/AddQuantity/'+id);
  }

  public MinusQuantity(id:number){
    return this.httpClient.get<ApiResponseData>(Constants.baseURL+'Carts/MinusQuantity/'+id);
  }

  public GetUserLocations(){
    return this.httpClient.get<ApiResponseData<LocationModel[]>>(Constants.baseURL+'Patient/GetUserLocations');
  }

  public createOrder(body:CreateOrderModel){
    console.log(body);
    return this.httpClient.post<ApiResponseData>(Constants.baseURL+'Orders/CreateOrder',body);

  }

}
