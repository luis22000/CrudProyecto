import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPeliculasComponent } from './Componentes/lista-peliculas/lista-peliculas.component';

const routes: Routes = [
  {
    path: 'Leer',
  component: ListaPeliculasComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
