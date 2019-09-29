import { Injectable } from '@angular/core';
import { pelicula } from '../Modelos/pelicula'
import { Router } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})

export class PeliculaService {
  peliculas: pelicula[];
  constructor(private router:Router) { 
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
AgregarPelicula(pelicula: pelicula)
{
  if(pelicula.DuracionPelicula > 0  && pelicula.DuracionPelicula < 300 )
  {
    this.peliculas.push(pelicula)
    let peliculas =[];
    if(localStorage.getItem('Pelicula')=== null)
    {
      peliculas.push(pelicula);
      localStorage.setItem('Pelicula',JSON.stringify(peliculas));
      this.router.navigate(['/Leer']);
      alert('Registro Agregado Exitosamente');
    }
    else{
      peliculas = JSON.parse(localStorage.getItem('Pelicula'));
      peliculas.push(pelicula);
      localStorage.setItem('Pelicula',JSON.stringify(peliculas))
      this.router.navigate(['/Leer']);
      alert('Registro Agregado Exitosamente');
      
    }
  }
  else{
    alert('No se puede ingresar una duracion menor a 0 y mayor a 300 minutos');
  }
  
}
EliminarPelicula(pelicula: pelicula)
{
 for (let i =0; i<this.peliculas.length; i++)
 {
   if(pelicula == this.peliculas[i])
   {
     this.peliculas.splice(i,1);
     localStorage.setItem('Pelicula',JSON.stringify(this.peliculas));
   }
 }

}
}
