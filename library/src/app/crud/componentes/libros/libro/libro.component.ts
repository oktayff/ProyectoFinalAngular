import { LibroService } from './../../../../servicios/libro.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Libro } from 'src/app/modelos/libro';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  // Variables asociadas a los campos del formulario para añadir un nuevo libro
  public titulolibro: any = '';
  public autorlibro: any = '';
  public generolibro: any = '';
  public editoriallibro: any = '';
  public numpaginaslibro: any = '';

  libroList: Libro[];

  constructor(public libroService: LibroService, private toastr: ToastrService) { }

  // Asignamos el valor $key a una variable x y lo introducimos dentro del array libroList como si fuese un
  // libro con todos sus atributos. De esta manera evitamos que mientras estamos editando un libro también
  // cambie en la lista de manera que el rendimiento no se verá afectado
  ngOnInit() {
    this.libroService.getLibros().snapshotChanges().subscribe(item => {
      this.libroList = [];
      item.forEach(element => {
          let x = element.payload.toJSON();
          x['$key'] = element.key;
          this.libroList.push(x as Libro);
        });
    });
  }

  // Método que limpia todos los campos del formulario
  resetForm(libroForm?: NgForm) {
    if (libroForm != null) {
      libroForm.reset();
      this.libroService.selectedLibro = new Libro();
    }
  }

  // Método que modifica un libro
  onEdit(libro: Libro) {
    this.libroService.selectedLibro = Object.assign({}, libro);
  }

  // Método que elimina un libro
  onDelete($key: string) {
    // Muestra alert preguntando si estamos seguros (Cancelar no hará nada, Aceptar ejecutará el método)
    if (confirm('¿Estás seguro de que quieres eliminar este libro?')) {
      this.libroService.deleteLibro($key);
      this.toastr.success('Libro eliminado correctamente');
    }
  }

  // Si no obtenemos el valor key del formulario significa que estamos añadiendo un nuevo objeto
  // por lo que se ejecutará el método addLibro() y si está presente el valor key significa que
  // estamos modificando por lo que se ejecuta updateLibro()
  onSubmit(libroForm: NgForm) {
    if (libroForm.value.$key == null) {
      this.libroService.addLibro(libroForm.value);
      this.toastr.success('Libro añadido correctamente');
    } else {
      this.libroService.updateLibro(libroForm.value);
    }
    this.resetForm(libroForm);
  }

}
