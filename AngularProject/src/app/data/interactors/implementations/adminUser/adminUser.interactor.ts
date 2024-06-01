import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { GetOneAdminUserUseCase } from 'src/app/domain/usecases/adminUser-usecase/get-one-usecase/get-one-adminUser.usecase';
import { IAdminUserInteractor } from '../../contracts/adminUser.interactor';
import { AdminUserEntity } from 'src/app/domain/entities/adminUser-entity';
import { Param } from 'src/app/core/params/param.payload';
import { ApiResponseModel } from 'src/app/core/models/api-response.model';

@Injectable({ providedIn: 'root' })
export class AdminUserInteractor extends IAdminUserInteractor {

    constructor(
        // private createBookmarkUsecase: CreateBookmarkUsecase,
        // private getManyBookmarkUsecase: GetManyBookmarksUsecase,
        private getOneAdminUserUseCase: GetOneAdminUserUseCase,
        // private updateBookmarkUsecase: UpdateBookmarkUsecase,
        // private removeBookmarkUsecase: RemoveBookmarkUsecase
    ) {
        super();
    }

    // public save(bookmark: BookmarkRequest): Observable<Result> {
    //     if (bookmark._id) return this.update(bookmark);

    //     return this.create(bookmark);
    // }

    // public create(bookmark: BookmarkRequest): Observable<Result> {
    //     return this.createBookmarkUsecase.execute(new Param(bookmark));
    // }

    // public getMany(): Observable<BookmarkRequest[]> {
    //     return this.getManyBookmarkUsecase.execute(new NoParam());
    // }

    public getOne(id: number): Observable<ApiResponseModel<AdminUserEntity>> { 
        return this.getOneAdminUserUseCase.execute(new Param(id));
    }

    // public update(bookmark: BookmarkRequest): Observable<Result> {
    //     return this.updateBookmarkUsecase.execute(new Param(bookmark));
    // }

    // public delete(slug: string): Observable<Result> {
    //     return this.removeBookmarkUsecase.execute(new Param(slug));
    // }

}
