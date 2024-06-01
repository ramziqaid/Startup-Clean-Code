import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';  
import { FormsModule } from '@angular/forms';
import { UiTextboxComponent } from './ui-textbox/ui-textbox.component';
import { TranslateModule } from '@ngx-translate/core';
import { ValidationMessagesComponent } from './validation-messages/validation-messages.comopnent';
import { ActionBarComponent } from './action-Bar/actionBar.component'; 
import { ButtonUI } from './button/button.ui';
import { CheckboxUI } from './checkbox/checkbox.ui';
import { UiDatetimeComponent } from './datetime/datetime.ui';
import { LabelUI } from './label/label.ui';
import { DatatableUI } from './datatable/datatable.ui';
import { TextboxUI } from './textbox/textbox-ui';
import { TextareaUI } from './textarea/textarea.ui';
import { DropDownListUI } from './dropDownList/dropDownList.ui'; 
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { FileUploadUI } from './fileUpload/fileUpload.ui';
import { FileManagerService } from '../services/fileManager.service';
 

const components = [
  DatatableUI, 
  UiTextboxComponent,
  ActionBarComponent,
  ValidationMessagesComponent,
  ButtonUI,
  CheckboxUI,
  UiDatetimeComponent, 
  LabelUI,
  TextboxUI,
  TextareaUI,
  DropDownListUI,
  ConfirmDialogComponent,
  FileUploadUI,
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    
  ],
  declarations: [components,],
  exports:[components],
  providers:[
      FileManagerService,
    ]
  
})
export class UIComponentModule { }
