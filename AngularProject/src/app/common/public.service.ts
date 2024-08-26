import { Injectable } from '@angular/core';
import { ApiResponseModel } from 'src/app/core/models/api-response.model';
import { CustomHttpClient } from 'src/app/core/services/customHttp.service';
import { AdminUserEntity } from './entities/adminUser-entity';
import { Observable } from 'rxjs';
import { AppSettingsService } from 'src/app/core/services/app-settings.service';

@Injectable()
export class PublicService {
  private readonly version: string = "V1";
  public readonly urlRule: string = `${AppSettingsService.appSettings?.commonUrl}/${this.version}/`
  constructor(private http: CustomHttpClient) {

  }

  getUserProfile(id: number): Observable<ApiResponseModel<AdminUserEntity>> {
    return this.http.get<ApiResponseModel<AdminUserEntity>>('https://jsonplaceholder.typicode.com/users')
      .pipe();
  }


}
