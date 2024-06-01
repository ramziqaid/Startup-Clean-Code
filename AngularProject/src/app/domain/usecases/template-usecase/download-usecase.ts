
// import { HttpEventType } from '@angular/common/http';
// import { Injectable } from '@angular/core'; 
// import { Observable } from 'rxjs';  
// import { UseCase } from 'src/app/base/use-case';
// import { ApiResponseModel } from 'src/app/core/models/api-response.model'; 
// import { Param } from 'src/app/core/params/param.payload';
// import { ITemplateRepository } from 'src/app/domain/repositories/iTemplate.repository';

// @Injectable({ providedIn: 'root' })
 
// export class DownloadTemplateUseCase 
//         implements UseCase<Param<string>, ApiResponseModel<any>> {
 
//   constructor(private iTemplateRepository: ITemplateRepository) { }
//   execute(params: Param<string>): Observable<ApiResponseModel<any>> {
//     //return this.iTemplateRepository.download(params.payload);
//     //return this.iTemplateRepository.download(params.payload);
//     this.iTemplateRepository.download(params.payload).subscribe(
//       data => {
//         switch (data.data.type) {
//           // case HttpEventType.DownloadProgress:
//           //   this.downloadStatus.emit({ status: ProgressStatusEnum.IN_PROGRESS, percentage: Math.round((data.loaded / data.total) * 100) });
//           //   break;
//           case HttpEventType.Response:
//            // this.downloadStatus.emit({ status: ProgressStatusEnum.COMPLETE });
//             const downloadedFile = new Blob([data.data.body], { type: data.body.type });
//             const a = document.createElement('a');
//             a.setAttribute('style', 'display:none;');
//             document.body.appendChild(a);
//             a.download = params.payload;
//             a.href = URL.createObjectURL(downloadedFile);
//             a.target = '_blank';
//             a.click();
//             document.body.removeChild(a);
//             break;
//         }
//       },
//       error => {
//         //this.downloadStatus.emit({ status: ProgressStatusEnum.ERROR });
//       }
//     );
//   } 

// }
 
