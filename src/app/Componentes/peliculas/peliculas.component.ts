import { Component, OnInit, Input} from '@angular/core';
import{ pelicula } from '../../Modelos/pelicula'
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  @Input() Pelicula: pelicula;
  constructor() { }

  ngOnInit() {
  }

}
