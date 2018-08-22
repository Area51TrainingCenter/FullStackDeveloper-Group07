import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { IReceta } from '../modelos/receta.model';

@Component({
	selector: 'app-formulario-receta',
	templateUrl: './formulario-receta.component.html',
	styleUrls: ['./formulario-receta.component.css']
})
export class FormularioRecetaComponent implements OnInit {

	receta: IReceta = {}

	@Output() onEnviandoReceta = new EventEmitter<IReceta>()

	constructor() { }

	ngOnInit() {
	}

	grabar() {
		if (this.receta.titulo.trim() != "" && this.receta.descripcion.trim() != "" && this.receta.url.trim() != "") {
			this.onEnviandoReceta.emit(this.receta)
			this.receta = {}
		}
	}

}
