import { Component, OnDestroy, OnInit } from '@angular/core'; 
import { TranslateService } from '@ngx-translate/core';
import { MessagesService } from '../services/messages.service';
import { AppInjector } from '../services/app-injector.service';
import { AppConfirmService } from '../services/app-confirm.service';
import { CryptoService } from 'src/app/core/services/crypto.service';
import * as enums from "../enums";
import { ActivatedRoute } from '@angular/router';
@Component({
  template: ''
})
export class BaseComponent implements OnDestroy {
  static enums = enums;
  public translate: TranslateService;
  public messageService: MessagesService;
  public appConfirm: AppConfirmService;
  public cryptoService: CryptoService;
 
  /**
   *
   */
  constructor() { 
    const injector = AppInjector.getInjector();
    this.translate = injector.get(TranslateService);
    this.messageService = injector.get(MessagesService);
    this.appConfirm = injector.get(AppConfirmService);
    this.cryptoService = injector.get(CryptoService);  
  }
    ngOnDestroy(): void {
         
    }
}