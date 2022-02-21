import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService, IndexDetails } from 'ngx-indexed-db';
import { Pelicula } from './pelicula';
import { peliculas } from './mockPeliculas';
import { PeliculasService } from './peliculas-service';
import {trigger, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss'],
  animations: [
    trigger('fade', [ 
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

export class PeliculasComponent implements OnInit {
  selectFiltroPelicula: any = "!"; // la seleccion del filtro, por defecto es como viene ordenado en el array series
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
  peliculas: Pelicula[] = [];

  constructor(private dbService: NgxIndexedDBService, private peliculasService: PeliculasService) {

  }

  ngOnInit(): void {
    this.comprobarFavorito();
    this.obtenerPeliculas();
    this.guardarSessionStorage();
  }

  obtenerPeliculas(): void {
    this.peliculasService.obtenerPeliculas()
      .subscribe(peliculas => this.peliculas = peliculas);
  }

  comprobarFavorito(): void {
    let favPelicula: any;
    this.dbService.getAll('favoritos').subscribe((favorito) => {
      for (favPelicula of favorito) {
        for (let pelicula of this.peliculas) {
          if (pelicula.modalId == favPelicula.modalId) {
            pelicula.isFavorite = true;
          }
        }
      }
    });
  }

  gestionFavorito(isFavorite: boolean, id: any): void {
    if (isFavorite) {
      // Si es favorito lo borra
      this.dbService.delete('favoritos', id).subscribe((pelicula) => {
        console.log(`Pelicula con id: ${id} eliminada de favoritos`);
      });
      for (let pelicula of this.peliculas) {
        if (pelicula.modalId == id) {
          pelicula.isFavorite = false;
        }
      }
    } else {
      // Si no es favorito lo añade
      console.log(id)
      for (let pelicula of this.peliculas) {
        if (pelicula.modalId == id) {
          pelicula.isFavorite == true;
          this.dbService.add('favoritos', {
            nombreCompleto: pelicula.nombreCompleto,
            nombre: pelicula.nombre,
            sinopsis: pelicula.sinopsis,
            valoracion: pelicula.valoracion,
            youtube: pelicula.youtube,
            plataforma: pelicula.plataforma,
            director: pelicula.director,
            productora: pelicula.productora,
            protagonista: pelicula.protagonista,
            imagen: pelicula.imagen,
            modalId: pelicula.modalId,
          }).subscribe((key) => {
            console.log('Pelicula: ', key.nombreCompleto, 'añadida a favoritos');
          });
        }
      }
    }
    this.comprobarFavorito();
  }
  guardarSessionStorage(){
    for(let pelicula of this.peliculas){
      sessionStorage.setItem(pelicula.modalId,pelicula.nombreCompleto);
    }
  }
}
