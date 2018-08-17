import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	mostrarDatos: boolean = false

	//alumnos: Alumno[] = []
	alumnos: IAlumno[] = []
/*
	[
		new Alumno('sergio', 15),
		new Alumno('carmen', 50),
		new Alumno('joaquín', 45)
	]
*/

	nombreAlumno: string = ""
	edadAlumno: number = 0

	agregarAlumno() {
		if (this.nombreAlumno.trim() != "") {
			//const objAlumno = new Alumno(this.nombreAlumno, this.edadAlumno)
			const objAlumno: IAlumno = {nombre: this.nombreAlumno, edad: this.edadAlumno}


			this.alumnos.push(objAlumno)
			this.nombreAlumno = ""
			this.edadAlumno = 0
		}
	}

	colorAleatorio(): string {
		const tonalidadRojo = Math.floor(Math.random() * 255) + 1
		const tonalidadVerde = Math.floor(Math.random() * 255) + 1
		const tonalidadAzul = Math.floor(Math.random() * 255) + 1

		return `rgb(${tonalidadRojo},${tonalidadVerde},${tonalidadAzul})`
	}

	obtenerColor(ind: number): string {
		return (ind + 1) % 2 == 0 ? 'red' : 'yellow'
	}

	decisionAleatoria(): boolean {
		return Math.random() <= .5 ? true : false
	}

	parOImpar(ind): boolean {
		return (ind+1) % 2 == 0 ? true : false
	}

	conOSinSombra(ind): boolean {
		return (ind+1) % 3 == 0 ? true : false
	}
}

class Alumno {
	private nombre: string
	private edad: number

	constructor(nombreAlumno: string, edadAlumno: number){
		this.nombre = nombreAlumno
		this.edad = edadAlumno
	}
}

interface IAlumno {
	nombre: string
	edad?: number
	//horoscopo: (anno: number) => string
}


/*class Zodiaco implements IAlumno {
	nombre: string = "Sergio"

	horoscopo(anno: number): string {
		return 'caballo'
	}
}*/