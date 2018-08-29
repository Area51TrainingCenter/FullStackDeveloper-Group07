import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

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
	}

	@HostListener("dragleave", ["$event"]) fuera($event) {
		$event.preventDefault()
		this.onSaliendo.emit()
	}

	@HostListener("drop", ["$event"]) seleccion($event) {
		$event.preventDefault()
		this.onSeleccion.emit($event.dataTransfer.files)
		this.onSaliendo.emit()
	}

}
