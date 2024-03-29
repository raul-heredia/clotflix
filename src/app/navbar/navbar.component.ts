import { Component, OnInit } from '@angular/core';
import { trigger,  state, style, animate, transition} from '@angular/animations';
// Series
import { Serie } from '../series/serie';
import { series } from '../series/mockSeries';
import { SeriesService } from '../series/series-service';
// Peliculas
import { Pelicula } from '../peliculas/pelicula';
import { peliculas } from '../peliculas/mockPeliculas';
import { PeliculasService } from '../peliculas/peliculas-service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('fade-top', [ 
       transition('void => *', [
        style({ opacity:0,transform: 'translateY(-100%)' }),
        animate(1000)
      ]) 
    ]),
  ]
  
})
export class NavbarComponent implements OnInit {
  contenido: any[] = [];
  constructor(private peliculasService: PeliculasService, private seriesService: SeriesService) { }
  textoFiltrar: string = "";
  ngOnInit(): void {
    this.obtenerPeliculas();
    this.obtenerSeries();
  }
  obtenerPeliculas(): void {
    this.peliculasService.obtenerPeliculas()
      .subscribe(peliculas => {
        for (let pelicula of peliculas) {
          this.contenido.push(pelicula)
        }
      });
  }
  obtenerSeries(): void {
    this.seriesService.obtenerSeries()
      .subscribe(series => {
        for (let serie of series) {
          this.contenido.push(serie)
        }
      });
  }

  updateFilter(text: string): void {
    this.textoFiltrar = text;
  }
}
