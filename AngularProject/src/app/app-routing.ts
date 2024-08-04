import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/authentication/login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
    // { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'index', canActivateChild: [AuthGuard], loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule) },


];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true } /*,{ enableTracing: true }*/)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
