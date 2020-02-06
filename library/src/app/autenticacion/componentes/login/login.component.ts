import { AutenticacionService } from './../../../servicios/autenticacion.service';
import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
    public authService: AutenticacionService,
    public router: Router) { }

  ngOnInit() {
  }

  onSubmitLogin() {
    this.authService.loginEmail(this.email, this.password)
    .then( (res) => {
      alert('Usuario logado correctamente.',);
      this.router.navigate(['/gestion']);
    }).catch((err) => {
      alert(err.message);
      this.router.navigate(['/login']);
    });
  }

  onClickGoogleLogin() {
   this.authService.loginGoogle()
    .then((res) => {
        this.router.navigate(['/gestion']);
    }).catch( err => console.log(err.message));
  }

}
