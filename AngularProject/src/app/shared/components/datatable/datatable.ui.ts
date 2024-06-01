import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef, forwardRef } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR, NgForm } from '@angular/forms';

@Component({
  selector: 'U-datatable',
  templateUrl: './datatable.ui.html',
  styleUrls: ['./datatable.ui.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
    providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DatatableUI),
        multi: true
      }
    ]
})
export class DatatableUI implements OnInit {
  @ContentChild('tmpl') tmplRef: TemplateRef<any>;
  @ContentChild('tmpl2') tmplRef2: TemplateRef<any>;
  
  //@Input()  columns: string[]=[];
  @Input()  data: any[]=[];
  @Input()  canEdit: boolean=false;
  @Input()  canDelete: boolean=false;
  @Input() columns: DataTableColumn[];

  @Output() onEditAction = new EventEmitter<any>();
  @Output() onDeleteAction = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    
  }

  editAction(row:any){ 
    this.onEditAction.emit(row);
  }
  
  deleteAction(row:any){  
    this.onDeleteAction.emit(row);
  }
}
 


export interface DataTableColumn {

  /**The English field name in dataSource */
  field: string;
  /**The Arabic field name in dataSource */
  fieldAr?: string;
  /**Translation key of column header */
  header?: string;
  /**Control type in edit/insert mode */
  controlType?: string;
  /**DataSource of UI control (in edit/insert mode) */
  controlDataSource?: any;
  /**Name of primary key column in control's dataSource*/
  dataValueField?: string;
  /**Name of code column in lookup's dataSource. Needed when "data" is used instead of lookupType */
  dataCodeField?: string;
  /**Name of English desc column in control's dataSource*/
  dataTextFieldEn?: string;
  /**Name of Arabic desc column in control's dataSource*/
  dataTextFieldAr?: string;
  //TODO: delete
  style?: any;
  /**Callback to useful in customizing how row data is displayed */
  renderText?: (event: renderTextEvent) => string;
  //TODO: delete
  headerStyle?: any;
  /**Name of css class applied on header*/
  headerClass?: string;
  //TODO: delete
  cellStyle?: any;
  /**Name of css class applied on cell*/
  cellClass?: string;
  /**Name of css class applied on row in add mode*/
  addClass?: string;
  /**Name of css class applied on row in edit mode*/
  editClass?: string;
  /**Sets visibily of the column. Affects datatable settings (from ellipsis)*/
  visible?: boolean;
  /**Sets the default value for this column in case of add*/
  defaultValue?: any;
  /**Required of not. Default is false */
  required?: boolean;
  /**Controls how cell data should be displayed in read mode. By default value is displayed as a "label", it can also be a "link" or a "command" */
  viewAs?: string; //label, link, command (default as label)
  /**Href value when viewAs is set to "link"*/
  href?: string;
  /**click callback used when viewAs is set to "command"*/
  onClick?: (event: any) => void;
  /**Cell text that is displayed when viewAs is set to "command"*/
  commandText?: string; //with viewAs command
  /**Cell icon that is displayed when viewAs is set to "command"*/
  commandIcon?: string; //with viewAs command
  /**Cell tooltip that is displayed when viewAs is set to "command"*/
  commandIconTitle?: string; //with viewAs command
  /**Does not accept duplicate values in dataBase. Default is false*/
  unique?: boolean;
  /**For spinner (integer, real), and for textBox (any, url, email, arabicText, englishText, arabicLettersOnly, englishLettersOnly, arabicLettersAndNumbers, englishLettersAndNumbers, password, phone, ipAddress)*/
  dataType?: string;
  /**$ (or any other string unit, like: SR, %, Kg, ...etc)*/
  spinnerUnit?: string;
  /**Minimum valid value in spinner*/
  spinnerMin?: number;
  /**Maximum valid value in spinner*/
  spinnerMax?: number;
  /**Step value in spiner, when clicking + or -*/
  spinnerStep?: number;
  /**Show or hide spinner icons (+ or -)*/
  showSpin?: boolean; //for spinner (show hide + and - buttons)
  /**Max input characters in textBox and spinner*/
  maxLength?: number; //for textBox, spinner
  /**Min input characters in textBox and spinner*/
  minLength?: number; //for textBox, spinner
  /**Date type for calendar control. Value can be "g" or "h"*/
  dateType?: string; //for calendar (g , h)
  /**Columns for autoComplete and multiSelect controls*/
  //columns?: AutoCompleteCols[];
  //TODO: Check if this name is correct
  activeColumn?: string;  //for autocomplete
  /**LookupType for lookup and autoComplete controls*/
  lookupType?: any;
  /**Maximum allowed file size for fileUpload control*/
  maxSizeInKilo?: number; //for fileUpload
  /**Accepted file extensions for fileUpload control. Default is ".*", you can set it to a comma-separated list of extensions*/
  accept?: string; //for fileUpload,
  //for fileUpload,
  //alertUI?: AlertUI;
}


export interface DataTableSummaryColumn {
  field: string;
  renderText?: (event: any) => string;
}

export interface DataTableSummary {
  title: string;
  showTitleInColumn?: string;
  type: string;
  columns?: DataTableSummaryColumn[];
}

export interface renderTextEvent {
  rowIndex: number;
  columnIndex: number;
  data: any;
  row: any;
}

export const enum ControlType {
  textBox = 'textBox',
  textArea = 'textArea',
  spinner = 'spinner',
  checkBox = 'checkBox',
  switch = 'switch',
  dropDownList = 'dropDownList',
  radioButtonList = 'radioButtonList',
  calendarHijry = 'calendarHijry',
  calendarGregorian = 'calendarGregorian',
  link = 'link',
  autocomplete = 'autocomplete',
  timePicker = 'timePicker',
  multiSelect = 'multiSelect',
  lookup = 'lookup',
  fileUpload = 'fileUpload'
}

export const enum CommandIcon {
  download = 'la la-download'
}