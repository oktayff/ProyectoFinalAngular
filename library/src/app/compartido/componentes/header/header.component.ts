import { AutenticacionService } from './../../../servicios/autenticacion.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // Variable en la que guardaremos nuestro estado de logueo
  public isLogin: boolean;

  constructor(public authService: AutenticacionService, private toastr: ToastrService) { }

  ngOnInit() {

    // Nos suscribimos al método getAuth que cuando estamos logueados hace que la variable isLogin sea
    // true y en caso de que no estemos logueados sea false
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });
  }

  // Método que sirve para cerrar la sesión
  onClickLogout() {
    this.authService.logout();
    this.toastr.info('Se ha cerrado la sesión');
  }
}
