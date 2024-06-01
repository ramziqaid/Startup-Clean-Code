import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2, RendererFactory2 } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{
  private renderer: Renderer2;
  class:boolean=true;
  constructor(
    private authService:AuthService,
    @Inject(DOCUMENT) private document: Document,
    rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }
  ngOnInit() {
    //this.translate.setDefaultLang('ar'); 
    if(!this.isUserLoggedIn())
      this.logout();
  }
  changeTheme() {
    if(this.class){
      this.renderer.addClass(this.document.body, 'sidenav-toggled');
      
    }else{
      this.renderer.removeClass(this.document.body, 'sidenav-toggled');
     
    }
    this.class=!this.class;
  }

  isUserLoggedIn() {
    var data = this.authService.isUserLoggedIn();
     if (data === undefined || data == null || data == false)
       return false;
     else
       return data;
   }

  logout(){ 
    this.authService.logout();
    window.location.href = "login";
  }
}
