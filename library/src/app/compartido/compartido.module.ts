import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnaUnoComponent } from './vistas/columna-uno/columna-uno.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [ColumnaUnoComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ColumnaUnoComponent
  ]
})
export class CompartidoModule { }
