import { Routes } from '@angular/router';
import { NewsComponent } from './features/news/news';

export const routes: Routes = [
  { path: '', component: NewsComponent },
  // aquí podrás ir agregando más rutas (noticias, contacto, etc.)
  { path: '**', redirectTo: '' }
];
