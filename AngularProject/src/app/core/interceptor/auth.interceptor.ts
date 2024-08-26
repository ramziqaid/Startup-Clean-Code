import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, finalize, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { BlockService } from '../services/block.service';
import { AuthService } from '../services/auth.service'; 
import { AppSettingsService } from '../services/app-settings.service';
import { TenantsService } from '../services/tenants.service';
//import * as moment from 'moment';

@Injectable()
export class AuthInterceptor  implements HttpInterceptor {

  serviceCount = 0; // counter globally initialized.
 
    constructor(private router: Router,private blockService: BlockService, private accountService: AuthService,
      private tenantsService:TenantsService) {
    }

    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq: any;
    let token = this.accountService.getUserProfile()?.accessToken; 
    
    if (token != '' && token != undefined && token != null)
      authReq = httpRequest.clone({
        withCredentials: AppSettingsService.appSettings?.withCredentials,
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
         // 'RoleCode':this.accountService.getRoleFromSession(),
         // 'Authorization':  'Bearer ' + token, 
          'messageid':this.newGuid(),
          'timestamp':this.getCurrentDate(),
          'Culture':this.getLang()
        })
      });
    else
      authReq = httpRequest.clone({
        withCredentials:  AppSettingsService.appSettings?.withCredentials,
        headers: new HttpHeaders({
          'RoleCode':"this.accountService.getRoleFromSession()",
          //'Content-Type': 'application/json',
          //'Tenant':this.tenantsService.getTenant()
        })
      });

         

      return next.handle(authReq).pipe(
          catchError(error => {
              console.error("error is intercept", error);
              var respError = error as HttpErrorResponse;
               
              if (respError && (respError.status === 401 || respError.status === 403)) {

                  //this.blockService.UnBlock();
                  window.location.href = '/login';
                 
                  //   this.authService.authenticateUser("");
              }
              return throwError(error.message);
          }),
          finalize(() => {
              this.serviceCount--;
            //   if (this.serviceCount === 0)
            //       this.blockService.UnBlock();

          })

      ); 
    }

    getCurrentDate() {
      //let now = moment().format('YYYY-MM-DD');
      return Date.now.toString();
    }
    newGuid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
  
    }
    getLang():string{
      var dir=localStorage.getItem('dir');
    return (dir === "ltr"  ? 'en-US' : 'ar-SA'); 
    }
}
