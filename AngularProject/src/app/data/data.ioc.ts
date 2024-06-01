import { Provider } from "@angular/core"; 
 import { GetOneAdminUserUseCase } from "../domain/usecases/adminUser-usecase/get-one-usecase/get-one-adminUser.usecase";
import { IAdminUserInteractor } from "./interactors/contracts/adminUser.interactor";
import { AdminUserInteractor } from "./interactors/implementations/adminUser/adminUser.interactor";
import { AdminUserImplementationRepository } from "./implementations/adminUser/adminUser-implementation";
import { IAccountInteractor } from "./interactors/contracts/account.interactor";
import { AccountInteractor } from "./interactors/implementations/account/account.interactor";
import { LoginAccountUseCase } from "../domain/usecases/account-usecase/login-usecase/login-usecase";
import { AccountImplementationRepository } from "./implementations/account/account-implementation";
import { RefershTokenAccountUseCase } from "../domain/usecases/account-usecase/refershToken-usecase/refershToken-usecase";
import { ITemplateInteractor } from "./interactors/contracts/template.interactor";
import { TemplateInteractor } from "./interactors/implementations/template/template.interactor";
import { TemplateImplementationRepository } from "./implementations/template/template-implementation";
import { CreateTemplateUseCase } from "../domain/usecases/template-usecase/create-usecase";
import { UpdateTemplateUseCase } from "../domain/usecases/template-usecase/update-usecase";
import { GetManyTemplateCase } from "../domain/usecases/template-usecase/get-many-usecase";
import { RemoveTemplateUseCase } from "../domain/usecases/template-usecase/remove-usecase";
import { GetOneTemplateUseCase } from "../domain/usecases/template-usecase/get-one-usecase";
  
 

export const DATA_AdminUser_IOC: Provider[] = [
    {
        provide: IAdminUserInteractor,
        useClass: AdminUserInteractor
    },   
    {
        deps: [AdminUserImplementationRepository],
        provide: GetOneAdminUserUseCase,
        useFactory: (repository: AdminUserImplementationRepository) => new GetOneAdminUserUseCase(repository),
    }, 
];

export const DATA_Account_IOC: Provider[] = [
    {
        provide: IAccountInteractor,
        useClass: AccountInteractor
    },   
    {
        deps: [AccountImplementationRepository],
        provide: LoginAccountUseCase,
        useFactory: (repository: AccountImplementationRepository) => new LoginAccountUseCase(repository),
    }, 
    {
        deps: [AccountImplementationRepository],
        provide: RefershTokenAccountUseCase,
        useFactory: (repository: AccountImplementationRepository) => new RefershTokenAccountUseCase(repository),
    }, 
];

export const DATA_Template_IOC: Provider[] = [
    {
        provide: ITemplateInteractor,
        useClass: TemplateInteractor
    },   
    {
        deps: [TemplateImplementationRepository],
        provide: CreateTemplateUseCase,
        useFactory: (repository: TemplateImplementationRepository) => new CreateTemplateUseCase(repository),
    }, 
    {
        deps: [TemplateImplementationRepository],
        provide: UpdateTemplateUseCase,
        useFactory: (repository: TemplateImplementationRepository) => new UpdateTemplateUseCase(repository),
    }, 
    {
        deps: [TemplateImplementationRepository],
        provide: GetManyTemplateCase,
        useFactory: (repository: TemplateImplementationRepository) => new GetManyTemplateCase(repository),
    }, 
    {
        deps: [TemplateImplementationRepository],
        provide: GetOneTemplateUseCase,
        useFactory: (repository: TemplateImplementationRepository) => new GetOneTemplateUseCase(repository),
    }, 
    {
        deps: [TemplateImplementationRepository],
        provide: RemoveTemplateUseCase,
        useFactory: (repository: TemplateImplementationRepository) => new RemoveTemplateUseCase(repository),
    },  
    // {
    //     deps: [TemplateImplementationRepository],
    //     provide: DownloadTemplateUseCase,
    //     useFactory: (repository: TemplateImplementationRepository) => new DownloadTemplateUseCase(repository),
    // }, 
   
];
 