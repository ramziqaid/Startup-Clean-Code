import { Observable } from 'rxjs'; 
import { UseCase } from 'src/app/base/use-case';
import { ApiResponseModel } from 'src/app/core/models/api-response.model';
import { Param } from 'src/app/core/params/param.payload';
import { AccountEntity } from 'src/app/domain/entities/account.entity'; 
import { IAccountRepository } from 'src/app/domain/repositories/iAccount.repository'; 
 
export class LoginAccountUseCase implements 
        UseCase<Param<{ username: string; password: string }>, ApiResponseModel<AccountEntity>> {

    constructor(private iRepository: IAccountRepository) { }
    execute(params: Param<{ username: string; password: string; }>): Observable<ApiResponseModel<AccountEntity>> {
        return this.iRepository.login(params.payload);
    }
 
}

// export class UserLoginUseCase implements UseCase<{ username: string; password: string }, AdminUserEntity> {

//     constructor(private userRepository: IAdminUserRepository) { }

//     execute(
//        params: { username: string, password: string },
//     ): Observable<AdminUserEntity> {
//         return this.userRepository.login(params);
//     }
// }
// export class UserRegisterUseCase implements UseCase<{ phoneNum: string; password: string }, AdminUserEntity> {

//     constructor(private userRepository: IAdminUserRepository) { }

//     execute(
//         params: { phoneNum: string; password: string },
//     ): Observable<AdminUserEntity> {
//         return this.userRepository.register(params);
//     }
// }