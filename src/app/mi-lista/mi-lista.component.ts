import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
  selector: 'app-mi-lista',
  templateUrl: './mi-lista.component.html',
  styleUrls: ['./mi-lista.component.scss']
})
export class MiListaComponent implements OnInit {
  miLista:  any[] = [];
  constructor(private dbService: NgxIndexedDBService){
    this.dbService.getAll('favoritos').subscribe((favorito) => {
      for (let fav of favorito){
        console.log(fav)
        this.miLista.push(fav)
      }
    });
  }
  ngOnInit(): void {
    // Iterar indexeddb y cargar datos en array miLista
  }

}
