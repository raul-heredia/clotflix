import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})

export class SeriesComponent implements OnInit {
  series: any[] =  [
    {
    "nombre": "The Mandalorian",
    "sinopsis": "The Mandalorian tiene lugar «después de la caída del Imperio y antes de la aparición de la Primera Orden», cinco años después de los acontecimientos narrados en Return of the Jedi y sigue a «un pistolero solitario en los confines de la galaxia, lejos de la autoridad de la Nueva República».",
    "valoracion": 8.8,
    "youtube": "<iframe width='560' height='315' src='https://www.youtube.com/embed/IqZ48OcUHD8' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
    "plataforma": "Disney +",
    "director": "Dave Filoni",
    "productora": "Lucasfilm",
    "protagonistas": "Pedro Pascal",
    "imagen": "assets/images/series/mandalorian.jpg",
    "modalId": "mandalorian"
    },
    {
    "nombre": "Peaky Blinders",
    "sinopsis": "Una epopeya familiar de gánsteres ambientada en 1919 en Birmingham, Inglaterra; centrada en una pandilla que cosía cuchillas de afeitar a la visera de sus gorras, y en su feroz jefe Tommy Shelby.",
    "valoracion": 8.8,
    "youtube": "<h1>Hello World</h1>",
    "plataforma": "Netflix",
    "director": "Steven Knight",
    "productora": "BBC Studios",
    "protagonistas": "Cillian Murphy",
    "imagen": "assets/images/series/peaky-blinders.jpg",
    "modalId": "peakyBlinders"
    },
    {
      "nombre": "Breaking Bad",
      "sinopsis": "Walter White (Bryan Cranston) es un frustrado profesor de química en un instituto, padre de un joven discapacitado y con una mujer (Anna Gunn) embarazada. Además, trabaja en un lavadero de vehículos por las tardes. Cuando le diagnostican un cáncer pulmonar terminal se plantea qué pasará con su familia cuando él muera.",
      "valoracion": 9.4,
      "youtube": "<h1>Hello World</h1>",
      "plataforma": "Netflix",
      "director": "Vince Gilligani",
      "productora": "	Vince Gilligan",
      "protagonistas": "Bryan Cranston",
      "imagen": "assets/images/series/breaking-bad.jpg",
      "modalId": "breakingBad"
      },
  ];
  constructor() { }

  ngOnInit(): void {

  }

}
