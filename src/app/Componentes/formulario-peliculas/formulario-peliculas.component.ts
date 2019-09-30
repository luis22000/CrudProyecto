import { Component, OnInit } from '@angular/core';
import {PeliculaService} from '../../Servicios/pelicula.service'
import{ FormBuilder , Validators}  from '@angular/forms';

@Component({
  selector: 'app-formulario-peliculas',
  templateUrl: './formulario-peliculas.component.html',
  styleUrls: ['./formulario-peliculas.component.css']
})
export class FormularioPeliculasComponent implements OnInit {
  PeliculasForm: any;
  nombrePattern = "^[A-Za-z0-9 ]{0,20}$";
  GeneroPattern = "^[A-Za-z]{0,12}$"; 
  DuracionPattern = "^[0-9]{0,3}$"; 
  DescripcionPattern = "^[A-Za-z0-9 .,]{0,300}$";
  constructor(public peliculaService: PeliculaService, private formBuilder: FormBuilder) { 

    this.PeliculasForm = this.formBuilder.group({
      nombre: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(30),Validators.pattern(this.nombrePattern)]],
      NombreDirectors:  ['', [Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern(this.nombrePattern)]],
      Generos:  ['', [Validators.required,Validators.minLength(5),Validators.maxLength(12),Validators.pattern(this.GeneroPattern)]],
      VDuracion: ['', [Validators.required,Validators.min(30),Validators.max(300),Validators.pattern(this.DuracionPattern)]],
      VDescripcion:  ['', [Validators.required,Validators.minLength(5),Validators.maxLength(300),Validators.pattern(this.DescripcionPattern)]],
      
    });
  }

  ngOnInit() {
  }
  NombrePelicula: string ;
  Duracion: number;
  Descripcion: string;
  NombreDirector: string;
  Genero: string;
agregarpelicula(){
  if(this.PeliculasForm.valid)
  {
    this.peliculaService.AgregarPelicula({
    NombrePelicula: this.NombrePelicula,
    DuracionPelicula: this.Duracion,
    Descripcion: this.Descripcion,
    Director: this.NombreDirector,
    Genero: this.Genero
  })
  }
  else
  {
    alert("Los datos en los campos no son validos porfavor revisar")
  }
  
  return false;
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
