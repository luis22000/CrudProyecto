import { Injectable } from '@angular/core';
import { pelicula } from '../Modelos/pelicula'
import { Router } from '@angular/router'; 
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { JsonPipe } from '@angular/common';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})

export class PeliculaService {
  Url: string;
  peliculas: pelicula[];
  constructor(private router:Router,private http: HttpClient) { 
    
    
      this.Url = environment.apiUrl;
    
      
  }
  
ObtenerPeliculas(): Observable<any>{
  
  return this.http.get(this.Url);
  
}
AgregarPelicula(pelicula: pelicula)
{
  
  this.http.post(this.Url,{
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
        
        alert('Registro Agregado Exitosamente');
        this.router.navigate(['/Leer']);
    }
    else {

      alert('No se pudo agregar pelicula debido a que ya existe o hay datos invalidos');
    }
  });
        
       

    
  
  
  
}
EliminarPelicula(pelicula: pelicula)
{

  this.http.delete(this.Url+pelicula.NombrePelicula,{observe: 'response'}).subscribe(data => {
    
    if(data.status === 204)
    {
        
        alert('Registro Registro Eliminado Exitosamente');
        this.router.navigate(['/Leer']);
    }
    else {

      alert('No se pudo eliminar pelicula');
    }
  });
}
EditarPelicula2(pelicula: pelicula)
{
  console.log(pelicula);
  this.http.put(this.Url+pelicula.NombrePelicula,{
    NombrePelicula: pelicula.NombrePelicula,
    NombreDirector: pelicula.NombreDirector,
    Genero: pelicula.Genero,
    Duracion: pelicula.Duracion,
    Descripcion: pelicula.Descripcion,
  },{observe: 'response'}).subscribe(data => {
    if(data.status === 204)
    {
        
        alert('Registro Editado  Exitosamente');
        this.router.navigate(['/Leer']);
    }
    else {

      alert('No se pudo editar pelicula');
    }
  });1
  
}



EditarPelicula(pelicula: pelicula)
{
  this.router.navigate(['/actualizar', pelicula.NombrePelicula,pelicula.NombreDirector,pelicula.Genero,pelicula.Duracion,pelicula.Descripcion]);
}

}
