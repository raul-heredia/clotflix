import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { trigger,  state, style, animate, transition} from '@angular/animations';


@Component({
  selector: 'app-mi-lista',
  templateUrl: './mi-lista.component.html',
  styleUrls: ['./mi-lista.component.scss'],
  animations: [
    trigger('fade-left', [ 
      transition('void => *', [
        style({ left: -2050, opacity: 0 }), 
        animate(2000, style({left: 0, opacity: 1}))
      ]) 
    ]),
    trigger('fade-top', [ 
      transition('void => *', [
        style({ opacity:0,transform: 'translateY(-300%)' }),
        animate(1000)
      ]) 
    ])
  ]
})

export class MiListaComponent implements OnInit {
  selectFiltroMiLista: any = "!"; // la seleccion del filtro, por defecto es como viene ordenado en el array series
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
  miLista: any[] = [];
  constructor(private dbService: NgxIndexedDBService) {

  }
  ngOnInit(): void {
    this.comprobarListaIDB();
  }

  comprobarListaIDB(): void {
    this.miLista = [];
    this.dbService.getAll('favoritos').subscribe((favorito) => {
      for (let fav of favorito) {
        this.miLista.push(fav)
      }
    });
  }
  eliminarFavorito(id: any): void {
    this.dbService.delete('favoritos', id).subscribe((pelicula) => {
      console.log(`Serie con id: ${id} eliminada de favoritos`);
      this.comprobarListaIDB();
    });
  }
}
