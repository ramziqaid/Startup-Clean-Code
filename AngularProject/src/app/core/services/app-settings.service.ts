import { Injectable, Injector } from '@angular/core';
import { HttpBackend, HttpClient } from "@angular/common/http";
import { AppSettingModel } from '../models/app-setting.model';
import { TranslateService } from '@ngx-translate/core';
import { LOCATION_INITIALIZED } from '@angular/common';
@Injectable({
    providedIn: 'root'
})
export class AppSettingsService {

    static appSettings: AppSettingModel;

    constructor(private readonly httpBackend: HttpBackend) {

    }
    // public loadConfiguration() {
    //   const httpClient = new HttpClient(this.httpBackend);
    //   return httpClient
    //     .get("src/assets/config/configuration.json")
    //     .toPromise()
    //     .then((configuration: Configuration) => {
    //       this._configuration = configuration;
    //       return configuration;
    //     })
    //     .catch((error: any) => {
    //       console.error(error);
    //     });
    // } 

    initialize() {  
        const httpClient = new HttpClient(this.httpBackend);
        const appSettingFile = `assets/config/appsettings.json`; 
        return new Promise<void>((resolve, reject) => {
            httpClient.get(appSettingFile).toPromise().then((response) => {
                 AppSettingsService.appSettings = <AppSettingModel>response;
                 
                resolve();
            }).catch((response: any) => {
                reject(`Could not load file '${appSettingFile}': ${JSON.stringify(response)}`);
            });
        });
    }

}
export function appInitializerFactory(translate: TranslateService, injector: Injector) {
    return () => new Promise<any>((resolve: any) => {
      const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
      locationInitialized.then(() => {
        const langToSet = 'en'
        translate.setDefaultLang('en');
        translate.use(langToSet).subscribe(() => {
          //console.info(`Successfully initialized '${langToSet}' language.'`);
        }, err => {
          //console.error(`Problem with '${langToSet}' language initialization.'`);
        }, () => {
          resolve(null);
        });
      });
    });
  }