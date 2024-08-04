import { Injectable } from '@angular/core';
import { ApiResponseModel } from 'src/app/core/models/api-response.model';
import { CustomHttpClient } from 'src/app/core/services/customHttp.service';
import { AdminUserEntity } from './entities/adminUser-entity';
import { Observable } from 'rxjs';
import { templateRoot } from 'src/app/features/fea1/api-urls.enum';
import { TemplateEntity } from './entities/template-entity';
import { TemplateModel } from './model/template.model';
import { AppSettingsService } from 'src/app/core/services/app-settings.service';

@Injectable()
export class Fea1Service {
  private readonly version: string = "V1";
  public readonly urlRule: string = `${AppSettingsService.appSettings?.fea1Url}/${this.version}/`
  constructor(private http: CustomHttpClient) {

  }

  getUserProfile(id: number): Observable<ApiResponseModel<AdminUserEntity>> {
    return this.http.get<ApiResponseModel<AdminUserEntity>>('https://jsonplaceholder.typicode.com/users')
      .pipe();
  }


  getUsersProfile(): Observable<AdminUserEntity[]> {
    return this.http.get<AdminUserEntity[]>(`${this.urlRule}/adminUser/GetList`)
      .pipe();
  }

  loadTemplates(): Observable<ApiResponseModel<TemplateEntity[]>> {
    return this.http
      .get<TemplateEntity[]>(templateRoot.getList)
      .pipe();
  }
  loadTemplate(id: number): Observable<ApiResponseModel<TemplateEntity>> {
    // return this.http
    // .get<TemplateEntity>(`${templateRoot.getOne}?id=${id}`);
    const params = new Map<string, string>(Object.entries(id));
    return this.http
      .post<TemplateEntity>(templateRoot.getOne, { id: id });
  }
  insertTemplate(model: TemplateModel): Observable<ApiResponseModel<TemplateEntity>> {
    // return this.http
    // .post<TemplateEntity>(templateRoot.create,model)
    // .pipe();
    const params = new Map<string, string>(Object.entries(model));
    return this.http
      .postFormData<TemplateEntity>(templateRoot.create, params)
      .pipe();
  }
  updateTemplate(id: number, model: TemplateModel): Observable<ApiResponseModel<TemplateEntity>> {

    return this.http
      .post<TemplateEntity>(templateRoot.update, model)
      .pipe();
  }
  deleteTemplate(id: number): Observable<ApiResponseModel<number>> {
    return this.http
      .post<number>(`${templateRoot.delete}`, { id });
    // return this.http
    // .delete<number>(`${templateRoot.delete}?id=${id}`);
  }
}
