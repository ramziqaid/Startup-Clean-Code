import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'U-button',
  templateUrl: './button.ui.html',
  styleUrls: ['./button.ui.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ButtonUI),
      multi: true
    }
  ]
})
export class ButtonUI implements OnInit , OnChanges {

  @Input()
  name: string;

  @Input()
  hidden: boolean;

  @Input()
  disabled?: boolean | null = null;

  @Input()
  class: string = "";

  @Input() type: string = "button";

  /**
   * valid values are focus, brand, metal, danger, success, warning, primary 
   */
  @Input()
  color: 'focus' | 'brand' | 'metal' | 'danger' | 'success' | 'warning' | 'primary';

  @Output() onClick = new EventEmitter();


  focus: boolean = false;
  brand: boolean = false;
  metal: boolean = false;
  danger: boolean = false;
  success: boolean = false;
  warning: boolean = false;
  primary: boolean = false;
  default: boolean = true;

  constructor() { }

  ngOnInit() {
  }
  //-----------------------------EVENTS

  clickEvent() {
    this.onClick.emit();
  }
  
  ngOnChanges(changes: SimpleChanges ) { 
    if (changes['color'] && this.color) {
      switch (this.color.toLocaleLowerCase()) {
        case "focus":
          this.focus = true;
          this.default = false;
          break;
        case "brand":
          this.brand = true;
          this.default = false;
          break;
        case "metal":
          this.metal = true;
          this.default = false;
          break;
        case "danger":
          this.danger = true;
          this.default = false;
          break;
        case "success":
          this.success = true;
          this.default = false;
          break;
        case "warning":
          this.warning = true;
          this.default = false;
          break;
        case "primary":
          this.primary = true;
          this.default = false;
          break;
        default: ""
      }
    }

    
  }
}
