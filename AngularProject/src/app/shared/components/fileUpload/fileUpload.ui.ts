import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
 import { ControlContainer, NgForm } from '@angular/forms';
import { FileManagerService } from '../../services/fileManager.service';

@Component({
  selector: 'U-fileUpload',
  templateUrl: './fileUpload.ui.html',
  styleUrls: ['./fileUpload.ui.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileUploadUI implements OnInit {
  @Input({ required: true }) id: string;
  @Input({ required: true }) name: string;
  @Input() value: string;
  @Input() label: any;
  @Input() forLabel: any;
  @Input() placeholder: any;
  @Input() required: boolean=false;
  @Input() class: string = ""; 
  @Input() hidden: boolean;
  @Input() disabled: boolean   = false;
 
  @Output() onUpload = new EventEmitter<File>();
  
  selectedFile: File;
  constructor(private fileUploadService: FileManagerService) { }

  ngOnInit() {
  }
  onFileSelected(event:any) {
    this.selectedFile = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('file', this.selectedFile, this.selectedFile.name);
    this.onUpload.emit(this.selectedFile);
  }
  upload() {
    // if (this.selectedFile) {

    //   let fileToUpload = <File>this.selectedFile;
    //   const formData = new FormData();
    //   formData.append('file', fileToUpload, fileToUpload.name);
  
    //   // this.http.post(`${this.baseUrl}Attachement/UploadFile`, formData, { reportProgress: true, observe: 'events' })
    //   //   .subscribe(event => {
    //   //     if (event.type === HttpEventType.UploadProgress)
    //   //       this.progress = Math.round(100 * event.loaded / event.total);
    //   //     else if (event.type === HttpEventType.Response) {
    //   //       this.message = 'Upload success.';
    //   //       const b = JSON.parse(event.body.toString());
    //   //       this.onUploadFinished.emit(b.results.id);
    //   //       //this.onUploadFinished.emit(event.body);
    //   //     }
    //   //   });
    //   this.fileUploadService.uploadFile(this.selectedFile).subscribe(
    //     (        response: any) => {
    //       console.log('File uploaded successfully', response);
    //     },
    //     (        error: any) => {
    //       console.error('Error uploading file', error);
    //     }
    //   );
    // }
  }
}
