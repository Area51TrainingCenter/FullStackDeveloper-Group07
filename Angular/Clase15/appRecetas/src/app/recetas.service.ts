import { Injectable } from '@angular/core';
import { IReceta } from './modelos/receta.model';

@Injectable({
	providedIn: 'root'
})
export class RecetasService {
	recetas: Array<IReceta> = []

	constructor() { }

	grabar(receta: IReceta) {
		receta.mostrarDescripcion = false
		this.recetas.push(Object.assign({}, receta))
	}

	eliminar(receta: IReceta) {
		if (confirm("¿Está seguro de querer eliminar?")) {
			const indice = this.recetas.indexOf(receta)
			this.recetas.splice(indice, 1)
		}
	}

	detallar(id: number) {
		return Object.assign({}, this.recetas[id])
	}

	actualizar(id: number, receta: IReceta) {
		console.log("id", id)
		this.recetas[id].titulo = receta.titulo
		this.recetas[id].descripcion = receta.descripcion
		console.log(this.recetas)
	}
}
