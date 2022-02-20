import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
  selector: 'app-mi-lista',
  templateUrl: './mi-lista.component.html',
  styleUrls: ['./mi-lista.component.scss']
})

export class MiListaComponent implements OnInit {
  selectFiltroMiLista: any = "nombre"; // la seleccion del filtro, por defecto es como viene ordenado en el array series
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
  miLista:  any[] = [];
  constructor(private dbService: NgxIndexedDBService){
    this.dbService.getAll('favoritos').subscribe((favorito) => {
      for (let fav of favorito){
        this.miLista.push(fav)
      }
    });
  }
  ngOnInit(): void {
    // Iterar indexeddb y cargar datos en array miLista
  }

}
