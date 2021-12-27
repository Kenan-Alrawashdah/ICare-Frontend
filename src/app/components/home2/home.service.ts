import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Constants } from 'src/app/Constants/constants';
import { ApiResponseData } from 'src/app/shared/api-response.model';
import { UserToken } from 'src/app/shared/UserToken.model';
import { CartItemModel } from './models/cartItem.model';
import { CategoryModel } from './models/Category.model';
import { CreateOrderModel } from './models/CreateOrder.model';
import { DrugModel } from './models/Drug.model';
import { Forgotpassword } from './models/Forgotpassword.model';
import { GetAllDrugs } from './models/getAllDrugs.model';
import { LocationModel } from './models/location.model';
import { NotificationModel } from './models/Notification.model';
import { Registration } from './models/registration.model';
import { SearchModel } from './models/search.model';
import { SubscriptionTypeModel } from './models/SubscriptionType.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private httpClient: HttpClient) {}
  list: SearchModel[];
  CategoryId: number = -1;
  DrugId: number = -1;
  CategoryName: string;

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

  public ForgotPassword(email: string) {
    var fp = new Forgotpassword();
    fp.email = email;
    return this.httpClient.post<ApiResponseData>(
      Constants.baseURL + 'User/ForgotPassword',
      fp
    );
  }

  public register(
    fname: string,
    lname: string,
    email: string,
    password: string,
    phone: string
  ) {
    const body = {
      firstName: fname,
      lastName: lname,
      email: email,
      password: password,
      phoneNumber: phone,
    };

    return this.httpClient.post<ApiResponseData<UserToken>>(
      Constants.baseURL + 'User/PatientRegistration',
      body
    );
  }
  public LoginAndRegistrationUsingSocial(
    fname: string,
    lname: string,
    email: string
  ) {
    const registration = new Registration();
    registration.email = email;
    registration.firstName = fname;
    registration.lastName = lname;
    registration.password = 'Q!qwe123';
    registration.phoneNumber = '0777777777';
    console.log(registration);
    return this.httpClient.post<ApiResponseData<UserToken>>(
      Constants.baseURL + 'User/PatientRegistrationUsingSocial',
      registration
    );
  }
  public AddTestimonial(form: FormGroup) {
    return this.httpClient.post<ApiResponseData>(
      Constants.baseURL + 'Testimonial/AddNewTestimonial',
      form.value
    );
  }

  public GetAllCategory() {
    return this.httpClient.get<ApiResponseData<CategoryModel[]>>(
      Constants.baseURL + 'Admin/Category/GetAllDrugCategories'
    );
  }

  public GetAllCategoryDrugs() {
    return this.httpClient.get<ApiResponseData<DrugModel[]>>(
      Constants.baseURL + 'Drugs/GetCategoryDrugs/' + this.CategoryId
    );
  }

  public GetDrug() {
    return this.httpClient.get<ApiResponseData<DrugModel>>(
      Constants.baseURL + 'Drugs/GetDrugById/' + this.DrugId
    );
  }

  public AddToCart(id: number, Quantity: number) {
    return this.httpClient.post<ApiResponseData>(
      Constants.baseURL + 'Carts/AddDrugToCategory',
      { drugId: id, Quantity: Quantity }
    );
  }

  public GetCartItems() {
    return this.httpClient.get<ApiResponseData<CartItemModel[]>>(
      Constants.baseURL + 'Carts/GetCartItems'
    );
  }

  public DeleteCartItem(id: number) {
    return this.httpClient.delete<ApiResponseData>(
      Constants.baseURL + 'Carts/DeleteCartItem/' + id
    );
  }

  public CheckItemIfInCart(id: number) {
    return this.httpClient.get<ApiResponseData>(
      Constants.baseURL + 'Carts/CheckItemIfInCart/' + id
    );
  }

  public AddQuantity(id: number) {
    return this.httpClient.get<ApiResponseData>(
      Constants.baseURL + 'Carts/AddQuantity/' + id
    );
  }

  public MinusQuantity(id: number) {
    return this.httpClient.get<ApiResponseData>(
      Constants.baseURL + 'Carts/MinusQuantity/' + id
    );
  }

  public ChangeQuantity(id: number, Quantity:number) {
    return this.httpClient.get<ApiResponseData>(
      Constants.baseURL + 'Carts/ChangeQuantity/' + id+"&"+Quantity
    );
  }

  public GetUserLocations() {
    return this.httpClient.get<ApiResponseData<LocationModel[]>>(
      Constants.baseURL + 'Patient/GetUserLocations'
    );
  }

  public createOrder(body: CreateOrderModel) {
    return this.httpClient.post<ApiResponseData>(
      Constants.baseURL + 'Orders/CreateOrder',
      body
    );
  }

  public GetSubscriptionType() {
    return this.httpClient.get<ApiResponseData<SubscriptionTypeModel[]>>(
      Constants.baseURL + 'Subscription/GetTypes/'
    );
  }

  public GetSubscriptionTypeById(id: string) {
    return this.httpClient.get<ApiResponseData<SubscriptionTypeModel>>(
      Constants.baseURL + 'Subscription/GetSubscriptionById/' + id
    );
  }

  public Subscribe(id: string) {
    return this.httpClient.get<ApiResponseData>(
      Constants.baseURL + 'Subscription/Subscribe/' + id
    );
  }

  public GetNotifications(date) {
    return this.httpClient.post<ApiResponseData<NotificationModel[]>>(
      Constants.baseURL + 'Patient/GetUserNotifications',
      { date: date }
    );
  }

  public GetRandomDrugs() {
    return this.httpClient.get<ApiResponseData<DrugModel[]>>(
      Constants.baseURL + 'Drugs/GetRandomdrugs'
    );
  }
}
