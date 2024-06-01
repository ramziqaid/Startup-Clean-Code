
import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';  
import { UseCase } from 'src/app/base/use-case';
import { ApiResponseModel } from 'src/app/core/models/api-response.model'; 
import { Param } from 'src/app/core/params/param.payload';
import { TemplateEntity } from 'src/app/domain/entities/template-entity';
import { ITemplateRepository } from 'src/app/domain/repositories/iTemplate.repository';

@Injectable({ providedIn: 'root' })
 
export class GetOneTemplateUseCase 
        implements UseCase<Param<number>, ApiResponseModel<TemplateEntity>> {
 
  constructor(private iTemplateRepository: ITemplateRepository) { }
  execute(params: Param<number>): Observable<ApiResponseModel<TemplateEntity>> {
    return this.iTemplateRepository.getOne(params.payload);
  } 

}
 
