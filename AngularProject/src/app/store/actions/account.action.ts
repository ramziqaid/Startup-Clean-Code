import { createAction, props } from '@ngrx/store';
import { AccountEntity } from 'src/app/entities/account.entity';

export const accountLoad = createAction('[Account Component] accountLoad', props<{ username: string, password: string }>());
export const accountLoadSuccess = createAction('[Account Component] accountLoadSuccess', props<{ account: AccountEntity }>());
export const accountLoadFailure = createAction('[Account Component] accountLoadFailure', props<{ error: any }>());


