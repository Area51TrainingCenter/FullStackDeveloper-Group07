import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { EdicionCancionesComponent } from './edicion-canciones/edicion-canciones.component';
import { EdicionCantantesComponent } from './edicion-cantantes/edicion-cantantes.component';
import { ListadoCancionesComponent } from './listado-canciones/listado-canciones.component';
import { ListadoCantantesComponent } from './listado-cantantes/listado-cantantes.component';
import { LoginComponent } from './login/login.component';

const rutas: Route[] = [
  { path: "", component: LoginComponent },
  {
    path: "cantantes", children: [
      { path: "", component: ListadoCantantesComponent },
      { path: "edicion", component: EdicionCantantesComponent }
    ]
  },
  {
    path: "canciones", children: [
      { path: "", component: ListadoCancionesComponent },
      { path: "edicion", component: EdicionCancionesComponent }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CabeceraComponent,
    ListadoCantantesComponent,
    EdicionCantantesComponent,
    ListadoCancionesComponent,
    EdicionCancionesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
