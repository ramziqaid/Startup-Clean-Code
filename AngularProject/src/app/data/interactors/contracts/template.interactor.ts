import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseModel } from 'src/app/core/models/api-response.model'; 
import { TemplateEntity } from 'src/app/domain/entities/template-entity';
import { TemplateModel } from '../../model/template.model';


@Injectable({ providedIn: 'root' })
export abstract class ITemplateInteractor 
{
    abstract getAll(): Observable<ApiResponseModel<TemplateEntity[]>>;
    abstract getOne(id: number): Observable<ApiResponseModel<TemplateEntity>>;
    abstract save(model: TemplateModel): Observable<ApiResponseModel<TemplateEntity>>;
    abstract update(id: number, model: TemplateModel): Observable<ApiResponseModel<TemplateEntity>> ;
    abstract delete(id: number): Observable<ApiResponseModel<number>>;
    //abstract download(file: string): Observable<ApiResponseModel<any>>;  
}
