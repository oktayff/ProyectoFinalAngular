import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { LibroComponent } from './componentes/libros/libro/libro.component';

@NgModule({
  declarations: [LibroComponent],
  imports: [
    CommonModule,
    CrudRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LibroComponent
  ]

})
export class CrudModule { }
