import { Component, OnInit, Input} from '@angular/core';
import{ pelicula } from '../../Modelos/pelicula'  
import {PeliculaService} from '../../Servicios/pelicula.service'
import { ActivatedRoute } from '@angular/router';
import{ FormBuilder , Validators}  from '@angular/forms';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  PeliculasForm: any;
  nombrePattern = "^[A-Za-z0-9 ]{0,20}$";
  GeneroPattern = "^[A-Za-z]{0,12}$"; 
  DuracionPattern = "^[0-9]{0,3}$"; 
  DescripcionPattern = "^[A-Za-z0-9 .,]{0,300}$";
  constructor(private _route : ActivatedRoute,public peliculaService: PeliculaService   , private formBuilder: FormBuilder) { 
      this.PeliculasForm = this.formBuilder.group({
      nombre: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(30),Validators.pattern(this.nombrePattern)]],
      NombreDirectors:  ['', [Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern(this.nombrePattern)]],
      Generos:  ['', [Validators.required,Validators.minLength(5),Validators.maxLength(12),Validators.pattern(this.GeneroPattern)]],
      VDuracion: ['', [Validators.required,Validators.min(30),Validators.max(300),Validators.pattern(this.DuracionPattern)]],
      VDescripcion:  ['', [Validators.required,Validators.minLength(5),Validators.maxLength(300),Validators.pattern(this.DescripcionPattern)]],
      
    });
  }
  
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
    if(this.PeliculasForm.valid)
  {
    var NombrePelicula = this._route.snapshot.paramMap.get("Nombre");
    var NombreDirector =  this._route.snapshot.paramMap.get("Director");
    var Genero =  this._route.snapshot.paramMap.get("Genero");
    var Duracion =  Number(this._route.snapshot.paramMap.get("Duracion"));
    var Descripcion =  this._route.snapshot.paramMap.get("Descripcion");
    this.peliculaService.EditarPelicula2({NombrePelicula,Duracion,Descripcion,NombreDirector,Genero});
    
  }
  else
  { 
    alert("Los datos en los campos no son validos porfavor revisar")
  }
  }
  get nombre() {
    return this.PeliculasForm.get('nombre');
  }
  get NombreDirectors() {
    return this.PeliculasForm.get('NombreDirectors');
  }
  get Generos() {
    return this.PeliculasForm.get('Generos');
  }
  get VDuracion() {
    return this.PeliculasForm.get('VDuracion');
  }
  get VDescripcion() {
    return this.PeliculasForm.get('VDescripcion');
  }

}
