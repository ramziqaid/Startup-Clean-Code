import { ActionReducerMap } from "@ngrx/store";

import { counterReducer } from "./reducers/counter.reducer";
import { CounterState } from "./state/counter.state";
import { LoadSpinnerState } from "./state/loadSpinner.state";
import { loadSpinnerReducer } from "./reducers/loadSpinner.reducer";
import { AccountState } from "./state/account.state";
import { accountReducer } from "./reducers/account.reducer";

export interface StoreInterface {
    account: AccountState,
    count: CounterState,
    loadSpinner: LoadSpinnerState,
    //comment: CommentsPostState
}

export const StoreReducer: ActionReducerMap<StoreInterface> = {
    account: accountReducer,
    count: counterReducer,
    loadSpinner: loadSpinnerReducer,
    // comment: commentReducer
}