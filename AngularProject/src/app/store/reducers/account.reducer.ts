import { createReducer, on } from '@ngrx/store';
import { initialAccountState } from '../state/account.state';
import { accountLoadSuccess, accountLoadFailure } from '../actions/account.action';

export const accountReducer = createReducer(initialAccountState,
    on(accountLoadSuccess, (state, action) => {
        return {
            ...state,
            user: action.account,
            error: null, // Ensure error is of type string
        };
    }),
    on(accountLoadFailure, (state, action) => {
        return {
            ...state,
            user: null,
            error: action.error.message, // Ensure error is of type string
        };
    }),
    // Add more account-related actions and reducers here
);