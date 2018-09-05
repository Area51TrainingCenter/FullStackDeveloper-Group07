import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from "@angular/router"

import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { EdicionComponent } from './edicion/edicion.component';
import { NuevoComponent } from './nuevo/nuevo.component';

const rutas: Route[] = [
  { path: "", component: ListadoComponent },
  { path: "edicion", component: EdicionComponent },
  { path: "nuevo", component: NuevoComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    EdicionComponent,
    NuevoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
