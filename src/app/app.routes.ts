import { Routes } from '@angular/router';
import { ListadoComponent } from './components/listado/listado.component';
import { CrearComponent } from './components/crear/crear.component';
import { EditarComponent } from './components/editar/editar.component';
import { VerComponent } from './components/ver/ver.component';

export const routes: Routes = [
    { path: '', redirectTo: 'listado', pathMatch: 'full' },
    { path: 'listado', component: ListadoComponent },
    { path: 'agregarLibro', component: CrearComponent },
    { path: 'editarLibro/:id', component: EditarComponent },
    { path: 'verLibro/:id', component: VerComponent },
    { path: '**', redirectTo: 'listado', pathMatch: 'full' },
];
