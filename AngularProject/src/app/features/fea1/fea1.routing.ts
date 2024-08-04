
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { Fea1Component } from './fea1.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UiComponentsComponent } from './component/ui-components/ui-components.component';

const routes: Routes = [
  {
    path: '',
    component: Fea1Component,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'ui-components',
        component: UiComponentsComponent,
        data: {
          title: 'Accordion',
        },
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          title: 'Accordion',
        },
      },
      {
        path: 'users',
        loadChildren: () => import('./component/users/users.module').then(m => m.UsersModule),
        data: { title: 'Choose A Demo' }
      },
      {
        path: 'template',
        loadChildren: () => import('./component/template/template.module').then(m => m.TemplateModule),
        data: { title: 'Choose A Demo' }
      },
      {
        path: 'setting',
        loadChildren: () => import('./component/setting/setting.module').then(m => m.SettingModule),
        data: { title: 'Choose A Demo' }
      }
    ]
  },
  // {
  //   path: '**',
  //   redirectTo: 'index/404'
  // },

];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class Fea1RoutesModule { }