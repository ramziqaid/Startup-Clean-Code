import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { LoginComponent } from '../authentication/login/login.component'; 
import { AuthLayoutComponent } from '../containers/auth-layout/auth-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent, 
    children: [
      {
        path: '',
        component: LoginComponent,
        data: {
          title: 'Login Page'
        }
      } 
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {
}
