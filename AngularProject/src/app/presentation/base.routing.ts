
import { RouterModule, Routes } from '@angular/router'; 
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';  
import { AdminLayoutComponent } from './containers/admin-layout/admin-layout.component';
import { AuthGuard } from '../shared/guards/auth.guard';
const routes: Routes = [    
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, 
  // {
  //   path: 'login',
  //   loadChildren: () =>import('./authentication/authentication.module').then((m) => m.AuthenticationModule), 
  // }, 
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',    
        redirectTo: 'dashboard',
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
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
        data: { title: 'Choose A Demo' }
      },
      {
        path: 'template',
        loadChildren: () => import('./template/template.module').then(m => m.TemplateModule),
        data: { title: 'Choose A Demo' }
      },
      {
        path: 'setting',
        loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule),
        data: { title: 'Choose A Demo' }
      },
      {
        path: 'pages',
        loadChildren: () =>import('./pages/pages.module').then((m) => m.PagesModule),
      }, 
    ]
  },
  {
    path: '**',
    redirectTo: 'home/pages/404'
  },
      
  ];

 
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BaseRoutesModule { }