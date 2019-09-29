import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPeliculasComponent } from './Componentes/lista-peliculas/lista-peliculas.component';
import { PeliculasComponent } from './Componentes/peliculas/peliculas.component';
const routes: Routes = [
{
  path: 'Leer',component: ListaPeliculasComponent,

},
{ path: 'actualizar/:Nombre/:Director/:Genero/:Duracion/:Descripcion', component: PeliculasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
