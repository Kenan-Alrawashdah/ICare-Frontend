import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
import { ApiConfiguration } from '../Constants/ApiConfiguration'
import { Constants } from '../Constants/constants';

@Injectable({providedIn:'root'})
export class RequestService{

    constructor(
        private http:HttpClient,
        private apiConfig:ApiConfiguration
    ){}

    private getHeader(){
        let toke:string = JSON.parse(localStorage.getItem(Constants.USER_KEY))?.token
        if(toke != null)
        {
            return new HttpHeaders({
                Authorization: `Bearer ${toke}`,
        });

        }else{
            return null; 
        }
    }

    public post<T=any>(url:string,body:any){
        console.log(url);
        console.log(body);
        console.log("header"+this.getHeader());
        return this.http.post<T>(this.apiConfig.baseURL+url,body,{headers: this.getHeader()});
    }
}