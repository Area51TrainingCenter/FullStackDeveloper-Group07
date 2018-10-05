import { NgModule } from '@angular/core';
import { PreloadAllModules, Route, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const rutas: Route[] = [
  { path: "", component: LoginComponent },
  { path: "cantantes", loadChildren: "../cantantes/cantantes.module#CantantesModule" },
  { path: "canciones", loadChildren: "../canciones/canciones.module#CancionesModule" }
]

@NgModule({
  imports: [RouterModule.forRoot(rutas, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class NucleoRoutingModule { }
