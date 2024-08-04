import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalSettingComponent } from './portal-setting/portal-setting.component';
import { SettingRoutesModule } from './setting.routing';



@NgModule({
 
  imports: [
    CommonModule,
    SettingRoutesModule,
  ],
  declarations: [PortalSettingComponent],
})
export class SettingModule { }
