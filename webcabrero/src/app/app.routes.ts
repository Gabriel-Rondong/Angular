import { Routes } from '@angular/router';
import { NewsComponent } from './features/news/news';
import { Cabrero } from './pages/cabrero/cabrero';
import { Alcalde } from './pages/alcalde/alcalde';

export const routes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'cabrero', component: Cabrero},
  { path: 'alcalde', component: Alcalde},
  // aquí podrás ir agregando más rutas (noticias, contacto, etc.)
  { path: '**', redirectTo: '' }
];
