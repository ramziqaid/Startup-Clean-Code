import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';  
import { UseCase } from 'src/app/base/use-case';
import { ApiResponseModel } from 'src/app/core/models/api-response.model'; 
import { Param } from 'src/app/core/params/param.payload';
import { TemplateModel } from 'src/app/data/model/template.model';
import { TemplateEntity } from 'src/app/domain/entities/template-entity';
import { ITemplateRepository } from 'src/app/domain/repositories/iTemplate.repository';

@Injectable({ providedIn: 'root' })
export class  UpdateTemplateUseCase 
      implements UseCase<Param<{ id: number; model: TemplateModel }>, 
              ApiResponseModel<TemplateEntity>> {

  constructor(private iTemplateRepository: ITemplateRepository) { }
  execute(params: Param<{ id: number; model: TemplateModel; }>): Observable<ApiResponseModel<TemplateEntity>> {
    return this.iTemplateRepository.update(params.payload.id,params.payload.model);
  }
  }
