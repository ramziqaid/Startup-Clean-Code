import { Observable } from 'rxjs'; 
import { Injectable } from '@angular/core'; 
import { CustomHttpClient } from 'src/app/core/services/customHttp.service'; 
import { ApiResponseModel } from 'src/app/core/models/api-response.model'; 
import { ITemplateRepository } from 'src/app/domain/repositories/iTemplate.repository';
import { TemplateEntity } from 'src/app/domain/entities/template-entity';
import { TemplateModel } from '../../model/template.model';
import { templateRoot } from 'src/app/shared/enums/api-urls.enum';
import { HttpEvent } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})

export class TemplateImplementationRepository extends ITemplateRepository {
    constructor(private http: CustomHttpClient) {
        super();
    }

    override getAll(): Observable<ApiResponseModel<TemplateEntity[]>> {
        return this.http
        .get<TemplateEntity[]>(templateRoot.getList)
        .pipe();
    }
    override getOne(id: number): Observable<ApiResponseModel<TemplateEntity>> {
        // return this.http
        // .get<TemplateEntity>(`${templateRoot.getOne}?id=${id}`);
        const params = new Map<string, string>(Object.entries(id)); 
        return this.http
        .post<TemplateEntity>(templateRoot.getOne,{id:id});
    }
    override create(model: TemplateModel): Observable<ApiResponseModel<TemplateEntity>> {
        // return this.http
        // .post<TemplateEntity>(templateRoot.create,model)
        // .pipe();
        const params = new Map<string, string>(Object.entries(model)); 
        return this.http
        .postFormData<TemplateEntity>(templateRoot.create,params)
        .pipe();
    }
    override update(id: number, model: TemplateModel): Observable<ApiResponseModel<TemplateEntity>> {
        
        return this.http
        .post<TemplateEntity>(templateRoot.update ,model)
        .pipe(); 
    }
    override delete(id: number): Observable<ApiResponseModel<number>> {
        return this.http
        .post<number>(`${templateRoot.delete}`,{id});
        // return this.http
        // .delete<number>(`${templateRoot.delete}?id=${id}`);
    }
    
    // override download(fileName:string): Observable<ApiResponseModel<any>>{
    //     return this.http
    //     .downLoadFile(`${templateRoot.download}/${fileName}`);
    // }
}