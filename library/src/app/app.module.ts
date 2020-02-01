import { AutenticacionModule } from './autenticacion/autenticacion.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompartidoModule } from './compartido/compartido.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompartidoModule,
    AutenticacionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
