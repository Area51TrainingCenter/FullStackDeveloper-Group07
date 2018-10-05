import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CantantesRouting } from './cantantes.routing';
import { EdicionCantantesComponent } from './edicion-cantantes/edicion-cantantes.component';
import { ListadoCantantesComponent } from './listado-cantantes/listado-cantantes.component';


@NgModule({
  imports: [
    CommonModule,
    CantantesRouting
  ],
  declarations: [
    ListadoCantantesComponent,
    EdicionCantantesComponent
  ]
})
export class CantantesModule { }
