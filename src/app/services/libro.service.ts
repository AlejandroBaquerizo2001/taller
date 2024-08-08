import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Libro } from '../Interfaces/Libro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LibroService {
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/Libro/';

  constructor(private http: HttpClient) { }

  getLibros(): Observable<Libro[]>{
    return this.http.get<Libro[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getLibro(id: number): Observable<Libro>{
    return this.http.get<Libro>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  addLibro(libro:Libro): Observable<number>{
    return this.http.post<number>(`${this.myAppUrl}${this.myApiUrl}`,libro);
  }

  eliminarLibro(id: number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  modificarLibro(libro: Libro): Observable<number>{
    return this.http.put<number>(`${this.myAppUrl}${this.myApiUrl}${libro.id}`,libro);
  }
}


