import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms"

import { AppComponent } from './app.component';
import { RecetasComponent } from './recetas/recetas.component';
import { ListadoRecetaComponent } from './listado-receta/listado-receta.component';
import { FormularioRecetaComponent } from './formulario-receta/formulario-receta.component';
import { SubirArchivosDirective } from './compartido/subir-archivos.directive';
import { ImagenComponent } from './imagen/imagen.component';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EdicionComponent } from './edicion/edicion.component';

const rutas: Route[] = [
  { path: "", component: LoginComponent },
  { path: "listado", component: ListadoRecetaComponent },
  { path: "formulario", component: FormularioRecetaComponent },
  { path: "edicion/:id", component: EdicionComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    RecetasComponent,
    ListadoRecetaComponent,
    FormularioRecetaComponent,
    SubirArchivosDirective,
    ImagenComponent,
    LoginComponent,
    EdicionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
