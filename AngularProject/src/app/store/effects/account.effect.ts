import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { accountLoad, accountLoadSuccess, accountLoadFailure } from '../actions/account.action';
import { UserService } from 'src/app/core/services/user.service';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AccountEffects {
    constructor(private actions$: Actions, private accountService: UserService,
        private authService: AuthService, private _router: Router,
    ) { }

    loadAccount$ = createEffect(() =>
        this.actions$.pipe(
            ofType(accountLoad),
            switchMap(({ username, password }) =>
                this.accountService.login({ username, password }).pipe(
                    map(account => {
                        if (account.succeeded) {
                            console.log(account.data);
                            this.authService.setUserProfile(account.data);
                            this._router.navigate(['index']);

                            return accountLoadSuccess({ account: account.data });
                        } else {
                            console.log(account.errorMessage);
                            return accountLoadFailure({ error: account.errorMessage });
                        }
                    }),
                    catchError(error => of(accountLoadFailure({ error: error.message })))
                )
            )
        )
    );
}