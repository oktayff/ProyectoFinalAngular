import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './autenticacion/componentes/login/login.component';
import { RegistroComponent } from './autenticacion/componentes/registro/registro.component';
import { LibroComponent } from './crud/componentes/libros/libro/libro.component';
import { AuthGuard } from './servicios/guard.service';

// Definimos las rutas de nuestra aplicación
const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'gestion', component: LibroComponent, canActivate: [AuthGuard] } // La ruta 'gestion' está protegida
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
