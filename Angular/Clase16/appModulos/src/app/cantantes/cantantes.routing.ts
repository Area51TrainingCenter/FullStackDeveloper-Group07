import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { EdicionCantantesComponent } from "./edicion-cantantes/edicion-cantantes.component";
import { ListadoCantantesComponent } from "./listado-cantantes/listado-cantantes.component";


const rutas: Route[] = [
  { path: "", component: ListadoCantantesComponent },
  { path: "edicion", component: EdicionCantantesComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(rutas)
  ]
})
export class CantantesRouting { }
