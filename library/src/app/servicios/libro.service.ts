import { Libro } from './../modelos/libro';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  librosList: AngularFireList<any>;
  selectedLibro: Libro = new Libro();

  constructor(private firebase: AngularFireDatabase) { }

  // Obtenemos todos los Libros que tenemos en nuestra base de datos Firebase
  getLibros() {
    return this.librosList = this.firebase.list('libros');
  }

  // Método para añadir libros
  addLibro(libro: Libro) {
    this.librosList.push({
      titulo: libro.titulo,
      autor: libro.autor,
      genero: libro.genero,
      editorial: libro.editorial,
      numPaginas: libro.numPaginas,
    });
  }

  // Método para modificar libros
  updateLibro(libro: Libro) {
    this.librosList.update(libro.$key, {
      titulo: libro.titulo,
      autor: libro.autor,
      genero: libro.genero,
      editorial: libro.editorial,
      numPaginas: libro.numPaginas,
    });
  }

  // Método para eliminar libros
  deleteLibro($key: string) {
    this.librosList.remove($key);
  }

}
