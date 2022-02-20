import { Injectable } from '@angular/core';
import { Pelicula } from './pelicula';
import { peliculas } from './mockPeliculas';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class PeliculasService {

  constructor() { }

  obtenerPeliculas(): Observable<Pelicula[]> {
    return of(peliculas);
  }
}
