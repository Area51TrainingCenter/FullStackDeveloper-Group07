import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosNoSalvados } from '../datosNoSalvados';
import { IReceta } from '../modelos/receta.model';
import { RecetasService } from '../recetas.service';

@Component({
	selector: 'app-edicion',
	templateUrl: './edicion.component.html',
	styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit, DatosNoSalvados {

	@ViewChild("titulo") titulo: ElementRef
	@ViewChild("descripcion") descripcion: ElementRef

	id: number
	receta: IReceta = {}
	//recetaOriginal: IReceta

	constructor(private rutaActiva: ActivatedRoute, private recetaService: RecetasService, private ruteador: Router) { }

	ngOnInit() {
		this.id = +this.rutaActiva.snapshot.paramMap.get("id")

		this.receta = this.recetaService.detallar(this.id)
		//this.recetaOriginal = Object.assign({}, this.receta)
	}

	ngAfterViewInit() {
		this.titulo.nativeElement.value = this.receta.titulo
		this.descripcion.nativeElement.value = this.receta.descripcion
	}

	grabar() {
		this.receta.titulo = this.titulo.nativeElement.value
		this.receta.descripcion = this.descripcion.nativeElement.value

		this.recetaService.actualizar(this.id, this.receta)
		this.ruteador.navigate(["/receta"])
	}

	verificar(): boolean {
		if (this.receta.titulo != this.titulo.nativeElement.value || this.receta.descripcion != this.descripcion.nativeElement.value) return true

		return false
	}
}
