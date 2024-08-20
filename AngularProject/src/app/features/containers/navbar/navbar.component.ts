import { Component, ViewChild, ElementRef, Output, EventEmitter, Renderer2 } from '@angular/core';

import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { AccountEntity } from 'src/app/entities/account.entity';



@Component({
  selector: 'app-side-bar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class SideBarComponent {
  @ViewChild('btnToogle') btnToogle!: ElementRef;
  @ViewChild('sidebar') sidebar!: ElementRef;
  @ViewChild('logoutButton') logoutButton!: ElementRef;

  @Output() contentChange: EventEmitter<{ title: string, breadCrumb: string, contentId: string }> = new EventEmitter();

  isLoggedIn = false;
  user$: Observable<AccountEntity | null>;
  constructor(private authService: AuthService,) {

  }


  ngAfterViewInit() {
    this.logoutButton.nativeElement.addEventListener('click', this.logout.bind(this));
  }
  //#region Menu
  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  togglesidebar() {
    this.sidebar.nativeElement.classList.toggle('opensidebar');
  }

  onItemClick(itemTitle: string, itemContentId: string, breadCrumb: string) {
    this.contentChange.emit({
      title: itemTitle,
      breadCrumb: breadCrumb,
      contentId: itemContentId
    });
  }
  //#endregion

  //#region  Login
  openDialog(): void {
    // const dialogRef = this.popup.open(LoginComponent, {});

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     this.authService.isLoggedIn().subscribe(isLoggedIn => {
    //       this.isLoggedIn = isLoggedIn;
    //     });
    //   }
    // });
  }

  logout() {
    console.log("clicked");
    this.authService.logout();
    window.location.href = "login";

  }
  //#endregion

}
