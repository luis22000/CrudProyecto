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
agregarpelicula(NuevaPelicula: HTMLInputElement,Duracion: HTMLInputElement ,Descripcion: HTMLInputElement){

  console.log("Agregando....", NuevaPelicula.value,Duracion.value,Descripcion.value)
  this.peliculaService.AgregarPelicula({
    NombrePelicula: NuevaPelicula.value,
    DuracionPelicula: Duracion.valueAsNumber,
    Descripcion: Descripcion.value
  })
  
  return false;
}

}
