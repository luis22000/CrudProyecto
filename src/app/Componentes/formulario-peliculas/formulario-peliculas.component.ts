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
  Descripcion: string;
  NombreDirector: string;
  Genero: string;
agregarpelicula(){
  this.peliculaService.AgregarPelicula({
    NombrePelicula: this.NombrePelicula,
    DuracionPelicula: this.Duracion,
    Descripcion: this.Descripcion,
    Director: this.NombreDirector,
    Genero: this.Genero
  })
  
  return false;
}

}
