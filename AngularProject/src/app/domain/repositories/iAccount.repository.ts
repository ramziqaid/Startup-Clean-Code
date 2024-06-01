import { Observable } from 'rxjs';
import { AdminUserEntity } from '../entities/adminUser-entity';
import { ApiResponseModel } from 'src/app/core/models/api-response.model';
import { AccountEntity } from '../entities/account.entity';
 
export abstract class IAccountRepository 
{
    abstract login(params: {username: string, password: string}): Observable<ApiResponseModel<AccountEntity>>;
    abstract RefreshToken(params: {AccessToken: string, RefreshToken: string}): Observable<ApiResponseModel<AccountEntity>>;
    // abstract register(params: {phoneNum: string, password: string}): Observable<AdminUserEntity>;
    //abstract RefreshToken(id:number): Observable<ApiResponseModel<AdminUserEntity>>;
    // abstract getUsersProfile(): Observable<AdminUserEntity[]>;
}