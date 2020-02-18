import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(

    private router: Router,
    private authService: AutenticacionService

  ) { }
  // Lo que hace canActivate es mirar si el usuario puede acceder a una ruta específica o no, en nuestro caso
  // debe ser imposbile acceder a la parte de gestión de libros sin que el usuario esté logueado por lo que
  // en caso de que no estemos logueados hacemos un navigate al login
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.afAuth.authState
      .take(1)
      .map(authState => !!authState)
      .do(authenticated => {
        if (!authenticated) {
          this.router.navigate(['/login']);
        }
      });
  }
}
