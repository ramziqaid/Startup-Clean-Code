import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'U-textarea',
  templateUrl: './textarea.ui.html',
  styleUrls: ['./textarea.ui.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => TextareaUI)
    }
  ]
})
export class TextareaUI implements OnInit, ControlValueAccessor {
  @Input() cols: string;
  @Input() rows: string;
  @Input() forLabel: any;
  @Input() label: any;

  textValue: string;
  propagateChange = (_: any) => { };

  constructor() { }

  ngOnInit() {
  }

  onChange(value: any) {
    this.textValue = value.target.value;
    this.propagateChange(this.textValue);
  }

  writeValue(obj: any) {
    if (obj)
      this.textValue = obj;
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any) {

  }

}
