import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { ControlContainer, ControlValueAccessor, NG_VALUE_ACCESSOR, NgForm } from '@angular/forms';

@Component({
  selector: 'U-textbox',
  templateUrl: './textbox-ui.html',
  styleUrls: ['./textbox-ui.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextboxUI),
      multi: true
    }
  ]
})
export class TextboxUI implements ControlValueAccessor {
  @Input({ required: true }) id: string;
  @Input({ required: true }) name: string;
  @Input() value: string;
  @Input() label: any;
  @Input() forLabel: any;
  @Input() placeholder: any;
  @Input() required: boolean=false;
  @Input({ required: true }) type: string = 'text';
  @Input() disabled: boolean   = false;

  @Output() valueChange = new EventEmitter();
  
  constructor() { }

  propagateChange = (fn: any) => {};

  changeValue(value: any){ 
    // this.value = value;
    // this.propagateChange(this.value);
  }
  onInputChange(event: Event): void {
    // Your custom logic here
    //debugger
    this.value = (event.target as HTMLInputElement).value;
    this.valueChange.emit(this.value);  
    // You can perform any other actions or modifications based on the input event
  }
  writeValue(obj: any): void{
    if(obj)
    this.value = obj;
  }

  registerOnChange(fn: any): void{
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void{

  }

}
