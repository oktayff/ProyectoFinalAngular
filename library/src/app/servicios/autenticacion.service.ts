import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(public afAuth: AngularFireAuth, public router: Router) {
  }

  // Método que lanza el popup en el que elegimos nuestra cuenta de Google con la que nos quedemos loguear
  loginGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  // Método que recogiendo las variables email y pass y haciendo uso del método propio de registro
  // de Firebase nos crea un nuevo usuario en la base de datos
  registerUser(email: any, pass: any) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
      .then( userData =>  resolve(userData),
      err => reject (err));
    });
  }

  // Método que recogiendo las variables email y pass y haciendo uso del método propio de login
  // de Firebase permite que nos podamos loguear
  loginEmail(email: any, pass: any) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      .then( userData =>  resolve(userData),
      err => reject (err));
    });
  }

  // Método que comprueba si estamos logueados o no
  getAuth() {
    return this.afAuth.authState.map(auth => auth);
  }

  // Método que nos desloguea y nos redirige al login
  logout() {
    return this.afAuth.auth.signOut()
    .then((res) => {
      this.router.navigate(['/login']);
    });
  }

}
