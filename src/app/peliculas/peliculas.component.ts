import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {
  selectFiltroPelicula: any = "!"; // la seleccion del filtro, por defecto es como viene ordenado en el array series
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
  peliculas: any[] = [
    {
      "nombre": "La Comunidad del Anillo",
      "sinopsis": "Un hobbit de la Comarca y ocho compañeros emprenden un viaje para destruir el poderoso Anillo Único y salvar la Tierra Media del Señor Oscuro Sauron.",
      "valoracion": 8.8,
      "youtube": "https://www.youtube.com/embed/3GJp6p_mgPo",
      "plataforma": "Prime Video, Netflix",
      "director": "Peter Jackson",
      "productora": "New Line Cinema",
      "protagonista": "Elijah Wood",
      "imagen": "assets/images/peliculas/comunidadDelAnillo.jpg",
      "modalId": "señorDeLosAnillos1"
    },
    {
      "nombre": "Las Dos Torres",
      "sinopsis": "Mientras Frodo y Sam se acercan a Mordor con la ayuda del astuto Gollum, la comunidad dividida se enfrenta al nuevo aliado de Sauron, Saruman, y a sus hordas de Isengard.",
      "valoracion": 8.7,
      "youtube": "https://www.youtube.com/embed/yZLxtW7qq48",
      "plataforma": "Prime Video, Netflix",
      "director": "Peter Jackson",
      "productora": "New Line Cinema",
      "protagonista": "Elijah Wood",
      "imagen": "assets/images/peliculas/lasDosTorres.png",
      "modalId": "lasDosTorres"
    },
    {
      "nombre": "El Retorno del Rey",
      "sinopsis": "Gandalf y Aragorn lideran el mundo de los hombres contra la armada de Sauron para distraer su atención de Frodo y Sam, quienes se aproximan al Monte del Destino con el Anillo Único.",
      "valoracion": 9.7,
      "youtube": "https://www.youtube.com/embed/h-9RYiqyqjk",
      "plataforma": "Prime Video, Netflix",
      "director": "Peter Jackson",
      "productora": "New Line Cinema",
      "protagonista": "Viggo Mortensen",
      "imagen": "assets/images/peliculas/retornoDelRey.jpg",
      "modalId": "elRetornoDelRey"
    },
    {
      "nombre": "Vengadores: Infinity War",
      "sinopsis": "Los Vengadores y sus aliados estarán dispuestos a sacrificarlo todo para derrotar al poderoso Thanos antes de que su devastación y ruina ponga fin al universo.",
      "valoracion": 8.4,
      "youtube": "https://www.youtube.com/embed/D7C2wZDtfRo",
      "plataforma": "Disney+",
      "director": "Anthony Russo",
      "productora": "Marvel Studios",
      "protagonista": "Robert Downey Jr",
      "imagen": "assets/images/peliculas/infinityWar.jpg",
      "modalId": "infinityWar"
    },
    {
      "nombre": "Corazones de acero",
      "sinopsis": "Un comandante de tanques toma decisiones difíciles mientras él y su equipo se abren paso a través de Alemania en abril de 1945.",
      "valoracion": 7.6,
      "youtube": "https://www.youtube.com/embed/D7C2wZDtfRo",
      "plataforma": "Disney+",
      "director": "David Ayer",
      "productora": "Marvel Studios",
      "protagonista": "Brad Pitt",
      "imagen": "assets/images/peliculas/corazonesDeAcero.jpg",
      "modalId": "corazonesDeAcero"
    },
    {
      "nombre": "Dunkerque",
      "sinopsis": "Los soldados aliados de Bélgica, el Imperio Británico y Francia están rodeados por el ejército alemán y son evacuados durante una feroz batalla en la Segunda Guerra Mundial.",
      "valoracion": 7.8,
      "youtube": "https://www.youtube.com/embed/GTB3Ny3Xm6w",
      "plataforma": "Netflix, Movistar +",
      "director": "Christopher Nolan",
      "productora": "	Syncopy Inc",
      "protagonista": "Fionn Whitehead",
      "imagen": "assets/images/peliculas/dunkerque.jpg",
      "modalId": "dunkerque"
    },
    {
      "nombre": "El Renacido",
      "sinopsis": "Un hombre de la frontera que participa en una expedición de comercio de pieles en la década de 1820 lucha por sobrevivir después de ser mutilado por un oso y dado por muerto por los miembros de su propio equipo de caza.",
      "valoracion": 8.0,
      "youtube": "https://www.youtube.com/embed/a8HRA49kaok",
      "plataforma": "Netflix",
      "director": "Alejandro G. Iñárritu",
      "productora": "Regency Enterprises",
      "protagonista": "Leonardo DiCaprio",
      "imagen": "assets/images/peliculas/elRenacido.jpg",
      "modalId": "elRenacido"
    },
    {
      "nombre": "La Amenaza Fantasma",
      "sinopsis": "Dos caballeros jedi escapan de un bloqueo hostil para ir en busca de aliados y conocen a un joven que podría restaurar el equilibrio en la Fuerza. Pero los previamente inactivos sith resurgen para reclamar su antigua gloria.",
      "valoracion": 7.5,
      "youtube": "https://www.youtube.com/embed/n1CUHjrc9Sc",
      "plataforma": "Disney +",
      "director": "George Lucas",
      "productora": "Lucasfilm",
      "protagonista": "Ewan McGregor",
      "imagen": "assets/images/peliculas/starWarsAmenazaFantasma.jpg",
      "modalId": "amenazaFantasma"
    },
    {
      "nombre": "El Ataque De Los Clones",
      "sinopsis": "Tras diez años de su primer encuentro, Anakin Skywalker y Padmé Amidala disfrutan de un romance prohibido, mientras Obi-Wan Kenobi investiga el intento de asesinato de un senador y descubre una armada secreta de clones creada por los jedi.",
      "valoracion": 7.5,
      "youtube": "https://www.youtube.com/embed/DywnxIuPtUs",
      "plataforma": "Disney +",
      "director": "George Lucas",
      "productora": "Lucasfilm",
      "protagonista": "Hayden Christensen",
      "imagen": "assets/images/peliculas/starWarsAtaqueDeLosClones.jpg",
      "modalId": "ataqueDeLosClones"
    },
    {
      "nombre": "La venganza de los sith",
      "sinopsis": "Tras tres años de Guerras Clon, los jedi rescatan a Palpatine del Conde Dooku. Mientras Obi-Wan persigue una nueva amenaza, Anakin actúa como agente doble entre el Consejo Jedi y Palpatine, siendo atraído por un siniestro plan.",
      "valoracion": 9.5,
      "youtube": "https://www.youtube.com/embed/kqkfjBKmWc4",
      "plataforma": "Disney +",
      "director": "George Lucas",
      "productora": "Lucasfilm",
      "protagonista": "Hayden Christensen",
      "imagen": "assets/images/peliculas/starWarsLaVenganzaDeLosSith.jpg",
      "modalId": "laVenganzaDeLosSith"
    },
    {
      "nombre": "Han Solo",
      "sinopsis": "Durante una aventura en el mundo clandestino del crimen, Han Solo conoce a su futuro copiloto Chewbacca y a Lando Calrissian años antes de unirse a la Rebelión.",
      "valoracion": 7.6,
      "youtube": "https://www.youtube.com/embed/jPEYpryMp2s",
      "plataforma": "Disney +",
      "director": "Ron Howard",
      "productora": "Lucasfilm",
      "protagonista": "Alden Ehrenreich",
      "imagen": "assets/images/peliculas/hanSolo.jpg",
      "modalId": "hanSolo"
    },
    {
      "nombre": "Rogue One",
      "sinopsis": "La hija de un científico imperial se une a la Alianza Rebelde en una arriesgada jugada para robar los planos de la Estrella de la Muerte.",
      "valoracion": 8.2,
      "youtube": "https://www.youtube.com/embed/Xcs4OpUJWrM",
      "plataforma": "Disney +",
      "director": "Gareth Edwards",
      "productora": "Lucasfilm",
      "protagonista": "Felicity Jones",
      "imagen": "assets/images/peliculas/rogueOne.jpg",
      "modalId": "rogueOne"
    },
    {
      "nombre": "Una nueva esperanza",
      "sinopsis": "Luke Skywalker une sus fuerzas con un caballero jedi, un piloto fanfarrón, un wookiee y dos droides para salvar a la galaxia de la estación espacial del Imperio, a la vez que intenta rescatar a la princesa Leia del malvado Darth Vader.",
      "valoracion": 8.6,
      "youtube": "https://www.youtube.com/embed/beAH5vea99k",
      "plataforma": "Disney +",
      "director": "George Lucas",
      "productora": "Lucasfilm",
      "protagonista": "Mark Hamill",
      "imagen": "assets/images/peliculas/unaNuevaEsperanza.jpg",
      "modalId": "unaNuevaEsperanza"
    },
    {
      "nombre": "El Imperio contraataca",
      "sinopsis": "Tras ser brutalmente dominados los rebeldes por el Imperio en el planeta helado Hoth, Luke Skywalker comienza su entrenamiento jedi con Yoda, mientras sus amigos son perseguidos por Darth Vader y el cazarrecompensas Boba Fett.",
      "valoracion": 9.7,
      "youtube": "https://www.youtube.com/embed/xr3hPFJAHO4",
      "plataforma": "Disney +",
      "director": "George Lucas",
      "productora": "Lucasfilm",
      "protagonista": "Mark Hamill",
      "imagen": "assets/images/peliculas/elImperioContraataca.jpg",
      "modalId": "elImperioContraataca"
    },
    {
      "nombre": "El retorno del jedi",
      "sinopsis": "Tras rescatar a Han Solo de Jabba el Hutt, los rebeldes se dirigen a Endor para destruir la segunda Estrella de la Muerte. Mientras tanto, Luke intenta ayudar a Darth Vader a volver del lado oscuro sin caer en la trampa del Emperador.",
      "valoracion": 9.3,
      "youtube": "https://www.youtube.com/embed/yhuKapE-Bio",
      "plataforma": "Disney +",
      "director": "George Lucas",
      "productora": "Lucasfilm",
      "protagonista": "Mark Hamill",
      "imagen": "assets/images/peliculas/retornoDelJedi.jpg",
      "modalId": "retornoDelJedi"
    },
    {
      "nombre": "Fast & Furious 5",
      "sinopsis": "Dominic Toretto y su equipo de corredores callejeros planean un atraco masivo para comprar su libertad mientras están en la mira de un poderoso narcotraficante brasileño y un peligroso agente federal.",
      "valoracion": 7.3,
      "youtube": "https://www.youtube.com/embed/vcn2GOuZCKI",
      "plataforma": "Netflix",
      "director": "Justin Lin",
      "productora": "Original Film",
      "protagonista": "Vin Diesel",
      "imagen": "assets/images/peliculas/fastfive.jpg",
      "modalId": "fastfive"
    },
    {
      "nombre": "Fast & Furious 9",
      "sinopsis": "Dom y su equipo se enfrentan a un terrorista internacional que resulta ser el hermano de Dom y Mia, con el que no tienen relación.",
      "valoracion": 5.2,
      "youtube": "https://www.youtube.com/embed/fV7gg929uDU",
      "plataforma": "Netflix",
      "director": "Justin Lin",
      "productora": "Original Film",
      "protagonista": "Vin Diesel",
      "imagen": "assets/images/peliculas/fast9.jpg",
      "modalId": "fastnine"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
