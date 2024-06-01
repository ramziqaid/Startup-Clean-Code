import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { LoginComponent } from './login/login.component';
import { AuthLayoutComponent } from '../containers/auth-layout/auth-layout.component';
import { AuthenticationRoutingModule } from './authentication.routing';
import { FormsModule } from '@angular/forms';
import { DataModule } from 'src/app/data/data.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AuthLayoutComponent,
    LoginComponent 
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthenticationRoutingModule,  
    DataModule,
    SharedModule
  ]
})
export class AuthenticationModule { }
