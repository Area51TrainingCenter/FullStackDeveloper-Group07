import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecetasService } from '../recetas.service';
import { IReceta } from '../modelos/receta.model';

@Component({
	selector: 'app-edicion',
	templateUrl: './edicion.component.html',
	styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {

	@ViewChild("titulo") titulo: ElementRef
	@ViewChild("descripcion") descripcion: ElementRef

	id: number
	receta: IReceta = {}

	constructor(private rutaActiva: ActivatedRoute, private recetaService: RecetasService, private ruteador: Router) { }

	ngOnInit() {
		this.id = +this.rutaActiva.snapshot.paramMap.get("id")

		this.receta = this.recetaService.detallar(this.id)
	}

	ngAfterViewInit(){
		this.titulo.nativeElement.value = this.receta.titulo
		this.descripcion.nativeElement.value = this.receta.descripcion
	}

	grabar() {
		this.receta.titulo = this.titulo.nativeElement.value
		this.receta.descripcion = this.descripcion.nativeElement.value

		this.recetaService.actualizar(this.id, this.receta)
		this.ruteador.navigate(["/listado"])
	}
}
