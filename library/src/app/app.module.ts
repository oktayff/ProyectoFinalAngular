import { FormsModule } from '@angular/forms';
import { CrudModule } from './crud/crud.module';
import { environment } from './../environments/environment';
import { AutenticacionModule } from './autenticacion/autenticacion.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompartidoModule } from './compartido/compartido.module';

//Animaciones para las notificaciones

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//Firebase

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

//Servicios

import { LibroService } from './servicios/libro.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompartidoModule,
    AutenticacionModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    CrudModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    LibroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
