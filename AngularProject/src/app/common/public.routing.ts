
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FeaturesComponent } from '../features/containers/features.component';
import { IndexComponent } from './Index/Index.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent, // Parent component for this route
    children: [
      {
        path: '',
        component: IndexComponent, // Default child component for this route
        data: {
          title: 'Accordion', // Additional data for the route
        },
      },

    ]
  },
  {
    path: '**', // Wildcard route for handling undefined routes
    redirectTo: '', // Redirect to the default route
    pathMatch: 'full' // Ensure full URL match
  }
];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  // providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }] // Provide HashLocationStrategy
})

export class PublicRoutesModule { }