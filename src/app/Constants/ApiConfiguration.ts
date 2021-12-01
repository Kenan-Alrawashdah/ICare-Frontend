import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class ApiConfiguration{
    public baseURL = 'http://localhost:5000/api/'
}