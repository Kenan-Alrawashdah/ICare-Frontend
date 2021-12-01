import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Constants } from '../Constants/constants';
import { PatientInfo } from '../shared/Patient/Account/Models/patient-info.model';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const Patien = JSON.parse(
      localStorage.getItem(Constants.USER_KEY)
    ) as PatientInfo;
    if (Patien && Patien.email) {
      return true;
    } else {
      this.router.navigate(['Home/User/SignIn']);
      return false;
    }
  }
}
