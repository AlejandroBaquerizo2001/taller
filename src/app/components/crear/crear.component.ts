import { Component } from '@angular/core';
import { Genero } from '../../Interfaces/Genero';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Autor } from '../../Interfaces/Autor';
import { LibroService } from '../../services/libro.service';
import { GeneroService } from '../../services/genero.service';
import { AutorService } from '../../services/autor.service';
import { Libro } from '../../Interfaces/Libro';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-crear',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
})
export class CrearComponent {
  
  form: FormGroup;
  
  listaGenero!: Genero[];
  listaAutor!: Autor[];


  constructor(private _libroService: LibroService,
    private _generoService: GeneroService,
    private _autorService: AutorService,
    private router: Router,
    private fb: FormBuilder) 
    {

    this.form = this.fb.group({
   
      nombre: ['', Validators.required],
      autor: ['', Validators.required],
      genero: ['', Validators.required],
    })

  }

  ngOnInit(): void {
    this.consultarGeneros();
    this.consultarAutores();
  }


  consultarGeneros(){
    this._generoService.getGeneros().subscribe({
      next: data => {
        console.log(data);
        this.listaGenero = data;
      },
      error: error => {
        alert("Ocurrió un error");
      },
      complete: () => {
        console.info('Obtención de libros completa');
      }
    });

  }

  consultarAutores(){
    this._autorService.getAutores().subscribe({
      next: data => {
        console.log(data);
        this.listaAutor = data;
      },
      error: error => {
        alert("Ocurrió un error");
      },
      complete: () => {
        console.info('Obtención de libros completa');
      }
    });

  }

  agregarLibro(){
    const libro: Libro = {
      nombre: this.form.value.nombre,
      autorId: this.form.value.autor,
      generoId: this.form.value.genero,
      estado: 1
    }

    this._libroService.addLibro(libro).subscribe({
      next: data => {
        console.log(data);
       
      },
      error: error => {
        alert("Ocurrió un error");
      },
      complete: () => {
        console.info('Agregar libro completa');
        alert("Se agrego correctamente");
      }
    });

    this.form.reset();
   // this.router.navigate(['/listado'])
  



  }

}
