import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status == 200) {
          return new Observable<HttpEvent<any>>();
        }
        let userFriendlyMessage = 'An unknown error occurred!';
        if (error.error instanceof ErrorEvent) {
          userFriendlyMessage = `Error: ${error.error.message}`;
        } else {
          userFriendlyMessage = this.getServerErrorMessage(error);
        }

        //this.notificationService.showError(userFriendlyMessage);

        return throwError(() => new Error(userFriendlyMessage));

      })
    );
  }

  private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
      case 400:
        return error.error.message || 'Bad Request';
      case 401:
        //navigate to Unauthrorized page RK
        return error.error.message || 'Unauthorized';
      case 403:
        return error.error.message || 'Forbidden';
      case 409:
        this.router.navigate(['/']);
        return error.error.message || 'UnAuthenticated';
      case 404:
        return error.error.message || 'Not Found';
      case 500:
        return error.error.message || 'Internal Server Error';
      default:
        return error.error.message || `Unexpected Error: ${error.status}`;
    }
  }
}
