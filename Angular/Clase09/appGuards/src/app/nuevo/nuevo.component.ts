import { Component, OnInit } from '@angular/core';
import { NoGuardado } from '../servicios/datosNoSalvados.guard';


@Component({
	selector: 'app-nuevo',
	templateUrl: './nuevo.component.html',
	styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit, NoGuardado {

	dataInicial = { nombreProducto: "Jabón", cantidad: 20 }
	dataModificada

	constructor() { }

	ngOnInit() {
		this.dataModificada = Object.assign({}, this.dataInicial)
	}

	verificarDatosNoSalvados(): boolean {
		let estado: boolean = true

		for (let propiedad in this.dataInicial) {
			if (this.dataInicial[propiedad] != this.dataModificada[propiedad]) {
				estado = false
			}
		}

		return !estado
	}

}
