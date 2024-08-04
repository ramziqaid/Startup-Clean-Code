 

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { TemplateListComponent } from './list/template-list.component';
import { CreateTempaletComponent } from './create/create.component';
import { TemplateDetailsComponent } from './details/details.component';

 
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  },
  {
    path: 'list',
    component: TemplateListComponent,
    data: {
      title: 'Accordion',
    },
  },
  {
    path: 'create',
    component: CreateTempaletComponent,
    data: {
      title: 'Accordion',
    },
  },
  {
    path: 'details',
    component: TemplateDetailsComponent,
    data: {
      title: 'Accordion',
    },
  },  
  {
    path: 'edit/:Id',
    component: TemplateDetailsComponent,
    data: {
      title: 'Accordion',
    },
  },
  
  ];

 
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TemplateRoutesModule { }
 
