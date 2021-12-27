import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class SubscriberGuard implements CanActivate {
  constructor(
    private router:Router,
    private tokenService:TokenStorageService,
    private toastr:ToastrService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let role = this.tokenService.GetRole(); 
      if( role == 'Subscriber')
      {
        return true;
      }else if(role == 'Patient'){
        this.toastr.warning('This feature is only for subscriber users','',{timeOut:2500});
        this.router.navigate(['/Home/Subscription'])
        return false;
      }
      else{
        this.toastr.warning('please login first','',{timeOut:1500});
        this.router.navigate(['/Home/login'])
        return false;
      }

  }
  
}
