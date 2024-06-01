import { Component, ElementRef, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
 
import { Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'U-label',
  templateUrl: './label.ui.html',
  styleUrls: ['./label.ui.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelUI  implements OnChanges { 

  constructor(myElement: ElementRef) {
     
    this.elementRef = myElement;
  }

  private elementRef;
  onLangChangedSub: Subscription;

  @Input() class: string = "";
  @Input() name: string;
  @Input() text: string;
  @Input() hidden: boolean = false;


  ngOnChanges(changes: SimpleChanges) {
    // if (changes.text && this.elementRef) {
    //   if (this.onLangChangedSub) {
    //     this.elementRef.nativeElement.textContent = this.t.instant(this.text);
    //   }
    //   else {
    //     this.onLangChangedSub = this.t.onLangChanged.pipe(takeUntil(this.componentDestroyed)).subscribe(() => {
    //       this.elementRef.nativeElement.textContent = this.t.instant(this.text);
    //     });
    //   }
    // }
  }

  ngOnDestroy() {
    if (this.onLangChangedSub) {
      this.onLangChangedSub.unsubscribe();
    }
  }

}
