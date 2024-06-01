import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseModel } from 'src/app/core/models/api-response.model';
import { AdminUserEntity } from 'src/app/domain/entities/adminUser-entity';


@Injectable({ providedIn: 'root' })
export abstract class IAdminUserInteractor {

    // abstract save(bookmark: AdminUserEntity): Observable<ApiResponseModel<number>>;

    // abstract getMany(): Observable<ApiResponseModel<AdminUserEntity[]>>;

    abstract getOne(id: number): Observable<ApiResponseModel<AdminUserEntity>>

    // abstract create(bookmark: AdminUserEntity): Observable<ApiResponseModel<number>>;

    // abstract update(bookmark: AdminUserEntity): Observable<ApiResponseModel<number>>;

    // abstract delete(slug: string): Observable<ApiResponseModel<number>>;
}
