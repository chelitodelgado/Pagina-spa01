import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { DetallesComponent } from './components/detalles/detalles.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: AboutComponent},
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroes/heroe/:id', component: HeroeComponent},
  { path: 'detalles/:busqueda', component: DetallesComponent},
  { path: '**', component: HomeComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
