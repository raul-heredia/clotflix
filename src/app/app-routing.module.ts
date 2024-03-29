import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components nostres
import { MainComponent } from './main/main.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SeriesComponent } from './series/series.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { MiListaComponent } from './mi-lista/mi-lista.component';
import { ContactoComponent } from './contacto/contacto.component';
const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'milista', component: MiListaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
