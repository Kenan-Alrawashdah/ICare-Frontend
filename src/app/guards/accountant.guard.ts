import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AccountantGuard implements CanActivate {
  constructor(
    private router:Router,
    private tokenService:TokenStorageService,
    private toastr:ToastrService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let role = this.tokenService.GetRole(); 
      if(role == 'Employee')
      {
        return true;
      }else{
        this.router.navigate(['/Home'])
        return false;
      }
  }
  
}
