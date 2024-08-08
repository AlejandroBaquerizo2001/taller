import { Component } from '@angular/core';
import { LibroService } from '../../services/libro.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Autor } from '../../Interfaces/Autor';
import { Genero } from '../../Interfaces/Genero';
import { GeneroService } from '../../services/genero.service';
import { AutorService } from '../../services/autor.service';
import { Libro } from '../../Interfaces/Libro';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {
  form: FormGroup;
  id: number;
  nombre!: string;
  listaAutor!: Autor[];
  listaGenero!: Genero[];

  constructor(
    private _libroService: LibroService,
    private _generoService: GeneroService,
    private _autorService: AutorService,
    private router: Router,
    private aRoute: ActivatedRoute,
    private fb: FormBuilder) {

    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));

    this.form = this.fb.group({
   
      nombre: ['', Validators.required],
      autor: ['', Validators.required],
      genero: ['', Validators.required],
    })
    
  }

  ngOnInit(): void {
  
    this.consultarAutores();
    this.consultarGeneros();
    this.obtenerLibro();

  }

  obtenerLibro(){
    
    this._libroService.getLibro(this.id).subscribe({
      next: data => {
        console.log(data);

        this.form.patchValue({
        nombre: data.nombre,
        autor: data.autorId,
        genero: data.generoId,
      
        })
      },
      error: error => {
        alert("Ocurrió un error");
      },
      complete: () => {
        console.info('Obtención de libros completa');
      }
    });
  }

  modificarLibro(){

    const libro: Libro = {
      id: this.id,
      nombre: this.form.value.nombre,
      autorId: this.form.value.autor,
      generoId: this.form.value.genero,
      estado: 1
    }
    
    this._libroService.modificarLibro(libro).subscribe({
      next: data => {
        console.log(data);
        
      },
      error: error => {
        alert("Ocurrió un error");
      },
      complete: () => {
        console.info('Modificacion de libro completa');
      }
    });

    this.form.reset();
    
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

  

}
