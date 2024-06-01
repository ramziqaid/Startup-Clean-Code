import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  
import { AdminLayoutComponent } from './presentation/containers/admin-layout/admin-layout.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { Page404Component } from './presentation/pages/page404/page404.component';


 const rootRouterConfig: Routes = [ 
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, 
  {
    path: 'login',
    loadChildren: () =>import('./presentation/authentication/authentication.module').then((m) => m.AuthenticationModule), 
  }, 
  {
    path: 'home',
    loadChildren: () => import('./presentation/base.module').then(m => m.BaseModule),
    data: { title: 'Choose A Demo' }
  }, 
  {
    path: '**',
    //redirectTo: 'home/pages/404'
    component: Page404Component,
  },
  // {
  //   path: 'login',
  //   loadChildren: () =>import('./presentation/authentication/authentication.module').then((m) => m.AuthenticationModule), 
  // }, 
  // {
  //   path: '',
  //   component: AdminLayoutComponent,
  //   canActivate: [AuthGuard],
  //   canActivateChild: [AuthGuard],
  //   children: [
  //     {
  //       path: 'home',
  //       loadChildren: () => import('./presentation/base.module').then(m => m.BaseModule),
  //       data: { title: 'Choose A Demo' }
  //     },
  //   ]
  // },
  // {
  //   path: '**',
  //   redirectTo: 'home/pages/404'
  // }

];


@NgModule({
  imports: [RouterModule.forRoot(rootRouterConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
