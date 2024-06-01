import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'U-checkbox',
  templateUrl: './checkbox.ui.html',
  styleUrls: ['./checkbox.ui.scss']
})
export class CheckboxUI implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  innerDisabled?: boolean | null = false;
  @Input() class: string = "";
  @Input() name: string;
  @Input() hidden: boolean;
  @Input() disabled?: boolean | null= null;

  @Input() checked: boolean;
  @Output() checkedChange = new EventEmitter();
  @Output() onChange = new EventEmitter();
  //control: FormControl = new FormControl(this.checked);

  changeCheck() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
    this.onChange.emit({ checked: this.checked });
  }
}
