import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { EdicionCantantesComponent } from "./edicion-cantantes/edicion-cantantes.component";
import { ListadoCantantesComponent } from "./listado-cantantes/listado-cantantes.component";


const rutas: Route[] = [
  {
    path: "cantantes", children: [
      { path: "", component: ListadoCantantesComponent },
      { path: "edicion", component: EdicionCantantesComponent }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(rutas)
  ]
})
export class CantantesRouting { }
