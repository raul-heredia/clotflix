import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgxIndexedDBService, IndexDetails } from 'ngx-indexed-db';
import { Serie } from './serie';
import { series } from './mockSeries';
import { SeriesService } from './series-service';
import { trigger,  state, style, animate, transition} from '@angular/animations';


@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
  animations: [
    trigger('fade-opacity', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(2000, style({opacity: 1}))
      ])
    ]),
    trigger('arriba', [ 
      transition('void => *', [
        style({ opacity:0,transform: 'translateY(-300%)' }),
        animate(1000)
      ]) 
    ])
  ]
})

export class SeriesComponent implements OnInit {

  selectFiltroSerie: any = "!"; // la seleccion del filtro, por defecto es como viene ordenado en el array series
  filter = {
    nombreAsc: "nombreCompleto",
    nombreDesc: "!nombreCompleto",
    valoracionAsc: "valoracion",
    valoracionDesc: "!valoracion",
    plataformaAsc: "plataforma",
    plataformaDesc: "!plataforma",
    directorAsc: "director",
    directorDesc: "!director",
    protagonistaAsc: "protagonista",
    protagonistaDesc: "!protagonista",
  }
  series: Serie[] = [];
  constructor(private dbService: NgxIndexedDBService, private seriesService: SeriesService) {

  }

  ngOnInit(): void {
    this.obtenerSeries();
    this.comprobarFavorito();
    this.guardarSessionStorage();
  }

  obtenerSeries(): void {
    this.seriesService.obtenerSeries()
      .subscribe(series => this.series = series);
  }

  comprobarFavorito(): void {
    let favSerie: any;
    this.dbService.getAll('favoritos').subscribe((favorito) => {
      for (favSerie of favorito) {
        for (let serie of this.series) {
          if (serie.modalId == favSerie.modalId) {
            serie.isFavorite = true;
          }
        }
      }
    });
  }

  gestionFavorito(isFavorite: boolean, id: any): void {
    if (isFavorite) {
      this.dbService.delete('favoritos', id).subscribe((pelicula) => {
        console.log(`Serie con id: ${id} eliminada de favoritos`);
      });
      for (let serie of this.series) {
        if (serie.modalId == id) {
          serie.isFavorite = false;
        }
      }
    } else {
      console.log(id)
      for (let serie of this.series) {
        if (serie.modalId == id) {
          serie.isFavorite == true;
          this.dbService.add('favoritos', {
            nombreCompleto: serie.nombreCompleto,
            nombre: serie.nombre,
            sinopsis: serie.sinopsis,
            valoracion: serie.valoracion,
            youtube: serie.youtube,
            plataforma: serie.plataforma,
            director: serie.director,
            productora: serie.productora,
            protagonista: serie.protagonista,
            imagen: serie.imagen,
            modalId: serie.modalId,
          }).subscribe((key) => {
            console.log('Serie: ', key.nombreCompleto, 'añadida a favoritos');
          });
        }
      }
    }
    this.comprobarFavorito();
  }
  guardarSessionStorage(){
    for(let serie of this.series){
      sessionStorage.setItem(serie.modalId,serie.nombreCompleto);
    }
  }
}
