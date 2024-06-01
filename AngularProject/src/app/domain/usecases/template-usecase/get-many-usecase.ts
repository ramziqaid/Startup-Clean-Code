import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';  
import { UseCase } from 'src/app/base/use-case';
import { ApiResponseModel } from 'src/app/core/models/api-response.model'; 
import { NoParam } from 'src/app/core/params/no-param.paylod'; 
import { TemplateEntity } from 'src/app/domain/entities/template-entity';
import { ITemplateRepository } from 'src/app/domain/repositories/iTemplate.repository';

@Injectable({ providedIn: 'root' })
 
export class GetManyTemplateCase 
        implements UseCase<NoParam, ApiResponseModel<TemplateEntity[]>> {
 
  constructor(private iTemplateRepository: ITemplateRepository) { }
  execute(params: NoParam): Observable<ApiResponseModel<TemplateEntity[]>> {
    return this.iTemplateRepository.getAll();
  }

}
 
