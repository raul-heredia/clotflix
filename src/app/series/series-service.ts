import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Serie } from './serie';
import { series } from './mockSeries';


@Injectable({
  providedIn: 'root',
})
export class SeriesService {

  constructor() { }

  obtenerSeries(): Observable<Serie[]> {
    return of(series);
  }
}
