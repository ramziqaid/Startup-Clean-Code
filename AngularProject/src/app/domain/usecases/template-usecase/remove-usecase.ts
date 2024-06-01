import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';  
import { UseCase } from 'src/app/base/use-case';
import { ApiResponseModel } from 'src/app/core/models/api-response.model'; 
import { Param } from 'src/app/core/params/param.payload';
import { ITemplateRepository } from 'src/app/domain/repositories/iTemplate.repository';

@Injectable({ providedIn: 'root' })
 
export class RemoveTemplateUseCase 
        implements UseCase<Param<number>, ApiResponseModel<number>> {
 
  constructor(private iTemplateRepository: ITemplateRepository) { }
  execute(params: Param<number>): Observable<ApiResponseModel<number>> { 
    return this.iTemplateRepository.delete(params.payload);
  } 
}
 

