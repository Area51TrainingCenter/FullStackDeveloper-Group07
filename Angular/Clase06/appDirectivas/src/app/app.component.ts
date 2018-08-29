import { Component } from '@angular/core';

FileList.prototype["forEach"] = function (callback) {
	[].forEach.call(this, callback)
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	listaDistritos: string[] = ["Pueblo Libre", "Magdalena", "Jesús María"]

	aplicarClaseActivo: boolean = false

	imagenSeleccionada

	seleccion(archivos: FileList) {
		let contador = 0
		archivos["forEach"](archivo => {
			if (contador == 0) {
				contador++

				const lector: FileReader = new FileReader()
				lector.onload = (e) => {
					this.imagenSeleccionada = e.target["result"]
					//console.log(e)
				}

				lector.readAsDataURL(archivo)
			}
			//console.log(archivo)
		})
	}
}
