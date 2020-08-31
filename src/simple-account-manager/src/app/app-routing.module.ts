import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanySingleComponent } from './landing/company-single/company-single.component';
import { HomeComponent } from './landing/home/home.component';
import { PageNotFoundComponent } from './landing/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'company', component: CompanySingleComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
