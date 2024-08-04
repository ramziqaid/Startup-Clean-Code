
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FeaturesComponent } from './containers/features.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { Page404Component } from './pages/page404/page404.component';
import { AccessDeniedPageComponent } from './pages/access-denied-page/access-denied-page.component';
import { IndexComponent } from './pages/Index/Index.component';
const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      /*non-fullscreen screens*/
      { path: 'fea1', canActivateChild: [AuthGuard], loadChildren: () => import('./fea1/fea1.module').then(m => m.Fea1Module) },
      //{ path: '', redirectTo: 'index', pathMatch: 'full' },
      { path: '', component: IndexComponent, data: { isDefault: true } },
      // { path: 'error', component: ErrorComponent, data: { isDefault: true } },
      { path: '404', component: Page404Component },
      { path: '401', component: AccessDeniedPageComponent },
      { path: '401', redirectTo: '/401' },
      { path: '**', component: Page404Component },

    ]
  },
  /*fullscreen screens*/
  { path: '404', component: Page404Component },
  { path: '401', component: AccessDeniedPageComponent },


];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FeaturesRoutesModule { }