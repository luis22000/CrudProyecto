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
  NombrePelicula: string ;
  Duracion: number;
  NuevaDescripcion: string;
  NuevoDirector: string;
  Genero: string;
agregarpelicula(){
  this.peliculaService.AgregarPelicula({
    NombrePelicula: this.NombrePelicula,
    DuracionPelicula: this.Duracion,
    Descripcion: this.NuevaDescripcion,
    Director: this.NuevoDirector,
    Genero: this.Genero
  })
  
  return false;
}

}
