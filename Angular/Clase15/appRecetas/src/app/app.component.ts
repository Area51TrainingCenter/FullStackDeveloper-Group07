import { Component } from '@angular/core';
import { AutenticacionService } from './autenticacion.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	logueado: boolean = false

	constructor(private autenticacionService: AutenticacionService) { }

	ngOnInit() {
		this.autenticacionService.onCambioEstado.subscribe(
			(estado: boolean) => this.logueado = estado
		)
		//this.logueado = this.autenticacionService.estaLogueado()
	}

	logout(e) {
		e.preventDefault()
		this.autenticacionService.logout()
	}
}
