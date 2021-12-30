import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/Constants/constants';
import { ApiResponseData } from 'src/app/shared/api-response.model';
import { CategoryModel } from '../../home2/models/Category.model';
import { AddDrugModel } from '../Models/AddDrug.model';
import { DrugModel } from '../Models/Drug.model';
import { DrugModel as DrugModel2 } from '../../home2/models/Drug.model';
import { EditDrugModel } from '../Models/EditDrug.model';
import { OpenOrderModel } from '../Models/OpenOrders.model';
import { OrderDrugsModel } from '../Models/OrderDrugs.model';
import { AddCategoryModel } from '../Models/AddCategory.model';
import { EditCategoryModel } from '../Models/EditCategory.model';

@Injectable({
  providedIn: 'root'
})
export class PharmacistService {

  drugId:number = -1 ;
  orderDrugId :number = -1 ;
  EditDrugId:number =-1;
  constructor(
    private httpClient:HttpClient
  ) { }

  addDrug(form:AddDrugModel)
  {
    let form2:FormData = new FormData();
    form2.append('DrugCategoryId',form.DrugCategoryId.toString())
    form2.append('Name',form.Name.toString())
    form2.append('Price',form.Price.toString())
    form2.append('image',form.image,form.image.name)
    form2.append('Brand',form.Brand )
    form2.append('AvailableQuantity',form.AvailableQuantity.toString())
    form2.append('Description',form.Description)

    return this.httpClient.post<ApiResponseData>(Constants.baseURL+'Drugs/AddDrug',form2);
  }

  EditDrug(form:EditDrugModel)
  {
    console.log(form)
    let form2:FormData = new FormData();
    form2.append('Id',form.id.toString())
    form2.append('Name',form.Name.toString())
    form2.append('Price',form.Price.toString())
    if(form.image != null)
    {
      form2.append('image',form.image,form.image.name)
    }else{
      form2.append('image',null)
    }
    form2.append('Brand',form.Brand )
    form2.append('AvailableQuantity',form.AvailableQuantity.toString())
    form2.append('Description',form.Description)
    console.log(form2);

    return this.httpClient.put<ApiResponseData>(Constants.baseURL+'Drugs/EditDrug',form2);
  }

  AddCategory(form:AddCategoryModel)
  {console.log(form)
    let form2:FormData = new FormData();
    form2.append('name',form.Name)
    form2.append('image',form.image,form.image.name)

    return this.httpClient.post<ApiResponseData>(Constants.baseURL+'Admin/Category/AddCategory',form2);
  }
  public getCategoryById()
  {
    return this.httpClient.get<ApiResponseData<EditCategoryModel>>(Constants.baseURL + 'Admin/Category/GetById/'+this.EditDrugId);
  }

  EditCategory(form:EditCategoryModel)
  {console.log(form)
    let form2:FormData = new FormData();
    form2.append('id',form.id.toString())
    form2.append('name',form.name)
    if(form.image != null)
    {
      form2.append('image',form.image,form.image.name)
    }

    return this.httpClient.put<ApiResponseData>(Constants.baseURL+'Admin/Category/Update',form2);
  }
  getAll(){
    return this.httpClient.get<ApiResponseData<DrugModel[]>>(Constants.baseURL+'Drugs/GetAll');
  }



  getAllOpenOrders(){
    return this.httpClient.get<ApiResponseData<OpenOrderModel[]>>(Constants.baseURL+'Orders/GetOpenOrders');
  }

  

  public GetDrug(){
    return this.httpClient.get<ApiResponseData<DrugModel2>>(Constants.baseURL+'Drugs/GetDrugById/'+this.drugId);
  }

  public AddQuantity(drugId:number,quantity:number){
    console.log(drugId,quantity)
    return this.httpClient.put<ApiResponseData>(Constants.baseURL+'Drugs/AddQuantity', {'drugId' : drugId,'quantity':quantity })
  }

  public GetAllCategory(){
    return this.httpClient.get<ApiResponseData<CategoryModel[]>>(Constants.baseURL+'Admin/Category/GetAllDrugCategories');
  }

  public GetOrderDrugs()
  {
    return this.httpClient.get<ApiResponseData<OrderDrugsModel[]>>(Constants.baseURL+'Orders/GetOrderDrugs/'+this.orderDrugId);
  }

  public SetOrderAsPlaced(id:number)
  {
    return this.httpClient.get<ApiResponseData>(Constants.baseURL+'Orders/SetOrderAsPlaced/'+id);

  }

  public SetOrderAsCanceled(id:number)
  {
    return this.httpClient.get<ApiResponseData>(Constants.baseURL+'Orders/SetOrderAsCanceled/'+id);
  }

  public GetAllCategories()
  {
    return this.httpClient.get<ApiResponseData<CategoryModel[]>>(Constants.baseURL+'Admin/Category/GetAllDrugCategories')
  }

  public deleteCategory(id:number)
  {
    return this.httpClient.delete<ApiResponseData>(Constants.baseURL+'Admin/Category/Delete/'+id)
  }

}
