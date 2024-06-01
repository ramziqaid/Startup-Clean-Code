import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalSettingComponent } from './portal-setting/portal-setting.component';

 
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'setting',
      },
      {
        path: 'setting',
        component: PortalSettingComponent,
        data: {
          title: 'Accordion',
        },
      },
    ]
    }
  ];

 
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SettingRoutesModule { }