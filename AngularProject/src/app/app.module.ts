import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
//import { LoginComponent } from './core/login/login.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';  
import { AppRoutingModule } from './app-routing.module';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppSettingsService, appInitializerFactory } from './core/services/app-settings.service';
import { AppInjector } from './shared/services/app-injector.service';
import { ConfirmDialogComponent } from './shared/components/confirm-dialog/confirm-dialog.component';
 
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,    
    //SharedModule, 
    //RouterModule.forRoot(rootRouterConfig, { useHash: false, relativeLinkResolution: 'legacy' }),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
  })
  ],
  declarations: [
    AppComponent,
    //LoginComponent,
    //AuthLayoutComponent, 
    //AdminLayoutComponent,
    // NavbarComponent,
    // HeaderComponent,  
    
  ],
 
  providers: [ 
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [TranslateService, Injector],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (appSettings: AppSettingsService) => () => appSettings.initialize(),
      deps: [AppSettingsService],
      multi: true
    }, 
     
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    AppInjector.setInjector(injector);
  }
 }
