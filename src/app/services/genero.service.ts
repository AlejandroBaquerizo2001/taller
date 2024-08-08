import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Genero } from '../Interfaces/Genero';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/Genero/';

  constructor(private http: HttpClient) { }

  getGeneros(): Observable<Genero[]>{
    return this.http.get<Genero[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
}
