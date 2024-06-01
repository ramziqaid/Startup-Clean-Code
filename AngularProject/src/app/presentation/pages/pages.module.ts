import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module'; 
import { RegisterComponent } from './register/register.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
//import { AuthLayoutComponent } from '../containers/auth-layout/auth-layout.component';


@NgModule({
  declarations: [
    //AuthLayoutComponent, 
    RegisterComponent,
    Page404Component,
    Page500Component
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,  
  ]
})
export class PagesModule {
}
