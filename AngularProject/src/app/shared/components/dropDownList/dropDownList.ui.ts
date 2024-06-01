import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'U-dropDownList',
  templateUrl: './dropDownList.ui.html',
  styleUrls: ['./dropDownList.ui.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => DropDownListUI)
    }
  ]
})
export class DropDownListUI implements ControlValueAccessor {
  selectValue: any; 
  
  @Input()
  options: Option[];

  @Input()
  title: string;

  constructor() { }

  propagateChange = (_: any) => {};

  onChange(value: any){
    this.selectValue = value.target.value;
    this.propagateChange(this.selectValue);
  }

  writeValue(obj: any): void{
    if(obj)
    this.selectValue = obj;
  }
  
  registerOnChange(fn: any): void{
    this.propagateChange = fn;
  }

  registerOnTouched() {}
}
export interface Option {
  value: any;
  name: string;
}