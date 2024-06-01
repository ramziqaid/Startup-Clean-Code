import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITemplateInteractor } from 'src/app/data/interactors/contracts/template.interactor';
import { TemplateModel } from 'src/app/data/model/template.model';
import { TemplateEntity } from 'src/app/domain/entities/template-entity';
import { BaseComponent } from 'src/app/shared/components/base.component';
import { DataTableColumn } from 'src/app/shared/components/datatable/datatable.ui';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.css']
})
export class TemplateListComponent extends BaseComponent implements OnInit {
  enums = BaseComponent.enums;

  dataModel: string = 'ali';
  cols:string[]=['id','slug','name','isPublished'];
  data:Array<TemplateEntity>;
  allApplicationSelected: boolean = true;
  showNew: boolean = true;
  showEdit: boolean = true;
  showSave: boolean = true;
  showDelete: boolean = true;
  showCancel: boolean = true;
  showPrint: boolean = true;
  debitSideColumns: DataTableColumn[] = [
    { field: 'id', header: 'id', controlType: 'textBox', dataType: 'textBox', required: true, unique: true },
    { field: 'slug', header: 'slug', controlType: 'textBox', dataType: 'textBox', required: true, unique: true },
    { field: 'name', header: 'name', controlType: 'textBox', dataType: 'textBox', required: true, unique: true },
    { field: 'isPublished', header: 'isPublished', controlType: 'checkBox', dataType: 'textBox', required: true, unique: true },

  ];
  constructor(private router: Router,private interactor: ITemplateInteractor) {
    super();
   }

  ngOnInit() {
    try {
      this.interactor.getAll().subscribe({
        next: (response) => {
        this.data=response.data;
        }
        ,
        error: () => {
          debugger
          //this.messageService.showError('message.unhandledError');
        },
       });
    } catch (error) {
      debugger
    }
   
  }

show(){
  //this.messageService.showSuccess( "tewerwerwe re",'fasfdafh');
   
  this.appConfirm.show({
    text: 'message.confirmDelete',
    title: 'label.alert',
    buttonType: [this.enums.ConfirmButtonType.Yes, this.enums.ConfirmButtonType.No],
    fun: [() => {
      this.messageService.showSuccess("message.unhandledError");
      // this.announcementService.DeleteAnnouncement(id).subscribe({
      //   next: (response) => 
      //   {
      //     if (response.isSuccess) {
      //       this.messageService.showSuccess('message.deletedSuccessfully');
      //      // this.search();

      //     } else {
      //       this.messageService.showErrorMessage(response);
      //     }
      //   }
      //   ,
      //   error: () => {
      //     this.messageService.showError("message.unhandledError");
      //   },
      // });
    },
    () => {
      this.messageService.showError("message.unhandledError");
    }]
  });
}
  
  //#region "actionBar"

  newClick() {
    let path: string = "home/template/create";
    this.router.navigate([path])
  }

 
  edit() {
    
  }


  save() {
 
  }

  delete( ) { 
  }

  onEditAction(data:any){
    let path: string = "home/template/edit/";
    this.router.navigate([path,data.id])
  }

  onDeleteAction(data:any) {
    this.interactor.delete(data.id).subscribe({
      next: (response) => {
        if (response.succeeded) {
          console.warn("delete");
                 }
      },
      error: () => {
        //this.messageService.showError('message.unhandledError');
      },
    }); 
  }

 

  reset() {
 
  }
  //#endregion
}
