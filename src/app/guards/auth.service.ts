// import { Injectable } from '@angular/core';
// import {
//   ActivatedRouteSnapshot,
//   CanActivate,
//   Router,
//   RouterStateSnapshot,
//   UrlTree,
// } from '@angular/router';
// import { Observable } from 'rxjs';
// import { Constants } from '../Constants/constants';
// import { TokenStorageService } from '../services/token.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuardService implements CanActivate {
//   constructor(
//     private router: Router,
//     private tokenService: TokenStorageService
//   ) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): boolean {
//     const Patient = JSON.parse(
//       atob(this.tokenService.getToken()?.split('.')[1])
//     ) as PatientInfo;

//     console.log(Patient);
//     if ((Patient.role = 'Patient' && Patient.email)) {
//       //Hello
//       return true;
//     } else {
//       this.router.navigate(['Home/User/SignIn']);
//       return false;
//     }
//   }
// }
