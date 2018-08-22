import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IServidor } from '../modelos/servidor.model';

@Component({
	selector: 'app-formulario',
	templateUrl: './formulario.component.html',
	styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

	@Output() onEnviandoServidor = new EventEmitter<IServidor>()

	//servidor: {nombre: string, area: string} = {nombre: "", area: ""}
	servidor: IServidor = {}

	constructor() { }

	ngOnInit() {
	}

	grabar() {
		if (this.servidor.area.trim() != "" && this.servidor.nombre.trim() != "") {
			this.onEnviandoServidor.emit(this.servidor)
		}
	}

}
