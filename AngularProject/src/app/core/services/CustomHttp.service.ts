// import { HttpClient, HttpResponse } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Observable } from "rxjs";
// import { map } from "rxjs/operators";

// @Injectable( )
// export class CustomHttpService {

//   constructor(private httpClient: HttpClient) {}

//   public makeGetRequest<T>(url: string): Observable<T> 
//   { 
//     return this.httpClient.get<T>(url, { observe: "response" })
//     .pipe(
//       map((res: HttpResponse<T>) => {
//         return res.body;
//       })
//     );
//   }

  // public makePostRequest<T>(url: string, body?: any): Observable<T> {
  //   return this.httpClient.post<T>(url, body, { observe: "response" }).pipe(
  //     map((res: HttpResponse<T>) => {
  //       return res.body;
  //     })
  //   );
  // }

  // public makePutRequest<T>(url: string, body?: any): Observable<T> {
  //   return this.httpClient.put<T>(url, body, { observe: "response" }).pipe(
  //     map((res: HttpResponse<T>) => {
  //       return res.body;
  //     })
  //   );
  // }

  // public makePatchRequest<T>(url: string, body?: any): Observable<T> {
  //   return this.httpClient.patch<T>(url, body, { observe: "response" }).pipe(
  //     map((res: HttpResponse<T>) => {
  //       return res.body;
  //     })
  //   );
  // }

  // public makeDeleteRequest<T>(url: string, body?: any): Observable<T> {
  //   return this.httpClient
  //     .request<T>("delete", url, {
  //       body,
  //       observe: "response"
  //     })
  //     .pipe(
  //       map((res: HttpResponse<T>) => {
  //         return res.body;
  //       })
  //     );
  // }

//}

import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { Router } from '@angular/router';

@Injectable()

export class CustomHttpClient {

  httpOptionsJson = new HttpHeaders({
    "Content-Type": "application/json; charset=utf-8"
  });

  httpOptionsBlob = new HttpHeaders({
    responseType: "blob",
    observe: "response"
  });

  constructor(private http: HttpClient, private router: Router) { }

  /**
     *
     * @param url
     */
  get<T>(url: string): any {
    return this.http
      .get<T>(url, { headers: this.httpOptionsJson })
      .pipe(catchError(this.handleHttpErrors));
  }

  /**
   *
   * @param url
   * @param request
   */
  post<T>(url: string, request: any): any {
    return this.http.post<T>(url, request).pipe(catchError(this.handleHttpErrors));
  }

    /**
   * Posts form
   * @param url This is endpoint URL
   * @param params This request headers
   * @returns form
   */
    postForm<T>(
      url: string,
      params: Map<string, any>,
      headers?: Map<string, string>
    ): Observable<any> {
 
      return this.http.post<T>(url,  this.prepareParams(params),{ headers: this.httpOptionsJson }).pipe(catchError(this.handleHttpErrors));
     // return this.http.post<any>(url, this.prepareParams(params), { headers: this.httpOptionsJson });
    }
  

    /**
   * Posts form
   * @param url This is endpoint URL
   * @param params This request headers
   * @returns form
   */
    postFormData<T>(
      url: string,
      params: Map<string, any>,
      headers?: Map<string, string>
    ): Observable<any> {  
      return this.http.post<T>(url,  this.prepareParamsData(params),{ headers: this.httpOptionsJson }).pipe(catchError(this.handleHttpErrors));
     // return this.http.post<any>(url, this.prepareParams(params), { headers: this.httpOptionsJson });
    }
  
  downLoadFile(url: string): Observable<any>{ 
    return this.http.get(url,  {
      //reportProgress: true,
      responseType: 'blob',
      headers: this.httpOptionsJson 
    });
   
        
  } 

  /**
   *
   * @param url
   */
  delete<T>(url: string): any {
    return this.http
      .delete<T>(url, { headers: this.httpOptionsJson })
      .pipe(catchError(this.handleHttpErrors));
  }

  /**
   *
   * @param url
   * @param request
   */
  put(url: string, request: any): any {
    return this.http.put(url, request, { headers: this.httpOptionsJson }).pipe(catchError(this.handleHttpErrors));
  }

    /**
   * Put form
   * @param url This is endpoint URL
   * @param params This is request parameters
   * @returns form
   */
    putForm(url: string, params: Map<string, string>):any{
      return this.http.put(url, this.prepareParams(params), { headers: this.httpOptionsJson })
      .pipe(catchError(this.handleHttpErrors)); 
    }

  /**
   * 
   * @param url
   */
  getBlob(url: string): any {
    return this.http
      .get(url, { headers: this.httpOptionsBlob })
      .pipe(catchError(this.handleHttpErrors));
  }

  /**
   *
   * @param url
   * @param formData
   */
  multipartPost(url: string, formData: FormData): any {
    return this.http
      .post(url, formData)
      .pipe(catchError(this.handleHttpErrors));
  }
 
  /**
   * Prepares params
   * @param params Map of parameters `(key, value)`
   * @returns `HttpParams` || `{}` empty object `{}` when params is empty otherwise `HttpParams`
   */
  prepareParams(params: Map<string, string>): HttpParams | {} {
    if (!params || params.size === 0) {
      return {};
    }
    let httpParams = new HttpParams();
    let httpHeqaders = new HttpHeaders();
    for (const [key, value] of params.entries()) {
      httpParams = httpParams.append(key, value);
    }

    return httpParams;
  }

  prepareParamsData(params: Map<string, string>): FormData | {} {
    if (!params || params.size === 0) {
      return {};
    } 
    let httpParams = new FormData(); 
    for (const [key, value] of params.entries()) {
        httpParams.append(key, value);
    } 
    return httpParams;
  }

  /**
   * 
   * @param error 
   */
  private handleHttpErrors(error: Response ) {
    switch (error.status) {
      case 503 || 500:
        this.routeToErrorView();
        return throwError(error);
      case 401 || 403: // unauthorised
        this.routeToUnauthorisedView()
        return throwError(error);
      case 404:
        return throwError(error);
      default:
        break;
    }
    return throwError(error);

  }

  routeToErrorView() {
    this.router.navigate(["/error"]);
  }

  routeToUnauthorisedView() {
    this.router.navigate(["/unauthorised"]);
  }

}
