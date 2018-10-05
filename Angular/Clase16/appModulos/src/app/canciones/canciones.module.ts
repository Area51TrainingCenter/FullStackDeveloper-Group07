import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CancionesRouting } from './canciones.routing';
import { EdicionCancionesComponent } from './edicion-canciones/edicion-canciones.component';
import { ListadoCancionesComponent } from './listado-canciones/listado-canciones.component';


@NgModule({
  imports: [
    CommonModule,
    CancionesRouting
  ],
  declarations: [
    ListadoCancionesComponent,
    EdicionCancionesComponent
  ]
})
export class CancionesModule { }
