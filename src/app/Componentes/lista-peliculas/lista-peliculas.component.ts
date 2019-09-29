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
    public peliculaServicio: PeliculaService
  ) { }

  ngOnInit() {
    this.Pelicula = this.peliculaServicio.ObtenerPeliculas();
    console.log(this.Pelicula);
  }

  Eliminarpelicula(Pelicula : pelicula)
  {
    if(confirm('Esta Seguro de que quiere eliminar esta pelicula?'))
    {
      this.peliculaServicio.EliminarPelicula(Pelicula);

    }
    
  }
  EditarPelicula(Pelicula : pelicula)
  {
    if(confirm('Esta Seguro de que quiere Editar esta pelicula?'))
    {
      this.peliculaServicio.EditarPelicula(Pelicula);
      
    }
    
  }


}
