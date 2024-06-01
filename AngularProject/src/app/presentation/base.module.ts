import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { AdminLayoutComponent } from './containers/admin-layout/admin-layout.component';
import { NavbarComponent } from './containers/navbar/navbar.component';
import { HeaderComponent } from './containers/header/header.component';  
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseRoutesModule } from './base.routing';
import { SharedModule } from '../shared/shared.module';
import { DataModule } from '../data/data.module';



@NgModule({
  imports: [
    CommonModule, 
    //BrowserModule,
    DataModule,
    BaseRoutesModule, 
    FormsModule,
    ReactiveFormsModule,
    SharedModule, 
  ],
  declarations: [
    //HomeComponent,
    AdminLayoutComponent,
    DashboardComponent,
    NavbarComponent,
    HeaderComponent,  
    
  ],
  exports: [
    //DashboardComponent
  ],
})
export class BaseModule { }
