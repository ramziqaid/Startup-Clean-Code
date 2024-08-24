import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/core/services/auth.service';
import { TenantsService } from 'src/app/core/services/tenants.service';
import { UserService } from 'src/app/core/services/user.service';
import { AccountEntity } from 'src/app/entities/account.entity';
import { accountLoad } from 'src/app/store/actions/account.action';
import { StoreInterface } from 'src/app/store/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: string = "Admin";
  password: string = "M123_m";
  data: AccountEntity;
  returnUrl: string;
  constructor(private iAccountService: UserService,
    private store: Store<StoreInterface>,
    private _router: Router,
    private authService: AuthService,
    private t: TenantsService,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.authService.logout();
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';

    if (this.returnUrl != '/') {
      this._router.navigate([this.returnUrl]);
    }

  }

  login() {
    this.store.dispatch(accountLoad({ username: this.userName, password: this.password }));
    //   this.iAccountService.login({ username: this.userName, password: this.password }).subscribe({
    //     next: (response) => {
    //       if (response.succeeded) {
    //         this.data = response.data;
    //         this.authService.setUserProfile(this.data);
    //         // debugger
    //         //this.router.navigate(["/home/dashboard"]);
    //         this._router.navigate(['index']);
    //       }
    //     },
    //     error: () => {
    //       //this.messageService.showError('message.unhandledError');
    //       //this.accountService.setUserProfile(null);
    //     },
    //   });
  }

}
