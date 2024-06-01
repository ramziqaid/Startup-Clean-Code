import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseModel } from 'src/app/core/models/api-response.model';
import { AccountEntity } from 'src/app/domain/entities/account.entity';
import { AdminUserEntity } from 'src/app/domain/entities/adminUser-entity';


@Injectable({ providedIn: 'root' })
export abstract class IAccountInteractor {
 

    abstract login(username: string, password: string): Observable<ApiResponseModel<AccountEntity>>;
    abstract RefreshToken( AccessToken: string, RefreshToken: string ): Observable<ApiResponseModel<AccountEntity>>; 
 
}
