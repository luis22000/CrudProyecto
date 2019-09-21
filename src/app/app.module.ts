import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegadorComponent } from './Componentes/navegador/navegador.component';
import { FormularioPeliculasComponent } from './Componentes/formulario-peliculas/formulario-peliculas.component';
import { PeliculasComponent } from './Componentes/peliculas/peliculas.component';
import { ListaPeliculasComponent } from './Componentes/lista-peliculas/lista-peliculas.component';
import { PeliculaService } from './Servicios/pelicula.service'
@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    FormularioPeliculasComponent,
    PeliculasComponent,
    ListaPeliculasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PeliculaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
