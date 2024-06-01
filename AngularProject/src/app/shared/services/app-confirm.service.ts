import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject } from 'rxjs';
import { ConfirmObject } from '../components/confirm-dialog/confirm-dialog.component';
import * as enums from '../enums';
import { AppInjector } from './app-injector.service';

@Injectable({
  providedIn: 'root',
})
export class AppConfirmService {
  private subject = new Subject<any>();

  constructor(public translate: TranslateService) {
    const injector = AppInjector.getInjector();
    this.translate = injector.get(TranslateService);
  }
  show(confirm: ConfirmObject): any {

    if (confirm.type == undefined)
      confirm.type = enums.ConfirmType.Confirm;
    if (confirm.title == undefined)
      confirm.title = 'label.confirmTitle';
    if (confirm.text == undefined)
      confirm.text = 'message.noMessage';

    this.setConfirmation(confirm);
  }
  private setConfirmation(confirm: ConfirmObject): any {
    const that = this;

    this.translate.get('message.fieldIsRequired').subscribe((translated: string) => {
      let translationBtn1: string = '';
      let translationBtn2: string = '';
      //debugger
      confirm.text = this.translate.instant(confirm.text);
      confirm.title = this.translate.instant(confirm.title || 'label.confirmTitle');

      if (confirm.buttonType?.[0] != undefined) {
        switch (confirm.buttonType?.[0]) {
          case enums.ConfirmButtonType.Yes:
            translationBtn1 = this.translate.instant("label.yes"); break;
          case enums.ConfirmButtonType.No:
            translationBtn1 = this.translate.instant("label.no"); break;
          case enums.ConfirmButtonType.Cancel:
            translationBtn1 = this.translate.instant("label.cancel"); break;
          case enums.ConfirmButtonType.ConfirmAssigment:
            translationBtn1 = this.translate.instant("label.confirmAssigment"); break;
          case enums.ConfirmButtonType.Update:
            translationBtn1 = this.translate.instant("label.updateButton"); break;
          case enums.ConfirmButtonType.Back:
            translationBtn1 = this.translate.instant("label.backButton"); break;
        }
      } else {
        translationBtn1 = this.translate.instant("label.yes");
      }
 
      if (confirm.buttonType?.[1] != undefined) {
        switch (confirm.buttonType?.[1]) {
          case enums.ConfirmButtonType.Yes:
            translationBtn2 = this.translate.instant("label.yes"); break;
          case enums.ConfirmButtonType.No:
            translationBtn2 = this.translate.instant("label.no"); break;
          case enums.ConfirmButtonType.Cancel:
            translationBtn2 = this.translate.instant("label.cancel"); break;
          case enums.ConfirmButtonType.ConfirmAssigment:
            translationBtn2 = this.translate.instant("label.confirmAssigment"); break;
          case enums.ConfirmButtonType.Update:
            translationBtn2 = this.translate.instant("label.updateButton"); break;
          case enums.ConfirmButtonType.Back:
            translationBtn2 = this.translate.instant("label.backButton"); break;
        }
      } else {
        translationBtn1 = this.translate.instant("label.no");
      }

      this.subject.next({
        type: confirm.type,
        text: confirm.text,
        yesFn(): any {
          that.subject.next(false); // This will close the modal
          confirm.fun[0]();
        },
        noFn(): any {
          that.subject.next(false);
          confirm.fun[1]();
        },
        header: confirm.title,
        translationBtn1: translationBtn1,
        translationBtn2: translationBtn2
      });
    }); 
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
  
}
