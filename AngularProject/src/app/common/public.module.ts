import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PublicRoutesModule } from './public.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { PublicComponent } from './public.component';
import { PublicService } from './public.service';



@NgModule({
  imports: [
    CommonModule,
    //BrowserModule, 
    PublicRoutesModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [
    PublicComponent,
  ],
  exports: [
    //DashboardComponent
  ],
  providers: [
    PublicService
  ]
})
export class PublicModule { }
