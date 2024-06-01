import { NgModule } from '@angular/core'; 
import { DATA_Account_IOC, DATA_AdminUser_IOC, DATA_Template_IOC } from './data.ioc';  
 
@NgModule({
    providers: [ 
        ...DATA_AdminUser_IOC, 
        ...DATA_Account_IOC, 
        ...DATA_Template_IOC, 
    ],
    imports: [ 
    ],
})
export class DataModule { }