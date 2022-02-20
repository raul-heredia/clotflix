import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pelicula } from './pelicula';
import { peliculas } from './mockPeliculas';


@Injectable({
  providedIn: 'root',
})
export class PeliculasService {

  constructor() { }

  obtenerPeliculas(): Observable<Pelicula[]> {
    return of(peliculas);
  }
}
