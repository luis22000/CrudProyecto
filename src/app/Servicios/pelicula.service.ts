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
  
  
    
    let peliculas =[];
    if(localStorage.getItem('Pelicula')=== null)
    {
      peliculas.push(pelicula);
      localStorage.setItem('Pelicula',JSON.stringify(peliculas));
      this.router.navigate(['/Leer']);
      alert('Registro Agregado Exitosamente');
    }
    else{
      var Contador = 0;
      for (let i =0; i<this.peliculas.length; i++)
      {
        
        if(pelicula.NombrePelicula == this.peliculas[i].NombrePelicula)
        {
            Contador++;
        }
        
      }
      if(Contador ===0)
      {
        
        peliculas = JSON.parse(localStorage.getItem('Pelicula'));
        peliculas.push(pelicula);
        localStorage.setItem('Pelicula',JSON.stringify(peliculas))
        this.router.navigate(['/Leer']);
        alert('Registro Agregado Exitosamente');
      }
      else{
        alert('Nombre de Pelicula ya existe');
      }
      
      
    }
  
  
  
}
EliminarPelicula(pelicula: pelicula)
{

 for (let i =0; i<this.peliculas.length; i++)
 {
   
   if(pelicula.NombrePelicula == this.peliculas[i].NombrePelicula)
   {
     
     this.peliculas.splice(i,1);
     localStorage.setItem('Pelicula',JSON.stringify(this.peliculas));
   }
 }
}

EditarPelicula(pelicula: pelicula)
{
  this.router.navigate(['/actualizar', pelicula.NombrePelicula,pelicula.Director,pelicula.Genero,pelicula.DuracionPelicula,pelicula.Descripcion]);
}

}
