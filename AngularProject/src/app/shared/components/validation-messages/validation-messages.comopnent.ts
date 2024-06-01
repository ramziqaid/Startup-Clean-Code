import { Component, Input, ViewEncapsulation } from '@angular/core';
import * as enums  from '../../enums/pattern-constant.enum';
interface ErrorDef {
  error: string;
  message: string;
  errorProperty: string;
}

@Component({
  selector: '<validation-messages>',
  encapsulation: ViewEncapsulation.None,
  template: ` 
  <ng-container
    *ngIf="formCtrl.invalid && (formCtrl.dirty || formCtrl.touched)"  >
  
    <div *ngFor="let errorDef of standartErrorDefs" class="invalid-feedback">
      <ng-container *ngIf="getErrorDefinitionIsInValid(errorDef.error)">  
        
      <div [ngSwitch]="errorDef.error">
        <div *ngSwitchCase="'maxlength'"> 
          {{ "message.maxlength" | translate: { maxlength: this.formCtrl.errors[errorDef.error]['requiredLength'] } }}
        </div>
        <div *ngSwitchCase="'minlength'"> 
          {{ "message.minlength" | translate: { minlength: this.formCtrl.errors[errorDef.error]['requiredLength'] } }}
        </div>  
        <div *ngSwitchCase="'MaxWordLength'"> 
        {{ "message.maxWordLength" | translate: { maxWordLength: this.formCtrl.errors[errorDef.error]['MaxWordLength'] } }}
      </div>       
        <div *ngSwitchCase="'min'"> 
          {{ "message.min" | translate: { min: this.formCtrl.errors[errorDef.error]['min'] } }}
        </div>   
        <div *ngSwitchCase="'max'"> 
          {{ "message.max" | translate: { max: this.formCtrl.errors[errorDef.error]['max'] } }}
        </div>  
        <div *ngSwitchCase="'email'"> 
          {{ "message.email" | translate }}
        </div>  
        <div *ngSwitchCase="'pattern'">  
          <!-- {{this.formCtrl.errors[errorDef.error]['requiredPattern']}} -->
            <div [ngSwitch]="this.formCtrl.errors[errorDef.error]['requiredPattern']">
              <div *ngSwitchCase='this.PATTERNCONSTANTS.TenDigitsNumberOnly'> 
               {{ "message.tenDigitsNumberOnly" | translate }}
              </div>
              <div *ngSwitchCase='this.PATTERNCONSTANTS.NumberOnly'> 
               {{ "message.numberOnly" | translate }}
              </div>
              <div *ngSwitchCase='this.PATTERNCONSTANTS.NumberValueOnly'> 
               {{ "message.numberOnly" | translate }}
              </div>
              <div *ngSwitchCase='this.PATTERNCONSTANTS.CharOnly'> 
               {{ "message.charOnly" | translate }}
              </div>
              <div *ngSwitchCase='this.PATTERNCONSTANTS.WordCharOnly'> 
               {{ "message.charOnly" | translate }}
              </div>
              <div *ngSwitchCase='this.PATTERNCONSTANTS.WordCharOnly_Dot'> 
               {{ "message.charOnly" | translate }}
              </div>
              <div *ngSwitchCase='this.PATTERNCONSTANTS.NumberAndCharOnly'> 
               {{ "message.numberAndCharOnly" | translate }}
              </div>
              <div *ngSwitchCase='this.PATTERNCONSTANTS.IdNumber'> 
               {{ "message.idNumber" | translate }}
              </div>
              <div *ngSwitchCase='this.PATTERNCONSTANTS.IqamaNumber'> 
               {{ "message.iqamaNumber" | translate }}
              </div>
              <div *ngSwitchCase='this.PATTERNCONSTANTS.IdIQamaNumber'> 
               {{ "message.iqamaNumber" | translate }}
              </div>
              <div *ngSwitchCase='this.PATTERNCONSTANTS.WordNumberAndCharOnly'> 
               {{ "message.wordNumberAndCharOnly" | translate }}
              </div>
              <div *ngSwitchCase='this.PATTERNCONSTANTS.PositiveNumberDecimal'> 
                {{ "message.positiveNumberDecimal" | translate }}
              </div>
              <div *ngSwitchDefault>  
              {{ "message.pattern" | translate }}
                </div>
            </div>          
        </div> 
        <div *ngSwitchCase="'required'"> 
          {{ "message.fieldIsRequired" | translate }}
        </div>         
        <div *ngSwitchDefault> 
        {{errorDef.error}}
      </div>   
      </div>  

      </ng-container>
    </div>
  </ng-container>`,
})
export class ValidationMessagesComponent {
  _errorDefs: ErrorDef[] = [];
  readonly PATTERNCONSTANTS = enums.patternConstants; 
  @Input() formCtrl: any;


  readonly standartErrorDefs: ErrorDef[] = [
    { error: 'MaxWordLength', message: 'طول الكلمة يجب ان لايتجاوز 30 حرف' } as ErrorDef,
    { error: 'required', message: 'الحقل مطلوب' } as ErrorDef,
    {
      error: 'minlength',
      message: 'القيمة المدخلة غير صحيحة',
      errorProperty: 'requiredLength',
    } as ErrorDef,
    {
      error: 'maxlength',
      message: 'القيمة المدخلة غير صحيحة',
      errorProperty: 'requiredLength',
    } as ErrorDef,
    {
      error: 'min',
      message: ' القيمة المدخلة يجب أن تكون أكبر من ',
      errorProperty: 'min',
    } as ErrorDef,
    {
      error: 'max',
      message: ' القيمة المدخلة يجب أن تكون أكبر من ',
      errorProperty: 'max',
    } as ErrorDef,
    { error: 'email', message: 'القيمة المدخلة غير صحيحة' } as ErrorDef,
    {
      error: 'pattern',
      message: 'القيمة المدخلة غير صحيحة',
      errorProperty: 'requiredPattern',
    } as ErrorDef,
  ];


  constructor() {}

  getErrorDefinitionIsInValid(error: string): boolean {
    return !!this.formCtrl.errors[error];
  }
}
