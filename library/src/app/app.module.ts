import { RegistroComponent } from './autenticacion/componentes/registro/registro.component';
import { LoginComponent } from './autenticacion/componentes/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrudModule } from './crud/crud.module';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompartidoModule } from './compartido/compartido.module';

// Animaciones para las notificaciones

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// Firebase

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Servicios

import { LibroService } from './servicios/libro.service';
import { AuthGuard } from './servicios/guard.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    CompartidoModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    CrudModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AngularFireAuthModule

  ],
  providers: [
    AuthGuard,
    LibroService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
