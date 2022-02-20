import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
// IndexedDB
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';
// COMPONENTS
import { NavbarComponent } from './navbar/navbar.component';
import { SeriesComponent } from './series/series.component';
import { MainComponent } from './main/main.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { InicioComponent } from './inicio/inicio.component';
import { SafePipe } from './_pipes/safe.pipe';
import { OrdenarPerPipe } from './_pipes/ordenar-per.pipe';
import { FooterComponent } from './footer/footer.component';
import { MiListaComponent } from './mi-lista/mi-lista.component';
import { SearchFilterPipe } from './_pipes/search-filter.pipe';

// Ahead of time compiles requires an exported function for factories
export function migrationFactory() {
  // The animal table was added with version 2 but none of the existing tables or data needed
  // to be modified so a migrator for that version is not included.
  return {
    1: (db: any, transaction: any) => {
      const store = transaction.objectStore('favoritos');
      store.createIndex('id', { keyPath: 'modalId' }, { unique: true });
    },
  };
}


const dbConfig: DBConfig = {
  name: 'Clotflix',
  version: 1,
  objectStoresMeta: [{
    store: 'favoritos',
    storeConfig: { keyPath: 'modalId', autoIncrement: false },
    storeSchema: [
      { name: 'nombre', keypath: 'nombre', options: { unique: false } },
      { name: 'sinopsis', keypath: 'sinopsis', options: { unique: false } },
      { name: 'valoracion', keypath: 'valoracion', options: { unique: false } },
      { name: 'youtube', keypath: 'youtube', options: { unique: false } },
      { name: 'plataforma', keypath: 'plataforma', options: { unique: false } },
      { name: 'director', keypath: 'director', options: { unique: false } },
      { name: 'productora', keypath: 'productora', options: { unique: false } },
      { name: 'protagonista', keypath: 'protagonista', options: { unique: false } },
      { name: 'imagen', keypath: 'imagen', options: { unique: false } },
      { name: 'modalId', keypath: 'modalId', options: { unique: false } },
    ]
  }],
  migrationFactory
};


@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    SeriesComponent,
    MainComponent,
    PeliculasComponent,
    InicioComponent,
    SafePipe,
    OrdenarPerPipe,
    FooterComponent,
    MiListaComponent,
    SearchFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxIndexedDBModule.forRoot(dbConfig)
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
