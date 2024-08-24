import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AccountState } from '../state/account.state';

export const selectAccountState = createFeatureSelector<AccountState>('account');

export const selectAccount = createSelector(
    selectAccountState,
    (state: AccountState) => state.user
);

export const selectAccountError = createSelector(
    selectAccountState,
    (state: AccountState) => state.error
);