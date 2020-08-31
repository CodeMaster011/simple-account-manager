import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxElectronModule } from 'ngx-electron';
import { CompanySingleComponent } from './landing/company-single/company-single.component';
import { HomeComponent } from './landing/home/home.component';
import { PageNotFoundComponent } from './landing/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanySingleComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxElectronModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
