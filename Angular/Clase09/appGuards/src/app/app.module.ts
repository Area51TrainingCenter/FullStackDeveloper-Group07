import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { EdicionComponent } from './edicion/edicion.component';
import { ListadoComponent } from './listado/listado.component';
import { LoginComponent } from './login/login.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { AutenticacionGuard } from './servicios/autenticacion.guard';
import { DatosNoSalvados } from './servicios/datosNoSalvados.guard';
import { RolesGuard } from './servicios/roles.guard';

const rutas: Route[] = [
	{ path: "", component: LoginComponent },
	{
		path: "productos", canActivate: [AutenticacionGuard], children: [
			{ path: "", component: ListadoComponent },
			{ path: "nuevo", component: NuevoComponent, canDeactivate: [DatosNoSalvados] },
			{ path: "edicion", component: EdicionComponent, canActivate: [RolesGuard] }
		]
	}
]

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		ListadoComponent,
		NuevoComponent,
		EdicionComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(rutas),
		FormsModule
	],
	providers: [AutenticacionGuard],
	bootstrap: [AppComponent]
})
export class AppModule { }
