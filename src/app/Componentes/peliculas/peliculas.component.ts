import { Component, OnInit, Input} from '@angular/core';
import{ pelicula } from '../../Modelos/pelicula'  
import {PeliculaService} from '../../Servicios/pelicula.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  
  constructor(private _route : ActivatedRoute,public peliculaService: PeliculaService   ) { }
  
  Pelicula: pelicula
  NombrePelicula: string ;
  Duracion: number;
  Descripcion: string;
  NombreDirector: string;
  Genero: string;


  ngOnInit() 
  {
    this.NombrePelicula = this._route.snapshot.paramMap.get("Nombre");
    this.NombreDirector =  this._route.snapshot.paramMap.get("Director");
    this.Genero =  this._route.snapshot.paramMap.get("Genero");
    this.Duracion =  Number(this._route.snapshot.paramMap.get("Duracion"));
    this.Descripcion =  this._route.snapshot.paramMap.get("Descripcion");

    
  }
  ActualizarPelicula()
  {
    var NombrePelicula = this._route.snapshot.paramMap.get("Nombre");
    var Director =  this._route.snapshot.paramMap.get("Director");
    var Genero =  this._route.snapshot.paramMap.get("Genero");
    var DuracionPelicula =  Number(this._route.snapshot.paramMap.get("Duracion"));
    var Descripcion =  this._route.snapshot.paramMap.get("Descripcion");
    this.peliculaService.EliminarPelicula({NombrePelicula,DuracionPelicula,Descripcion,Director,Genero});
    this.peliculaService.AgregarPelicula({
      NombrePelicula: this.NombrePelicula,
      DuracionPelicula: this.Duracion,
      Descripcion: this.Descripcion,
      Director: this.NombreDirector,
      Genero: this.Genero
    })
  }

}
