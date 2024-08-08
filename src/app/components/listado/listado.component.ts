import { Component, OnInit } from '@angular/core';
import { Libro } from '../../Interfaces/Libro';
import { HttpClientModule } from '@angular/common/http';
import { LibroService } from '../../services/libro.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [  HttpClientModule, RouterModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  id!:number;
  listadoLibros: Libro[]=[] ;
  constructor( private _libroService: LibroService) { }

  ngOnInit(): void {
    this.obtenerLibros();
  }

  obtenerLibros(): void {
    this._libroService.getLibros().subscribe({
      next: data => {
        console.log(data);
        this.listadoLibros = data;
      },
      error: error => {
        alert("Ocurrió un error");
      },
      complete: () => {
        console.info('Obtención de libros completa');
      }
    });
  }
 


  eliminarLibro(id?: number ){

    if (id === undefined) {
      alert('El ID del libro es indefinido');
      return;
    }

    this._libroService.eliminarLibro(id).subscribe({
      next: data => {
        console.log('Libro eliminado:', data);
        this.obtenerLibros();
      },
      error: error => {
        alert("Ocurrió un error");
      },
      complete: () => {
        console.info('Eliminacion de libro completa');
        
      }
    });
  
    

  }

  obtenerLibrosAnt(){
    
    this._libroService.getLibros().subscribe(
      data => {
      console.log(data);
      
      this.listadoLibros = data;
    }, error => {
      
      alert("Ocurrio un error");

    })
    
  }
    
}
