import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
	selector: '[appSubirArchivos]'
})
export class SubirArchivosDirective {
	@Output() onHover = new EventEmitter()
	@Output() onSaliendo = new EventEmitter()
	@Output() onSeleccion = new EventEmitter()

	constructor() { }

	@HostListener("dragover", ["$event"]) encima($event) {
		$event.preventDefault()
		this.onHover.emit()
		//console.log("dragover")
	}

	@HostListener("dragleave", ["$event"]) salir($event) {
		$event.preventDefault()
		this.onSaliendo.emit()
		//console.log("dragleave")
	}

	@HostListener("drop", ["$event"]) seleccionar($event) {
		$event.preventDefault()

		const data = $event.dataTransfer
		this.onSeleccion.emit(data.files)
		//this.salir($event)
		this.onSaliendo.emit()
		//console.log($event)
	}

}
