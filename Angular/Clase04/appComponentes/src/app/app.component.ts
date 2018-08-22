import { Component } from '@angular/core';
import { IServidor } from './modelos/servidor.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	//servidor: IServidor = {}

	servidores: IServidor[] = [{ nombre: "BD", area: "Contabilidad" }, { nombre: "Firewall", area: "Datacenter" }]

	grabar(servidor: IServidor) {
		const nuevoServidor = Object.assign({}, servidor)
		this.servidores.push(nuevoServidor)
		/*if (this.servidor.nombre.trim() != "" && this.servidor.area.trim() != "") {*/
		//this.servidores.push(this.servidor)
		//this.servidor = {}
		//}
	}


}

