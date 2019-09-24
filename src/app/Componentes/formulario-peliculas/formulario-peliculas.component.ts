import { Component, OnInit } from '@angular/core';
import {PeliculaService} from '../../Servicios/pelicula.service'

@Component({
  selector: 'app-formulario-peliculas',
  templateUrl: './formulario-peliculas.component.html',
  styleUrls: ['./formulario-peliculas.component.css']
})
export class FormularioPeliculasComponent implements OnInit {

  constructor(public peliculaService: PeliculaService) { 
    
  }

  ngOnInit() {
  }
agregarpelicula(NuevaPelicula: HTMLInputElement,Duracion: HTMLInputElement ,Descripcion: HTMLInputElement,Director: HTMLInputElement,Genero: HTMLInputElement){

  console.log("Agregando....", NuevaPelicula.value,Duracion.value,Descripcion.value,Director.value,Genero.value)
  this.peliculaService.AgregarPelicula({
    NombrePelicula: NuevaPelicula.value,
    DuracionPelicula: Duracion.valueAsNumber,
    Descripcion: Descripcion.value,
    Director: Director.value,
    Genero: Genero.value
  })
  
  return false;
}

}
