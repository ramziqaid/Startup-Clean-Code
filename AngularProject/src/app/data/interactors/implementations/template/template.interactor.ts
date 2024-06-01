import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { GetOneAdminUserUseCase } from 'src/app/domain/usecases/adminUser-usecase/get-one-usecase/get-one-adminUser.usecase';
import { AdminUserEntity } from 'src/app/domain/entities/adminUser-entity';
import { Param } from 'src/app/core/params/param.payload';
import { ApiResponseModel } from 'src/app/core/models/api-response.model';
import { ITemplateInteractor } from '../../contracts/template.interactor';
import { TemplateModel } from 'src/app/data/model/template.model';
import { TemplateEntity } from 'src/app/domain/entities/template-entity';
import { CreateTemplateUseCase } from 'src/app/domain/usecases/template-usecase/create-usecase';
import { GetManyTemplateCase } from 'src/app/domain/usecases/template-usecase/get-many-usecase';
import { GetOneTemplateUseCase } from 'src/app/domain/usecases/template-usecase/get-one-usecase';
import { UpdateTemplateUseCase } from 'src/app/domain/usecases/template-usecase/update-usecase';
import { RemoveTemplateUseCase } from 'src/app/domain/usecases/template-usecase/remove-usecase';
import { NoParam } from 'src/app/core/params/no-param.paylod';
//import { DownloadTemplateUseCase } from 'src/app/domain/usecases/template-usecase/download-usecase';

@Injectable({ providedIn: 'root' })
export class TemplateInteractor extends ITemplateInteractor {
   
    constructor(
        private createTemplateUseCase: CreateTemplateUseCase,
        private getManyTemplateCase: GetManyTemplateCase,
        private getOneTemplateUseCase: GetOneTemplateUseCase,
        private updateTemplateUseCase: UpdateTemplateUseCase,
        private removeTemplateUseCase: RemoveTemplateUseCase,
        //private downloadTemplateUseCase: DownloadTemplateUseCase,
    ) {
        super();
    }

    public getAll(): Observable<ApiResponseModel<TemplateEntity[]>> {
        return this.getManyTemplateCase.execute(NoParam);
    }

    public getOne(id: number): Observable<ApiResponseModel<TemplateEntity>> { 
        return this.getOneTemplateUseCase.execute(new Param(id));
    }

    public save(model: TemplateModel): Observable<ApiResponseModel<TemplateEntity>> {
        return this.createTemplateUseCase.execute(new Param(model));
    }

    public update(id: number, model: TemplateModel): Observable<ApiResponseModel<TemplateEntity>> {
        return this.updateTemplateUseCase.execute(new Param({id:id,model:model}));
    }

    public delete(id: number): Observable<ApiResponseModel<number>> {
        return this.removeTemplateUseCase.execute(new Param(id));
    }
    // public download(file: string): Observable<ApiResponseModel<any>> {
    //     return this.downloadTemplateUseCase.execute(new Param(file));
    // }


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
