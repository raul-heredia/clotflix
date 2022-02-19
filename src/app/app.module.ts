import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
// COMPONENTS
import { NavbarComponent } from './navbar/navbar.component';
import { SeriesComponent } from './series/series.component';
import { MainComponent } from './main/main.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { InicioComponent } from './inicio/inicio.component';
import { SafePipe } from './_pipes/safe.pipe';
import { OrdenarPerPipe } from './_pipes/ordenar-per.pipe';
import { FooterComponent } from './footer/footer.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
