import { Observable } from 'rxjs'; 
 import { Injectable } from '@angular/core'; 
 import { CustomHttpClient } from 'src/app/core/services/customHttp.service';
import {  accountRoot } from 'src/app/shared/enums/api-urls.enum';  
import { ApiResponseModel } from 'src/app/core/models/api-response.model';
import { IAccountRepository } from 'src/app/domain/repositories/iAccount.repository';
import { AccountEntity } from 'src/app/domain/entities/account.entity';

@Injectable({
    providedIn: 'root',
})

export class AccountImplementationRepository extends IAccountRepository {
   
    constructor(private http: CustomHttpClient) {
        super();
    }

    login(params: {username: string, password: string}): Observable<ApiResponseModel<AccountEntity>> {
        const paramsx = new Map<string, string>(Object.entries(params)); 
        return this.http
            .postForm<AccountEntity>(accountRoot.login, paramsx)
            .pipe();
    }

    override RefreshToken(params: { AccessToken: string; RefreshToken: string; }): Observable<ApiResponseModel<AccountEntity>> {
        const paramsx = new Map<string, string>(Object.entries(params)); 
        return this.http
        .postForm<AccountEntity>(accountRoot.refershToken, paramsx)
        .pipe();
    } 


    // register(params: {phoneNum: string, password: string}): Observable<ApiResponseModel<AdminUserEntity> {
    //    return this.http
    //         .post<AdminUserEntity>('https://example.com/register', {params})
    //         .pipe();
    // }

    // getUserProfile(id:number): Observable<ApiResponseModel<AdminUserEntity>> {
    //     return this.http.get<ApiResponseModel<AdminUserEntity>>('https://jsonplaceholder.typicode.com/users/1')
    //     .pipe( );
    // }

     
    // getUsersProfile(): Observable<AdminUserEntity[]>{        
    //     return this.http.get<AdminUserEntity[]>(userAdminRoot.getList)
    //     .pipe();
    // }
}