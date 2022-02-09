import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// COMPONENTS
import { NavbarComponent } from './navbar/navbar.component';
import { SeriesComponent } from './series/series.component';
import { MainComponent } from './main/main.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    SeriesComponent,
    MainComponent,
    PeliculasComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
