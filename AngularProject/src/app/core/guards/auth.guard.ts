 
// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, CanActivateChild, CanLoad, UrlTree, UrlSegment } from '@angular/router';
// import { JwtHelperService } from '@auth0/angular-jwt';
// import { Observable } from 'rxjs';
// import { AuthService } from 'src/app/core/services/auth.service'; 
// import { TokenService } from 'src/app/shared/services/token.service';
 

// @Injectable()
// export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

//     constructor(private authService: AuthService, 
//         private router: Router, 
//         private jwtHelper: JwtHelperService,
//         private tokenService : TokenService
//     ) { }
//     canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
//         return true; 
//     }
//     // canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
//     //     return true; 
//     // }
//     // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> { 
//     //     return true; 
//     // }
//     async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//         //let roles = route.data["permissions"] as Array<string>;
         
//         //var userHasPermission = this.authService.userHasPermission(roles);
//         var token = this.authService.getUserProfile().accessToken;
//         return this.validToken(token);

//         // if (userHasPermission && token && !this.jwtHelper.isTokenExpired(token)) {
//         //     return true;
//         // }
//         // if ( token && !this.jwtHelper.isTokenExpired(token)) {
//         //     return true;
//         // }
//         // return await this.tokenService.tryRefreshingTokens();
//     }
//     async canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//         //const roles = childRoute.data["permissions"] as string[];
//         //return this.authService.userHasPermission(roles);
//         let roles = childRoute.data["permissions"] as Array<string>;
//        // var userHasPermission = this.authService.userHasPermission(roles);
//         var token = this.authService.getUserProfile().accessToken;

//         // if (userHasPermission && token && !this.jwtHelper.isTokenExpired(token)) {
//         //     return true;
//         // }
//         return this.validToken(token);
//         // if (token && !this.jwtHelper.isTokenExpired(token)) {
//         //     return true;
//         // }
//         // return await this.tokenService.tryRefreshingTokens();
//     }

//   async  validToken(token:string){
//     // const decoded = jwt_decode(token);
//     // // Check if the cookie is valid
//     // if (decoded.exp === undefined) {
//     //     return false;
//     // }
//             // Convert EXp Time to UTC
//       // let tokenExpDate = date.setUTCSeconds(decoded.exp);
//       //debugger
//     //var d=   this.jwtHelper.getTokenExpirationDate(token);
//         if (token && !this.jwtHelper.isTokenExpired(token)) {
//             return true;
//         }
//         return await this.tokenService.tryRefreshingTokens();
//     }
    
    
// }

 