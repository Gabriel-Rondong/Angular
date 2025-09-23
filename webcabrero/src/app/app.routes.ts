import { Routes } from '@angular/router';
import { Cabrero } from './pages/cabrero/cabrero';
import { Alcalde } from './pages/alcalde/alcalde';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'cabrero', component: Cabrero},
  { path: 'alcalde', component: Alcalde},
  { path: '**', redirectTo: '' }
];
