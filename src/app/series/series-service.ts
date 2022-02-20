import { Injectable } from '@angular/core';
import { Serie } from './serie';
import { series } from './mockSeries';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class SeriesService {

  constructor() { }

  obtenerSeries(): Observable<Serie[]> {
    return of(series);
  }
}
