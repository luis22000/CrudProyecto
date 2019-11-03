import { Injectable } from '@angular/core';
import { pelicula } from '../Modelos/pelicula'
import { Router } from '@angular/router'; 
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { JsonPipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})

export class PeliculaService {
  peliculas: pelicula[];
  constructor(private router:Router,private http: HttpClient) { 
    this.peliculas = [
      //{NombrePelicula: 'Avengers' , DuracionPelicula: 5, Descripcion: 'La mejor pelicula del año'}
    ];
  }
  
ObtenerPeliculas(): Observable<any>{
  return this.http.get('http://localhost:3001/api/v1/pelicula/');
  
}
AgregarPelicula(pelicula: pelicula)
{
  
  this.http.post('http://localhost:3001/api/v1/pelicula/',{
    NombrePelicula: pelicula.NombrePelicula,
    NombreDirector: pelicula.NombreDirector,
    Genero: pelicula.Genero,
    Duracion: pelicula.Duracion,
    Descripcion: pelicula.Descripcion,
  },{observe: 'response'}).subscribe(data => {
    console.log(data);
    console.log(data.status);
    if(data.status === 200)
    {
        this.router.navigate(['/Leer']);
        alert('Registro Agregado Exitosamente');
    }
    else {

      alert('No se pudo agregar pelicula debido a que ya existe o hay datos invalidos');
    }
  });
        
       

    
  
  
  
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
  this.router.navigate(['/actualizar', pelicula.NombrePelicula,pelicula.NombreDirector,pelicula.Genero,pelicula.Duracion,pelicula.Descripcion]);
}

}
