import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Autor } from '../Interfaces/Autor';

@Injectable({
  providedIn: 'root'
})
export class AutorService {
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/Autor/';

  constructor(private http: HttpClient) { }

  getAutores(): Observable<Autor[]>{
    return this.http.get<Autor[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
}
