import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgxIndexedDBService,IndexDetails  } from 'ngx-indexed-db';
import { MiListaComponent } from '../mi-lista/mi-lista.component';
@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
})

export class SeriesComponent implements OnInit {

  selectFiltroSerie: any = "!"; // la seleccion del filtro, por defecto es como viene ordenado en el array series
  filter = {
    nombreAsc: "nombre",
    nombreDesc: "!nombre",
    valoracionAsc: "valoracion",
    valoracionDesc: "!valoracion",
    plataformaAsc: "plataforma",
    plataformaDesc: "!plataforma",
    directorAsc: "director",
    directorDesc: "!director",
    protagonistaAsc: "protagonista",
    protagonistaDesc: "!protagonista",
  }
  series: any[] =  [
    {
    "nombre": "The Mandalorian",
    "sinopsis": "The Mandalorian tiene lugar «después de la caída del Imperio y antes de la aparición de la Primera Orden», cinco años después de los acontecimientos narrados en Return of the Jedi y sigue a «un pistolero solitario en los confines de la galaxia, lejos de la autoridad de la Nueva República».",
    "valoracion": 8.8,
    "youtube": "https://www.youtube.com/embed/IqZ48OcUHD8",
    "plataforma": "Disney +",
    "director": "Dave Filoni",
    "productora": "Lucasfilm",
    "protagonista": "Pedro Pascal",
    "imagen": "assets/images/series/mandalorian.jpg",
    "modalId": "mandalorian",
    "isFavorite": false
    },
    {
    "nombre": "Peaky Blinders",
    "sinopsis": "Una epopeya familiar de gánsteres ambientada en 1919 en Birmingham, Inglaterra; centrada en una pandilla que cosía cuchillas de afeitar a la visera de sus gorras, y en su feroz jefe Tommy Shelby.",
    "valoracion": 8.8,
    "youtube": "https://www.youtube.com/embed/H282c9q2MUU",
    "plataforma": "Netflix",
    "director": "Steven Knight",
    "productora": "BBC Studios",
    "protagonista": "Cillian Murphy",
    "imagen": "assets/images/series/peakyBlinders.jpg",
    "modalId": "peakyBlinders",
    "isFavorite": false
    },
    {
      "nombre": "Breaking Bad",
      "sinopsis": "Walter White (Bryan Cranston) es un frustrado profesor de química en un instituto, padre de un joven discapacitado y con una mujer (Anna Gunn) embarazada. Además, trabaja en un lavadero de vehículos por las tardes. Cuando le diagnostican un cáncer pulmonar terminal se plantea qué pasará con su familia cuando él muera.",
      "valoracion": 9.4,
      "youtube": "https://www.youtube.com/embed/ceqOTZnhgY8",
      "plataforma": "Netflix",
      "director": "Vince Gilligan",
      "productora": "High Bridge Entertainment",
      "protagonista": "Bryan Cranston",
      "imagen": "assets/images/series/breakingBad.jpg",
      "modalId": "breakingBad",
      "isFavorite": false
      },
      {
      "nombre": "Star Trek: Discovery",
      "sinopsis": "Diez años antes que Kirk, Spock y la Enterprise, el USS Discovery descubre nuevos mundos y formas de vida a medida que un oficial de la Flota estelar aprende a comprender todas las cosas extrañas.",
      "valoracion": 7.1,
      "youtube": "https://www.youtube.com/embed/oWnYtyNKPsA",
      "plataforma": "Paramount +, Pluto TV",
      "director": "Bryan Fuller",
      "productora": "CBS Studios",
      "protagonista": "S. Martin-Green",
      "imagen": "assets/images/series/starTrekDiscovery.jpg",
      "modalId": "starTrekDiscovery",
      "isFavorite": false
      },
      {
      "nombre": "Lucifer",
      "sinopsis": "Lucifer Morningstar ha decidido que está harto de ser un sirviente obediente en el Infierno y decide pasar un tiempo en la Tierra para entender mejor a la humanidad. Se instala en Los Ángeles, la ciudad de los ángeles.",
      "valoracion": 9.2,
      "youtube": "https://www.youtube.com/embed/X4bF_quwNtw",
      "plataforma": "Netflix",
      "director": "Tom Kapinos",
      "productora": "DC Entertainment",
      "protagonista": "Tom Ellis",
      "imagen": "assets/images/series/lucifer.jpg",
      "modalId": "lucifer",
      "isFavorite": false
      },
      {
      "nombre": "Star Wars: The Clone Wars",
      "sinopsis": "Yoda, Mace Windu, Obi-Wan Kenobi, Anakin Skywalker y otros caballeros jedi dirigen el gran ejército de la República contra el ejército droide de los Separatistas.",
      "valoracion": 8.7,
      "youtube": "https://www.youtube.com/embed/ZLW2jkd6E7g",
      "plataforma": "Disney +",
      "director": "Dave Filoni",
      "productora": "Lucasfilm",
      "protagonista": "Anakin Skywalker",
      "imagen": "assets/images/series/cloneWars.jpg",
      "modalId": "cloneWars",
      "isFavorite": false
      },
      {
      "nombre": "Reacher",
      "sinopsis": "Cuando el policía militar retirado Jack Reacher es arrestado por un asesinato que no cometió, se encuentra en medio de una conspiración mortal llena de policías sucios, empresarios turbios y políticos intrigantes.",
      "valoracion": 8.4,
      "youtube": "https://www.youtube.com/embed/RrxtnYSxm0U",
      "plataforma": "Amazon Prime Video",
      "director": "Nick Santora",
      "productora": "Amazon Prime Video",
      "protagonista": "Alan Ritchson",
      "imagen": "assets/images/series/reacher.jpg",
      "modalId": "reacher",
      "isFavorite": false
      },
      {
      "nombre": "Better Call Saul",
      "sinopsis": "Los juicios y tribulaciones del abogado criminal, Jimmy McGill, en la época previa al establecimiento de su cutre despacho de abogados en Albuquerque, Nuevo México.",
      "valoracion": 8.8,
      "youtube": "https://www.youtube.com/embed/Ylv21uNzW4k",
      "plataforma": "Netflix, Movistar +",
      "director": "Vince Gilligan",
      "productora": "High Bridge Productions",
      "protagonista": "Bob Odenkirk",
      "imagen": "assets/images/series/betterCallSaul.jpg",
      "modalId": "betterCallSaul",
      "isFavorite": false
      },
      {
      "nombre": "El libro de Boba Fett",
      "sinopsis": "Boba Fett deja de ser un simple cazarrecompensas para reinventarse en Tatooine junto a Fennec Shand.",
      "valoracion": 7.6,
      "youtube": "https://www.youtube.com/embed/rOJ1cw6mohw",
      "plataforma": "Disney +",
      "director": "Jon Favreau",
      "productora": "Lucasfilm",
      "protagonista": "Temuera Morrison",
      "imagen": "assets/images/series/bobaFett.jpg",
      "modalId": "bobaFett",
      "isFavorite": false
      },
      {
      "nombre": "Star Trek: Picard",
      "sinopsis": "Continuación de Star Trek: la nueva generación (1987), centrada en el Capitán Picard y el siguiente capítulo de su vida.",
      "valoracion": 7.5,
      "youtube": "https://www.youtube.com/embed/JerFQO3idJ0",
      "plataforma": "Amazon Prime Video",
      "director": "Kirsten Beyer",
      "productora": "CBS Studios",
      "protagonista": "Patrick Stewart",
      "imagen": "assets/images/series/starTrekPicard.jpg",
      "modalId": "starTrekPicard",
      "isFavorite": false
      },
      {
      "nombre": "Chicago Fire",
      "sinopsis": "La historia de los bomberos en Chicago, tanto a nivel personal como profesional.",
      "valoracion": 8.0,
      "youtube": "https://www.youtube.com/embed/IIeSDILTE5M",
      "plataforma": "Movistar +",
      "director": "Michael Brandt",
      "productora": "CBS Studios",
      "protagonista": "Taylor Kinney",
      "imagen": "assets/images/series/chicagoFire.jpg",
      "modalId": "chicagoFire",
      "isFavorite": false
      },
      {
      "nombre": "Loki",
      "sinopsis": "El villano Loki retoma su papel de Dios del Engaño tras los acontecimientos de \"Vengadores: Endgame\".",
      "valoracion": 8.3,
      "youtube": "https://www.youtube.com/embed/qeWaLxZa0vc",
      "plataforma": "Disney +",
      "director": "Michael Waldron",
      "productora": "Marvel Studios",
      "protagonista": "Tom Hiddleston",
      "imagen": "assets/images/series/loki.jpg",
      "modalId": "loki",
      "isFavorite": false
      },
      {
      "nombre": "Suits: La Clave Del Éxito",
      "sinopsis": "A la fuga después de que un negocio de drogas saliera mal, Mike Ross, un hombre brillante a pesar de no haber acabado sus estudios, se encuentra trabajando con Harvey Specter, uno de los mejores abogados de la ciudad de Nueva York.",
      "valoracion": 8.4,
      "youtube": "https://www.youtube.com/embed/cUnkjEIW2-o",
      "plataforma": "Netflix",
      "director": "Aaron Korsh",
      "productora": "USA Network",
      "protagonista": "Gabriel Macht",
      "imagen": "assets/images/series/suits.jpg",
      "modalId": "suits",
      "isFavorite": false
      },
      {
      "nombre": "El Juego Del Calamar",
      "sinopsis": "456 participantes desesperados compiten en un misterioso y mortífero concurso de supervivencia compuesto de varias rondas de juegos infantiles. ¿La meta? Ganar 45.600 millones de wones y salir de la miseria.",
      "valoracion": 8.0,
      "youtube": "https://www.youtube.com/embed/oqxAJKy0ii4",
      "plataforma": "Netflix",
      "director": "Hwang Dong-hyuk",
      "productora": "Siren Pictures Inc.",
      "protagonista": "Lee Jung-jae",
      "imagen": "assets/images/series/squidGame.jpg",
      "modalId": "squidGame",
      "isFavorite": false
      }
  ];
  constructor(private dbService: NgxIndexedDBService) {
    this.comprobarFavorito();
  }

  ngOnInit(): void {

  }

  comprobarFavorito():void{
    let favSerie:any;
    this.dbService.getAll('favoritos').subscribe((favorito) => {
      for (favSerie of favorito){
        for (let serie of this.series){
          if(serie.modalId == favSerie.modalId){
            serie.isFavorite = true;
          }
        }
      }
    });
  }

  gestionFavorito(isFavorite:boolean,id:any):void{
    if(isFavorite){
      this.dbService.delete('favoritos', id).subscribe((pelicula) => {
        console.log(`Serie con id: ${id} eliminada de favoritos`);
      });
      for (let serie of this.series){
        if(serie.modalId == id){
          serie.isFavorite = false;
        }
      }
    }else{
      console.log(id)
      for (let serie of this.series){
        if (serie.modalId == id){
          serie.isFavorite == true;
          this.dbService.add('favoritos', {
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
            console.log('Serie: ', key.nombre, 'añadida a favoritos');
          });
        }
      }
    }
    this.comprobarFavorito();
  }

}
