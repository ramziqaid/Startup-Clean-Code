import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';  
import { Param } from 'src/app/core/params/param.payload';
import { ApiResponseModel } from 'src/app/core/models/api-response.model';
import { IAccountInteractor } from '../../contracts/account.interactor';
import { AccountEntity } from 'src/app/domain/entities/account.entity';
import { LoginAccountUseCase } from 'src/app/domain/usecases/account-usecase/login-usecase/login-usecase';
import { RefershTokenAccountUseCase } from 'src/app/domain/usecases/account-usecase/refershToken-usecase/refershToken-usecase';

@Injectable({ providedIn: 'root' })
export class AccountInteractor extends IAccountInteractor {

    constructor( 
        private loginAccountUseCase: LoginAccountUseCase,
        private refershTokenAccountUseCase: RefershTokenAccountUseCase,
        // private removeBookmarkUsecase: RemoveBookmarkUsecase
    ) {
        super();
    }
    override login(username: string, password: string): Observable<ApiResponseModel<AccountEntity>> {
         return this.loginAccountUseCase.execute(new Param({username:username,password:password}));
    }
    override RefreshToken(AccessToken: string, RefreshToken: string): Observable<ApiResponseModel<AccountEntity>> {
        return this.refershTokenAccountUseCase.execute(new Param({AccessToken:AccessToken,RefreshToken:RefreshToken}));
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

   

    // public update(bookmark: BookmarkRequest): Observable<Result> {
    //     return this.updateBookmarkUsecase.execute(new Param(bookmark));
    // }

    // public delete(slug: string): Observable<Result> {
    //     return this.removeBookmarkUsecase.execute(new Param(slug));
    // }

}
