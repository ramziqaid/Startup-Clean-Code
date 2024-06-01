import { Observable } from 'rxjs';
import { ApiResponseModel } from 'src/app/core/models/api-response.model';
import { TemplateEntity } from '../entities/template-entity';
import { TemplateModel } from 'src/app/data/model/template.model';
import { HttpEvent } from '@angular/common/http';
 
export abstract class ITemplateRepository 
{
    abstract getAll(): Observable<ApiResponseModel<TemplateEntity[]>>;
    abstract getOne(id:number): Observable<ApiResponseModel<TemplateEntity>>;
    abstract create(model:TemplateModel): Observable<ApiResponseModel<TemplateEntity>>;
    abstract update(id:number,model:TemplateModel): Observable<ApiResponseModel<TemplateEntity>>;
    abstract delete(id:number): Observable<ApiResponseModel<number>>;
   // abstract download(fileName:string): Observable<ApiResponseModel<HttpEvent<Blob>>>;
}