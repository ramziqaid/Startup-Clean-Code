import { NgModule, APP_INITIALIZER, Injector, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppSettingsService } from './core/services/app-settings.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCATION_INITIALIZED } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { IndexComponent } from './common/Index/Index.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreReducer } from './store/store';
import { effects } from './store/effects';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function appInitializerFactory(appSettingsService: AppSettingsService) {
  return () => appSettingsService.initialize();
}

export function translationInitializerFactory(translate: TranslateService, injector: Injector) {
  return () => new Promise<any>((resolve: any) => {
    const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
    locationInitialized.then(() => {
      const langToSet = 'en';
      translate.setDefaultLang(langToSet);
      translate.use(langToSet).subscribe(() => {
        resolve(null);
      });
    });
  });
}

@NgModule({
  providers: [AppSettingsService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [AppSettingsService],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: translationInitializerFactory,
      deps: [TranslateService, Injector],
      multi: true
    }
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    StoreModule.forRoot(StoreReducer),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  declarations: [
    AppComponent,
    IndexComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
