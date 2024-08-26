import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Fea1RoutesModule } from './fea2.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { Fea1Component } from './fea2.component';
import { Fea1Service } from './fea2.service';
import { UiComponentsComponent } from './component/ui-components/ui-components.component';



@NgModule({
  imports: [
    CommonModule,
    //BrowserModule, 
    Fea1RoutesModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [
    Fea1Component,
    UiComponentsComponent,
  ],
  exports: [
    //DashboardComponent
  ],
  providers: [
    Fea1Service
  ]
})
export class Fea1Module { }
