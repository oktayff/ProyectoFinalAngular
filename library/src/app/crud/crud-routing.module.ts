import { LibroComponent } from './componentes/libros/libro/libro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../servicios/guard.service';


const routes: Routes = [
   { path: 'gestion', component: LibroComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
