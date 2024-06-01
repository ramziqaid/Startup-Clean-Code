import { Observable } from 'rxjs'; 
 import { Injectable } from '@angular/core'; 
 import { CustomHttpClient } from 'src/app/core/services/customHttp.service';
import {  userAdminRoot } from 'src/app/shared/enums/api-urls.enum';
import { IAdminUserRepository } from 'src/app/domain/repositories/iAdminUser.repository';
import { AdminUserEntity } from 'src/app/domain/entities/adminUser-entity';
import { ApiResponseModel } from 'src/app/core/models/api-response.model';

@Injectable({
    providedIn: 'root',
})

export class AdminUserImplementationRepository extends IAdminUserRepository { 

    constructor(private http: CustomHttpClient) {
        super();
    }

    login(params: {username: string, password: string}): Observable<AdminUserEntity> {
        return this.http
            .post<AdminUserEntity>('https://example.com/register', {params})
            .pipe();
    }

    register(params: {phoneNum: string, password: string}): Observable<AdminUserEntity> {
       return this.http
            .post<AdminUserEntity>('https://example.com/register', {params})
            .pipe();
    }

    getUserProfile(id:number): Observable<ApiResponseModel<AdminUserEntity>> {
        return this.http.get<ApiResponseModel<AdminUserEntity>>('https://jsonplaceholder.typicode.com/users/1')
        .pipe( );
    }

     
    getUsersProfile(): Observable<AdminUserEntity[]>{        
        return this.http.get<AdminUserEntity[]>(userAdminRoot.getList)
        .pipe();
    }
}