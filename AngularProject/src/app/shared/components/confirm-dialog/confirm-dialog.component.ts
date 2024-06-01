import { Component, Inject, OnInit } from '@angular/core';
import { ConfirmButtonType, ConfirmType } from '../../enums';
import { AppConfirmService } from '../../services/app-confirm.service';
import { BaseComponent } from '../base.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent extends BaseComponent implements OnInit {
  message: any;
  constructor(@Inject(DOCUMENT) private document: Document 
      //private confirmDialogService: AppConfirmService
  ) {
    super();
   }
 
  ngOnInit(): any {      
     
    
      this.appConfirm.getMessage()
      .subscribe((message: any) => { 
        alert(message.text);
          this.message = message;
      });      
  } 
}

export interface ConfirmObject{  
  text:string;    
  fun: ( () => void ) []; 
  title?:string;
  buttonType?:ConfirmButtonType[];
  type?:ConfirmType;
  }
