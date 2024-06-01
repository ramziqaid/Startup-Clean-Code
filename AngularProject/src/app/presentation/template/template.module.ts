import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common'; 
import { TemplateListComponent } from './list/template-list.component';
import { CreateTempaletComponent } from './create/create.component';
import { TemplateDetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';
import { DataModule } from 'src/app/data/data.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TemplateRoutesModule } from './template.routing'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    DataModule,
    SharedModule,
    TemplateRoutesModule, 
  ],
  declarations: [
    TemplateListComponent,
    CreateTempaletComponent,
    TemplateDetailsComponent
  ], 
})
export class TemplateModule { }
