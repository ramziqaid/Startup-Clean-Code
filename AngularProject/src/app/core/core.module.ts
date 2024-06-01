import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth-interceptor';
import { AuthService } from './services/auth.service';
import { JWT_OPTIONS, JwtModule } from '@auth0/angular-jwt'; 
import { CryptoService } from './services/crypto.service'; 
import { CustomHttpClient } from './services/customHttp.service';
import { TenantsService } from './services/tenants.service';
 
export function jwtOptionsFactory(accountService: AuthService) {
  return { 
      tokenGetter: () => accountService.getUserProfile()?.token,
      whitelistedDomains: ['http://localhost:3000/auth/login', 'my-domain2']
  }
}
 
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,    
    JwtModule.forRoot({ 
      jwtOptionsProvider:{
        provide:JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps:[AuthService], 
      } 
    })
  ],
  declarations: [], 
  exports:[],
  providers: [

    CustomHttpClient,
    AuthService,
    CryptoService,
    TenantsService,
    {
      provide: HTTP_INTERCEPTORS,  
      useClass: AuthInterceptor,
      multi: true
    },
 
   
  ]
  
})
export class CoreModule { }
