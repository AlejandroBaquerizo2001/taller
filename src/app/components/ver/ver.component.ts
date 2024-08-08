import { Component } from '@angular/core';
import { LibroService } from '../../services/libro.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-ver',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './ver.component.html',
  styleUrl: './ver.component.css'
})
export class VerComponent {

  id: number;
  autor!: string;
  genero!: string;
  nombreLibro!: string;
  resumen!: string;

  constructor(
    private _libroService: LibroService,
    private router: Router,
    private aRoute: ActivatedRoute) {

    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
    
  }

  ngOnInit(): void {
    this.obtenerLibro();
  }

  obtenerLibro(){
    this._libroService.getLibro(this.id).subscribe({
      next: data => {
        console.log(data);
        this.nombreLibro= data.nombre;
        this.autor= data.autor?.nombre || 'Autor desconocido';
        this.genero= data.genero?.nombre || 'Genero desconocido';;
        this.resumen= data.autor?.resumen || 'Resumen desconocido';;
      },
      error: error => {
        alert("Ocurrió un error");
      },
      complete: () => {
        console.info('Obtención de libros completa');
      }
    });
  }


}
