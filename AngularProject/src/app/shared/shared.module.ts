import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { HttpClientModule } from '@angular/common/http';
import { BlockCopyPasteDirective } from './directives/block-copy-paste.directive';
import { UIComponentModule } from './components/ui-component.module';
import { TranslateModule } from '@ngx-translate/core';
import { AuthGuard } from './guards/auth.guard';
import { TokenService } from './services/token.service';
import { DATA_Account_IOC } from '../data/data.ioc';
import { MessagesService } from './services/messages.service';
import { AppConfirmService } from './services/app-confirm.service';
import { SafePipe } from './pipes/safe.pipe';
import { FileManagerService } from './services/fileManager.service';
 
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    UIComponentModule,
    TranslateModule,  
  ],
  declarations:[
    BlockCopyPasteDirective,  
    SafePipe,
  ],
  providers:[
    TokenService,  
    AuthGuard, 
    MessagesService,
    AppConfirmService,
    FileManagerService,
    ...DATA_Account_IOC, 
     
  ],
  exports:[
    UIComponentModule,
    BlockCopyPasteDirective,
    TranslateModule,
    SafePipe, 
  ]
})
export class SharedModule { }
