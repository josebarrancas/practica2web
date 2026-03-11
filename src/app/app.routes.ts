import { Routes } from '@angular/router';
// Importamos 'Catalogo' en lugar de 'CatalogoComponent'
import { CatalogoComponent } from './components/catalogo/catalogo'; 

export const routes: Routes = [
  { path: '', component: CatalogoComponent }, // Lo usamos aquí también
  { path: '**', redirectTo: '' }
];