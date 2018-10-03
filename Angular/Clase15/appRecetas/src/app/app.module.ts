import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AutenticadoGuard } from './autenticado.guard';
import { AutorizacionGuard } from './autorizacion.guard';
import { SubirArchivosDirective } from './compartido/subir-archivos.directive';
import { EdicionComponent } from './edicion/edicion.component';
import { FormularioRecetaComponent } from './formulario-receta/formulario-receta.component';
import { ImagenComponent } from './imagen/imagen.component';
import { ListadoRecetaComponent } from './listado-receta/listado-receta.component';
import { LoginComponent } from './login/login.component';
import { NoSalvadoGuard } from './no-salvado.guard';
import { RecetasComponent } from './recetas/recetas.component';

const rutas: Route[] = [
	{ path: "", component: LoginComponent },
	{
		path: "receta", canActivate: [AutenticadoGuard], children: [
			{ path: "", component: ListadoRecetaComponent },
			{ path: "nuevo", component: FormularioRecetaComponent },
			{ path: "edicion/:id", component: EdicionComponent, canActivate: [AutorizacionGuard], canDeactivate: [NoSalvadoGuard] }
		]
	}

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
