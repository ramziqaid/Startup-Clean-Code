import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './containers/features.component';
import { SideBarComponent } from './containers/navbar/navbar.component';
import { HeaderComponent } from './containers/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeaturesRoutesModule } from './features.routing';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './pages/register/register.component';
import { Page404Component } from './pages/page404/page404.component';
import { Page500Component } from './pages/page500/page500.component';
import { AccessDeniedPageComponent } from './pages/access-denied-page/access-denied-page.component';
import { FooterComponent } from './containers/footer/footer.component';
import { BodyContentComponent } from './containers/body-content/body-content.component';
import { ContentBarComponent } from './containers/content-bar/content-bar.component';



@NgModule({
  imports: [
    CommonModule,
    //BrowserModule, 
    FeaturesRoutesModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [
    FeaturesComponent,
    FooterComponent,
    HeaderComponent,
    RegisterComponent,
    Page404Component,
    Page500Component,
    SideBarComponent,
    AccessDeniedPageComponent,
    BodyContentComponent,
    ContentBarComponent
  ],
  exports: [
    //DashboardComponent
  ],
})
export class FeaturesModule { }
