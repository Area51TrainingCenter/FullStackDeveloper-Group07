import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-imagen',
	templateUrl: './imagen.component.html',
	styleUrls: ['./imagen.component.css']
})
export class ImagenComponent implements OnInit {
	@Input() archivo: File
	imagen: any

	constructor() { }

	ngOnInit() {
		const lector: FileReader = new FileReader()

		lector.onload = e => {
			this.imagen = e.target["result"]
		}

		lector.readAsDataURL(this.archivo)
	}

}
