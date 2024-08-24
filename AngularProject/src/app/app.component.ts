import { Component, Injector, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './core/services/auth.service';
import { Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import Swal from 'sweetalert2'
import { AppInjector } from './shared/services/app-injector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Makkah-Admin';
  private unsubscriber: Subject<void> = new Subject<void>();
  constructor(translate: TranslateService, private authService: AuthService, private injector: Injector) {

    //this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('ar');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('ar');
    // if (!this.authService.isUserLoggedIn()) {
    //   this.authService.logout();
    // }

  }
  ngOnInit(): void {
    AppInjector.setInjector(this.injector);
  }


}
