import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class NotEmployeeGuard implements CanActivate {
  constructor(
    private router:Router,
    private tokenService:TokenStorageService,
    private toastr:ToastrService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let role = this.tokenService.GetRole(); 
      if(role == 'Patient' || role == 'Subscriber' || role == null)
      {
        return true;
      }else{
        this.toastr.warning('you cant go to this page','',{timeOut:1500});
        this.router.navigate([role]);
        return false;
      }
  }
  
}
