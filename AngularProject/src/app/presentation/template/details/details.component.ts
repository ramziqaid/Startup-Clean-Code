import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITemplateInteractor } from 'src/app/data/interactors/contracts/template.interactor';
import { TemplateModel } from 'src/app/data/model/template.model';
import { BaseComponent } from 'src/app/shared/components/base.component';
import { templateRoot } from 'src/app/shared/enums/api-urls.enum';
import { FileManagerService } from 'src/app/shared/services/fileManager.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class TemplateDetailsComponent extends BaseComponent implements OnInit {
  temp=new TemplateModel(); 
  id:number;
  constructor(private router: Router, private _routeParams: ActivatedRoute,
    private interactor: ITemplateInteractor,
    private fileManagerService:FileManagerService
    )  { 
    super();
  }
  

  ngOnInit() {     
    this.id = this._routeParams.snapshot.params['Id'];
    this.getData(this.id);
  }

  getData(id:number){
    this.interactor.getOne(id).subscribe({
      next: (response) => { 
      this.temp=response.data;
      }
     });
  }

  onSubmit() {
    this.interactor.update(this.temp.id ,this.temp).subscribe({
      next: (response) => {
        if (response.succeeded) {
          console.warn("save");
                 }
      },
      error: () => {
        //this.messageService.showError('message.unhandledError');
      },
    });
    // Handle form submission
    console.log('Form submitted:', this.temp);
  }

  download(file:string){
    this.fileManagerService.downloadFile(templateRoot.Prefix, file);
  //  this.interactor.download(file).subscribe({
  //     next: (response) => {
  //       if (response.succeeded) {
  //         console.warn("save");
  //                }
  //     },
  //     error: () => {
  //       //this.messageService.showError('message.unhandledError');
  //     },
  //   });
  }
}

