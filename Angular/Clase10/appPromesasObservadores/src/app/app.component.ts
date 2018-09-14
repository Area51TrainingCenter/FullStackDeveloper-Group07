import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	valores: {}[] = []

	ngOnInit() {
		const promesa = new Promise((resolve, reject) => {
			/*setTimeout(() => {
				resolve([{ usuario: "usu1" }, { usuario: "usu2" }, { usuario: "usu3" }])
			}, 5000)*/

			setTimeout(() => {
				reject({ estado: 409, mensaje: "El usuario no está autorizado" })
			}, 3000)
		})

		/*promesa.then(
			(lista: any) => this.valores = lista,
			(rechazo) => console.log(rechazo)
		)*/

		/*
		promesa.then((lista: any) => this.valores = lista)
		promesa.catch(rechazo => console.log(rechazo))
		*/

		/*promesa
			.then((lista: any) => this.valores = lista)
			.catch(rechazo => console.log(rechazo))*/
	}

	promesasEncadenadas() {

		const promesaVacaciones = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve([{ id: 1 }, { id: 2 }, { id: 3 }])
			}, 3000)
		})

		/*promesaVacaciones
			.then(()=>{}, ()=>{})
			.then(()=>{}, ()=>{})*/

		promesaVacaciones
			.then((info) => {
				console.log("Promesa de Vacaciones Cumplida")

				const promesaDeudas = new Promise((resolve, reject) => {
					setTimeout(() => {
						resolve()
					}, 5000)
				})

				return promesaDeudas
			})
			.then(() => {
				console.log("Promesa de Deudas Cumplida")
			})
			.catch(() => console.log("Alguna de las promesas no se cumplió"))


	}

	promesasSimultaneas() {
		const promesaInasistencias = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({ inasistencias: 30 })
			}, 2000)
		})

		const promesaTardanzas = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({ tardanzas: 50 })
			}, 5000)
		})

		Promise.all([promesaInasistencias, promesaTardanzas])
			.then(respuestas => console.log(respuestas))
			.catch(error => console.log(error))
	}

	promesasCarrera() {
		const promesaA1 = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve("A1")
			}, 3000)
		})

		const promesaA2 = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve("A2")
			}, 2000)
		})

		const promesaA3 = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve("A3")
			}, 6000)
		})

		Promise.race([promesaA1, promesaA2, promesaA3])
			.then(respuesta => console.log(respuesta))
			.catch(error => console.log(error))
	}

	promesa(): Promise<any> {
		const usuarioEstaLogueado: boolean = true
		if (usuarioEstaLogueado) {
			return Promise.resolve("El usuario ya está logueado")
		}

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve("Promesa del API de Autenticación")
			}, 4000)
		})
	}

	promesasCumpleInmediatamente() {
		this.promesa()
			.then(respuesta => console.log(respuesta))
			.catch(error => console.log(error))
	}
}
