import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { EdicionComponent } from './edicion/edicion.component';
import { ListadoComponent } from './listado/listado.component';
import { LoginComponent } from './login/login.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { AutenticacionGuard } from './servicios/autenticacion.guard';
import { RolesGuard } from './servicios/roles.guard';

const rutas: Route[] = [
	{ path: "", component: LoginComponent },
	{
		path: "productos", canActivate: [AutenticacionGuard], children: [
			{ path: "", component: ListadoComponent },
			{ path: "nuevo", component: NuevoComponent },
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
		RouterModule.forRoot(rutas)
	],
	providers: [AutenticacionGuard],
	bootstrap: [AppComponent]
})
export class AppModule { }
