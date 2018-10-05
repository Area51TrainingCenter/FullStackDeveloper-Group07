import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { EdicionCancionesComponent } from "./edicion-canciones/edicion-canciones.component";
import { ListadoCancionesComponent } from "./listado-canciones/listado-canciones.component";


const rutas: Route[] = [
  {
    path: "canciones", children: [
      { path: "", component: ListadoCancionesComponent },
      { path: "edicion", component: EdicionCancionesComponent }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(rutas)
  ]
})
export class CancionesRouting { }
