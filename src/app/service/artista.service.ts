import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artista } from '../modelo/artista';

@Injectable({
  providedIn: 'root'
})
export class IngredientesService {

  private apiUrl: string = 'http://localhost:8080/artists';

  constructor(private http: HttpClient) { }

  getIngredientes(): Observable<Artista[]> {
    return this.http.get<Artista[]>(this.apiUrl);
  }
}
