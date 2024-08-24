
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, CanActivateChild, CanLoad, UrlTree, UrlSegment } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { AccountEntity } from 'src/app/entities/account.entity';
import { TokenService } from 'src/app/shared/services/token.service';
import { selectAccount } from 'src/app/store/selectors/account.selector';
import { StoreInterface } from 'src/app/store/store';


@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

    account: AccountEntity | null = null;
    constructor(private authService: AuthService,
        private router: Router,
        private jwtHelper: JwtHelperService,
        private tokenService: TokenService,
        private store: Store<StoreInterface>
    ) {
        this.store.select(selectAccount).subscribe(data => {
            this.account = data;
        });
    }
    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return true;
    }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.account == null) {
            //this.store.dispatch(accountLoad)
            this.router.navigate(['/login']);
            return false;
        }
        //return true;
        var token = this.authService.getUserProfile();
        if (token == undefined || token == null) return false;

        var access = await this.validToken(token.accessToken);
        if (!access) {
            this.router.navigate(['/login']);
        }
        return access;

    }
    async canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.account == null) {
            //this.store.dispatch(accountLoad)
            this.router.navigate(['/login']);
            return false;
        }
        var token = this.authService.getUserProfile();
        if (token == undefined || token == null) return false;

        var access = await this.validToken(token.accessToken);
        if (!access) {

            this.router.navigate(['/login']);
        }
        return access;
    }

    async validToken(token: string) {
        if (token && !this.jwtHelper.isTokenExpired(token)) {
            return true;
        }

        return await this.tokenService.tryRefreshingTokens();
    }
}
