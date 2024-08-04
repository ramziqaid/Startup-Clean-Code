import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2, RendererFactory2 } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { BaseComponent } from 'src/app/shared/components/base.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseComponent implements OnInit {
  private renderer: Renderer2;
  class: boolean = true;
  gregorianDate: string = new Date().toLocaleDateString();
  hijriDate: any;
  hijriDateString: string = "";
  showSettings: boolean = false;
  fontSize: number = 100;
  showNotification: boolean = false;
  notifications: Notification[] = [
    // { id:1 , title :" Title Notification 1", message: 'Notification 1', time:"4", read: false },
    // { id:2 , title :" Title Notification 2", message: 'Notification 2', time:"10", read: true },
    // { id:3 , title :" Title Notification 3", message: 'Notification 3', time:"15", read: false },
  ];

  constructor(
    private authService: AuthService,
    @Inject(DOCUMENT) private document: Document,
    rendererFactory: RendererFactory2
  ) {
    super();
    this.renderer = rendererFactory.createRenderer(null, null);
    const today = new Date();
    // this.hijriDate = HijriConverter.toHijri(today.getFullYear(), today.getMonth() + 1, today.getDate());
    // this.hijriDateString = this.hijriDate.hy + "/" + this.hijriDate.hm + "/" + this.hijriDate.hd;
  }


  togglesidebar() {
    let toggle = document.querySelector('.sidebar');
    toggle?.classList.toggle('opensidebar');
  }






  // #region  Notification Popup 
  toggleNotification() {
    this.showNotification = !this.showNotification;
  }

  closeNotification() {
    this.showNotification = false;
  }
  markAsRead(id: number): void {
    // this.notificationService.markAsReadById(id);
    //const notificationToUpdate = this.notifications.find(notification => notification.id === id);
    // if (notificationToUpdate) {
    //   notificationToUpdate.read = true;
    // }

  }
  //#endregion

  // #region   Settings Popup 
  toggleSettings() {
    this.showSettings = !this.showSettings;
  }

  closeSettings() {
    this.showSettings = false;
  }
  decreaseFontSize() {
    if (this.fontSize > 50) {
      this.fontSize -= 10;
    }
  }

  increaseFontSize() {
    if (this.fontSize < 200) {
      this.fontSize += 10;
    }
  }


  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.setDocumentDirection(lang);
  }

  private setDocumentDirection(lang: string) {
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    this.renderer.setAttribute(document.body, 'dir', dir);
  }
  ngOnInit() {
    //this.translate.setDefaultLang('ar'); 
    if (!this.isUserLoggedIn())
      this.logout();
  }
  changeTheme() {
    if (this.class) {
      this.renderer.addClass(this.document.body, 'sidenav-toggled');

    } else {
      this.renderer.removeClass(this.document.body, 'sidenav-toggled');

    }
    this.class = !this.class;
  }

  isUserLoggedIn() {
    var data = this.authService.isUserLoggedIn();
    if (data === undefined || data == null || data == false)
      return false;
    else
      return data;
  }

  logout() {
    this.authService.logout();
    window.location.href = "login";
  }
}

