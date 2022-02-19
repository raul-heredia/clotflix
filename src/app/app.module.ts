import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
// IndexedDB
import { NgxIndexedDBModule, DBConfig  } from 'ngx-indexed-db';
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


const dbConfig: DBConfig  = {
  name: 'Clotflix',
  version: 1,
  objectStoresMeta: [{
    store: 'favoritos',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'name', keypath: 'name', options: { unique: false } },
      { name: 'email', keypath: 'email', options: { unique: false } }
    ]
  }]
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
