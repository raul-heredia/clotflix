import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {
  peliculas: any[] = [
    {
      "nombre": "El Señor de los Anillos: La Comunidad del Anillo",
      "sinopsis": "Un hobbit de la Comarca y ocho compañeros emprenden un viaje para destruir el poderoso Anillo Único y salvar la Tierra Media del Señor Oscuro Sauron.",
      "valoracion": 8.8,
      "youtube": "https://www.youtube.com/embed/3GJp6p_mgPo",
      "plataforma": "Prime Video, Netflix",
      "director": "Peter Jackson",
      "productora": "New Line Cinema",
      "protagonistas": "Elijah Wood, Noel Appleby, Sean Astin",
      "imagen": "assets/images/peliculas/comunidadDelAnillo.jpg",
      "modalId": "señorDeLosAnillos1"
    },
    {
      "nombre": "El Señor de los Anillos: Las Dos Torres",
      "sinopsis": "Mientras Frodo y Sam se acercan a Mordor con la ayuda del astuto Gollum, la comunidad dividida se enfrenta al nuevo aliado de Sauron, Saruman, y a sus hordas de Isengard.",
      "valoracion": 8.7,
      "youtube": "https://www.youtube.com/embed/yZLxtW7qq48",
      "plataforma": "Prime Video, Netflix",
      "director": "Peter Jackson",
      "productora": "New Line Cinema",
      "protagonistas": "Elijah Wood",
      "imagen": "assets/images/peliculas/lasDosTorres.png",
      "modalId": "lasDosTorres"
    },
    {
      "nombre": "El Señor de los Anillos: El Retorno del Rey",
      "sinopsis": "Gandalf y Aragorn lideran el mundo de los hombres contra la armada de Sauron para distraer su atención de Frodo y Sam, quienes se aproximan al Monte del Destino con el Anillo Único.",
      "valoracion": 9.7,
      "youtube": "https://www.youtube.com/embed/h-9RYiqyqjk",
      "plataforma": "Prime Video, Netflix",
      "director": "Peter Jackson",
      "productora": "New Line Cinema",
      "protagonistas": "Viggo Mortensen",
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
      "protagonistas": "Robert Downey Jr",
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
      "protagonistas": "Brad Pitt",
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
      "protagonistas": "Fionn Whitehead",
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
      "protagonistas": "Leonardo DiCaprio",
      "imagen": "assets/images/peliculas/corazonesDeAcero.jpg",
      "modalId": "elRenacido"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
