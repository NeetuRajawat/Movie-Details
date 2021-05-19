import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MovieCartComponent } from './components/movie-cart/movie-cart.component';
import { MovieEntryComponent } from './components/movie-entry/movie-entry.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { WrongRouteComponent } from './components/wrong-route/wrong-route.component';

const routes: Routes = [
{ path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'movieEntry', component: MovieEntryComponent },
  { path: 'movieInfo', component: MovieInfoComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'cart', component: MovieCartComponent },
  { path: '**', pathMatch   : 'full', component: WrongRouteComponent},
  { path: 'invalid', component: WrongRouteComponent},
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
