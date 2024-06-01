import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core'; 
import { TranslateService } from '@ngx-translate/core'; 
import { constants } from '../enums/constant.enum';

@Directive({
  selector: '[appMaxWordLength]' , 

})
export class MaxWordLengthDirective   implements OnInit {
  public translate: TranslateService;
  @Input('id') formControlName: string;
  @Input() maxLengthWord:number = constants.MaxLengthWord; 
  //maxLengthWord=30;
  errorSpanId = '';

  constructor(private elRef: ElementRef ,private TranslateService:TranslateService  
  ) { 
    this.translate=TranslateService;
  }
  ngOnInit(): void {
    this.errorSpanId = this.formControlName + '-error';   
  }
  
   
@HostListener('keydown', ['$event']) onkeydown(event: any) { 
  const e = <KeyboardEvent>event;
  if(event.keyCode === 8 || event.keyCode === 46){
    this.removeError();
    return;
  }

}

@HostListener('keyup', ['$event']) onkeyUp(event: any) { 
   
  const e = <KeyboardEvent>event;
  var splitted = event.target.value.split(/[ .:;?!~,`"&|()<>{}\[\]\r\n/\\]+/); 
  //console.log(splitted)
  let i=0;
  
while(i<splitted.length){   
//  debugger
if(splitted[i].length>this.maxLengthWord-1) { 
  if(! this.containsSpecialChars(splitted[i])){
    e.preventDefault(); 
    this.showError(); 
    return;
  } 
 }
 i=i+1;
}
}
  @HostListener('keypress', ['$event']) onKeyPress(event: any) {     
    const e = <KeyboardEvent>event;
  //console.log(event.keyCode);
  if (e.key === 'Tab' || e.key === 'TAB' || event.keyCode === 32 ) { 
      return;
  }
  //this.elRef.nativeElement.style.backgroundColor = "yellow";
  this.removeError();
  let k;
  k = event.keyCode;  // k = event.charCode;  (Both can be used) 
  var splitted = event.target.value.split(" "); 
    //console.log(splitted)
    let i=0;
    
 while(i<splitted.length){   
 //  debugger
  if(splitted[i].length>this.maxLengthWord-1) { 
    if(! this.containsSpecialChars(splitted[i])){
      e.preventDefault(); 
      this.showError(); 
      return;
    } 
   }
   i=i+1;
 } 

} 
containsSpecialChars(str:string):boolean {
 return false;
  // const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  // return specialChars.test(str);
} 

private showError() {
  this.removeError();  
  const errorMsg =this.translate.instant("message.maxWordLength",{maxWordLength: this.maxLengthWord});
  const errSpan = '<div class="ng-star-inserted" id="' + this.errorSpanId + '">   <div class="appMaxWordLength" style="width: 100%;  margin-top: 0.25rem;  font-size: 80%;  color: #C30A0A;">' 
  + errorMsg + '</div> </div>';  const errorElement = document.getElementById(this.errorSpanId); 
  if (errorElement) {
    return;
  } 
  
  this.elRef.nativeElement.parentElement.insertAdjacentHTML('beforeend', errSpan);
  this.elRef.nativeElement.classList.remove('ng-valid');
  this.elRef.nativeElement.classList.add('ng-invalid');
}


private removeError()  { 
  const errorElement = document.getElementById(this.errorSpanId);
  if (errorElement) { 
    //this.control.invalid.
    
    this.elRef.nativeElement.classList.remove('ng-valid');
    this.elRef.nativeElement.classList.remove('ng-invalid');
    errorElement.remove(); 
  }
}

}
