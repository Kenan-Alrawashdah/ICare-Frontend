import { HTTP_INTERCEPTORS, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter, switchMap, take } from 'rxjs/operators';
import { TokenStorageService } from './token.service';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


const TOKEN_HEADER_KEY = 'Authorization';    

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private tokenService: TokenStorageService,
    private authService: AuthService,
    private router:Router,
    private toastr:ToastrService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<Object>> {
    let authReq = req;
    const token = this.tokenService.getToken();
    if (token != null) {
      authReq = this.addTokenHeader(req, token);
    }

    return next.handle(authReq).pipe(catchError(error => {
      // (!authReq.url.includes('auth/signin') &&)
      if (error instanceof HttpErrorResponse &&  error.status === 0) {
        return this.handle401Error(authReq, next);
      }

      return throwError(error);
    }));
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      const refreshToken = this.tokenService.getRefreshToken();
      const token = this.tokenService.getToken();
      if(token)
      {
        if (refreshToken)
        return this.authService.refreshToken(token,refreshToken).pipe(
          switchMap((token: any) => {
            this.isRefreshing = false;
            this.tokenService.saveToken(token.data.accessToken);
            this.tokenService.saveRefreshToken(token.data.refreshToken);
            this.refreshTokenSubject.next(token.accessToken);
            return next.handle(this.addTokenHeader(request, token.data.accessToken));
          }),
          catchError((err) => {

            this.isRefreshing = false;
            this.tokenService.signOut();
            return throwError(err);
          })
        );
      }else{
        this.router.navigate(['/Home/login']);
        this.toastr.warning('You need to login to complete this action');
      }
      
    }

    return this.refreshTokenSubject.pipe(
      filter(token => token !== null),
      take(1),
      switchMap((token) => next.handle(this.addTokenHeader(request, token)))
    );
  }

  private addTokenHeader(request: HttpRequest<any>, token: string) {
    
    return request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer '+token) });
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];