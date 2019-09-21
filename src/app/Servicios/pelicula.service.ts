import { Injectable } from '@angular/core';
import { pelicula } from '../Modelos/pelicula'
@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  peliculas: pelicula[];
  constructor() { 
    this.peliculas = [
      //{NombrePelicula: 'Avengers' , DuracionPelicula: 5, Descripcion: 'La mejor pelicula del año'}
    ];
  }
ObtenerPeliculas(){
  if(localStorage.getItem('Pelicula')=== null)
  {
    return this.peliculas;
  }
  else{
    this.peliculas = JSON.parse(localStorage.getItem('Pelicula'));
    return this.peliculas;
  }
  
}
AgregarPelicula(pelicula: pelicula){
  this.peliculas.push(pelicula)
  let peliculas =[];
  if(localStorage.getItem('Pelicula')=== null)
  {
    peliculas.push(pelicula);
    localStorage.setItem('Pelicula',JSON.stringify(peliculas));
  }
  else{
    peliculas = JSON.parse(localStorage.getItem('Pelicula'));
    peliculas.push(pelicula);
    localStorage.setItem('Pelicula',JSON.stringify(peliculas))
  }
}
}
