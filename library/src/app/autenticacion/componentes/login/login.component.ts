import { AutenticacionService } from './../../../servicios/autenticacion.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Variables que toman el valor de lo que introducimos en nuestro formulario de login
  public emaillogin: any = '';
  public passwordlogin: any = '';

  constructor(
    public authService: AutenticacionService,
    public router: Router) { }

  ngOnInit() {
  }

  // Método de login al que le pasamos las variables y en caso de que existan en la base de datos de Firebase
  // el login será satisfactorio y nos redirigirá a la pestaña de gestión y en caso contrario nos quedaremos
  // en el propio login
  onSubmitLogin() {
    this.authService.loginEmail(this.emaillogin, this.passwordlogin)
      .then((res) => {
        alert('Usuario logado correctamente.');
        this.router.navigate(['/gestion']);
      }).catch((err) => {
        alert(err.message);
        this.router.navigate(['/login']);
      });
  }

  // Método que lanzará el logueo con nuestra cuenta de Google y que en caso de ser satisfactorio nos
  // redirigirá a la parte del CRUD y caso negativo nos quedaremos en el login
  onClickGoogleLogin() {
    this.authService.loginGoogle()
       .then((res) => {
         this.router.navigate(['/gestion']);
       }).catch(err => {
         alert(err.message);
         this.router.navigate(['/login']);
    });
  }
}
