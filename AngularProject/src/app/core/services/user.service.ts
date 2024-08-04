import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CustomHttpClient } from 'src/app/core/services/customHttp.service';
import { ApiResponseModel } from 'src/app/core/models/api-response.model';
import { AccountEntity } from 'src/app/domain/entities/account.entity';
import { AppSettingsService } from './app-settings.service';

@Injectable({
    providedIn: 'root',
})

export class UserService {
    private readonly version: string = "V1";
    public readonly urlRule: string = `${AppSettingsService.appSettings?.commonUrl}/${this.version}/Authentication`

    constructor(private http: CustomHttpClient) {
    }
    login(params: { username: string, password: string }): Observable<ApiResponseModel<AccountEntity>> {
        const paramsx = new Map<string, string>(Object.entries(params));
        return this.http
            .postForm<AccountEntity>(`${this.urlRule}/SignIn`, paramsx)
            .pipe();
    }

    RefreshToken(params: { AccessToken: string; RefreshToken: string; }): Observable<ApiResponseModel<AccountEntity>> {
        const paramsx = new Map<string, string>(Object.entries(params));
        return this.http
            .postForm<AccountEntity>(`${this.urlRule}/Refresh-Token`, paramsx)
            .pipe();
    }


}