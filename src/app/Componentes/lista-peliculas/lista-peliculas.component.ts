import { Component, OnInit } from '@angular/core';
import { PeliculaService} from '../../Servicios/pelicula.service'
import { pelicula } from 'src/app/Modelos/pelicula';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent implements OnInit {
  Pelicula: pelicula[];

  constructor(
    public pelicualServicio: PeliculaService
  ) { }

  ngOnInit() {
    this.Pelicula = this.pelicualServicio.ObtenerPeliculas();
    console.log(this.Pelicula);
  }

}
