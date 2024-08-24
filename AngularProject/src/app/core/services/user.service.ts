import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiResponseModel } from 'src/app/core/models/api-response.model';
import { AccountEntity } from 'src/app/entities/account.entity';
import { AppSettingsService } from './app-settings.service';
import { CustomHttpClient } from './customHttp.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})

export class UserService {
    public readonly urlRule: string = `${environment.apiUrl}/Authentication`

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