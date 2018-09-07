import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Route, RouterModule } from "@angular/router"

import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { EdicionComponent } from './edicion/edicion.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { FormularioComponent } from './formulario/formulario.component';
import { LoginComponent } from './login/login.component';

const rutas: Route[] = [
  { path: "", component: LoginComponent },
  {
    path: "producto", component: ListadoComponent, children: [
      //{ path: "", component: ListadoComponent },
      { path: "nuevo", component: NuevoComponent },
      { path: "edicion/:id", component: EdicionComponent }
    ]
  }



  /*{ path: "edicion/:id/todo", component: EdicionComponent },
  { path: "edicion/:id/todo/todo", component: EdicionComponent },
  { path: "formulario", component: FormularioComponent }*/
]

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    EdicionComponent,
    NuevoComponent,
    FormularioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
