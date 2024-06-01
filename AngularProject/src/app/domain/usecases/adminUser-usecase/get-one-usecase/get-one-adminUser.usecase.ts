import { Observable } from 'rxjs'; 
 import { UseCase } from 'src/app/base/use-case';
import { ApiResponseModel } from 'src/app/core/models/api-response.model';
import { Param } from 'src/app/core/params/param.payload';
import { AdminUserEntity } from 'src/app/domain/entities/adminUser-entity';
import { IAdminUserRepository } from 'src/app/domain/repositories/iAdminUser.repository';
 
export class GetOneAdminUserUseCase implements UseCase<Param<number>, ApiResponseModel<AdminUserEntity>> {

    constructor(private iRepository: IAdminUserRepository) { }

    execute(params:Param<number>): Observable<ApiResponseModel<AdminUserEntity>> {
        return this.iRepository.getUserProfile(params.payload);
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