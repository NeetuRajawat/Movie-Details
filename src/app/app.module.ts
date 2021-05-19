import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { MovieEntryComponent } from './components/movie-entry/movie-entry.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { MovieCartComponent } from './components/movie-cart/movie-cart.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { WrongRouteComponent } from './components/wrong-route/wrong-route.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MovieInfoComponent,
    MovieEntryComponent,
    ContactusComponent,
    MovieCartComponent,
    WrongRouteComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
