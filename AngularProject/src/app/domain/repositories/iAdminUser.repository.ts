import { Observable } from 'rxjs';
import { AdminUserEntity } from '../entities/adminUser-entity';
import { ApiResponseModel } from 'src/app/core/models/api-response.model';
 
export abstract class IAdminUserRepository 
{
    abstract login(params: {username: string, password: string}): Observable<AdminUserEntity>;
    abstract register(params: {phoneNum: string, password: string}): Observable<AdminUserEntity>;
    abstract getUserProfile(id:number): Observable<ApiResponseModel<AdminUserEntity>>;
    abstract getUsersProfile(): Observable<AdminUserEntity[]>;
}