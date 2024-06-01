import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDigitDecimalNumber]'
})
export class DigitDecimalNumberDirective {
  @Input() digitBeforDot:number = 10;
  @Input() digitAfterDot:number = 5;
  // Allow decimal numbers and negative values
  //'^(([\u0660-\u06690-9]+(\\.[\u0660-\u06690-9]{1,5})?))$'
  //private regex: RegExp ;//= new RegExp('^([\u0660-\u06690-9]){1,${digitBeforDot}}\.?([\u0660-\u06690-9]){0,2}$','g');
  // Allow key codes for special events. Reflect : 
  
 // private regex: RegExp = new RegExp(`[\u0660-\u06690-9]*\.?\d{0,2}$/g`);
  private regex: RegExp ;
 
  // Backspace, tab, end, home
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', '-', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];

  constructor(private el: ElementRef) {
    //this.regex=    new RegExp(`^\\d*\\.?\\d{0,${this.digitAfterDot-1}}$`, 'g'); 
  }
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    this.regex=    new RegExp(`^\\d*\\.?\\d{0,${this.digitAfterDot-1}}$`, 'g'); 
    //console.log(this.el.nativeElement.value);
    // Allow Backspace, tab, end, and home keys
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    let current: string = this.el.nativeElement.value;
    const position = this.el.nativeElement.selectionStart;
    const next: string = [current.slice(0, position), event.key == 'Decimal' ? '.' : event.key, current.slice(position)].join('');
    
    if (next && !String(current).match(this.regex)) {
      event.preventDefault();
    }
  }
}