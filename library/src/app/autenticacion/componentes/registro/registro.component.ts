import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public emailregistro:any = '';
  public passwordregistro:any = '';

  constructor(
    public authService: AutenticacionService,
    public router: Router) { }

  ngOnInit() {

  }

  onSubmitAddUser() {
    this.authService.registerUser(this.emailregistro, this.passwordregistro)
    .then((res) => {
      alert('Usuario creado correctamente.');
      this.router.navigate(['/gestion']);
    }).catch( (err) => {
      alert(err.message);
    });
  }

}
