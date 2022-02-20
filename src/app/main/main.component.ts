import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(private dbService: NgxIndexedDBService){
    this.dbService.bulkAdd('favoritos', [
      {
        nombre: "Peaky Blinders",
        sinopsis: "Una epopeya familiar de gánsteres ambientada en 1919 en Birmingham, Inglaterra; centrada en una pandilla que cosía cuchillas de afeitar a la visera de sus gorras, y en su feroz jefe Tommy Shelby.",
        valoracion: 8.8,
        youtube: "https://www.youtube.com/embed/H282c9q2MUU",
        plataforma: "Netflix",
        director: "Steven Knight",
        productora: "BBC Studios",
        protagonista: "Cillian Murphy",
        imagen: "assets/images/series/peakyBlinders.jpg",
        modalId: "peakyBlinders"
      },
      {
        nombre: "El retorno del jedi",
        sinopsis: "Tras rescatar a Han Solo de Jabba el Hutt, los rebeldes se dirigen a Endor para destruir la segunda Estrella de la Muerte. Mientras tanto, Luke intenta ayudar a Darth Vader a volver del lado oscuro sin caer en la trampa del Emperador.",
        valoracion: 9.3,
        youtube: "https://www.youtube.com/embed/yhuKapE-Bio",
        plataforma: "Disney +",
        director: "George Lucas",
        productora: "Lucasfilm",
        protagonista: "Mark Hamill",
        imagen: "assets/images/peliculas/retornoDelJedi.jpg",
        modalId: "retornoDelJedi"
      }
    ]);
  }

  ngOnInit(): void {

  }

}
