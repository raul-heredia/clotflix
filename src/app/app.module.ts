import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// COMPONENTS
import { NavbarComponent } from './navbar/navbar.component';
import { SeriesComponent } from './series/series.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SeriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [NavbarComponent]
})
export class AppModule { }
