import { Injectable } from '@angular/core';
import { CustomHttpClient } from 'src/app/core/services/customHttp.service';
import { fileManagerRoot } from '../enums/api-urls.enum';
import * as mime from 'mime-db';
import { HttpEventType } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileManagerService {
 
constructor(private http: CustomHttpClient) {}

  uploadFile(file: File) {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<any>(fileManagerRoot.Upload, formData);
  }

  downloadFile(apiRoot: string, fileName: string): void { 
    this.http.downLoadFile(`${apiRoot}/Download/${fileName}`).subscribe(
      {
        next: (response: any) => {  
          let dataType = response.type;
          let binaryData = [];
          binaryData.push(response);
          let downloadLink = document.createElement('a');
          downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, { type: dataType }));
          var fullFileName = fileName; 
          var fileType = mime[dataType]?.extensions;
          if (fileType != undefined)
            fullFileName = `${fileName}.${fileType[0]}`;
          downloadLink.setAttribute('download', fullFileName);
          document.body.appendChild(downloadLink);
          downloadLink.click();
        },
        error: () => {
          //this.messageService.showError("message.unhandledError");
        }
      })
  }
}
