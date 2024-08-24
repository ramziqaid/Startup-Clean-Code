import { AccountEntity } from "src/app/entities/account.entity";

export interface AccountState {
    user: AccountEntity | null;
    error: string | null;
}

export const initialAccountState: AccountState = {
    user: null,
    error: null,
};