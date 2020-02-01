import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';


@NgModule({
  declarations: [LoginComponent, RegistroComponent],
  imports: [
    CommonModule,
    AutenticacionRoutingModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    RegistroComponent
  ]
})
export class AutenticacionModule { }
