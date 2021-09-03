import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: 'full' },
  { path: "about", component: AboutComponent, pathMatch: 'full' },
  { path: "faq", component: FaqComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
