import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/authentication/login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const routes: Routes = [
    // { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'index', loadChildren: () => import('./common/public.module').then(m => m.PublicModule) },
    { path: 'service', canActivateChild: [AuthGuard], loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule) },
    // { path: '', redirectTo: 'index', pathMatch: 'full' }, // Default redirect
    { path: '**', redirectTo: '404' } // Fallback route


];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true } /*,{ enableTracing: true }*/)],
    exports: [RouterModule],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }] // Provide HashLocationStrategy

})
export class AppRoutingModule { }
