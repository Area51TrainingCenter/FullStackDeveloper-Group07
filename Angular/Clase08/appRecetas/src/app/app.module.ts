import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms"

import { AppComponent } from './app.component';
import { RecetasComponent } from './recetas/recetas.component';
import { ListadoRecetaComponent } from './listado-receta/listado-receta.component';
import { FormularioRecetaComponent } from './formulario-receta/formulario-receta.component';
import { SubirArchivosDirective } from './compartido/subir-archivos.directive';
import { ImagenComponent } from './imagen/imagen.component';

@NgModule({
	declarations: [
		AppComponent,
		RecetasComponent,
		ListadoRecetaComponent,
		FormularioRecetaComponent,
		SubirArchivosDirective,
		ImagenComponent
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
