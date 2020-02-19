import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  // Variables que toman el valor de lo que introducimos en nuestro formulario de registro
  public emailregistro: any = '';
  public passwordregistro: any = '';

  constructor(
    public authService: AutenticacionService,
    public router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {

  }

  // Método que recoge las variables de los campos y en caso de que hayamos introducido de forma correcta
  // tanto el email como la contraseña se nos introducirá en la base de datos un nuevo usuario
  // y se nos redirigirá a la parte de gestión
  onSubmitAddUser() {
    this.authService.registerUser(this.emailregistro, this.passwordregistro)
    .then((res) => {
      this.toastr.success('Usuario creado correctamente');
      this.router.navigate(['/gestion']);
    }).catch( (err) => {
      this.toastr.error('Ha ocurrido un error inesperado, vuelva a intentarlo');
      this.router.navigate(['/registro']);
    });
  }
}
