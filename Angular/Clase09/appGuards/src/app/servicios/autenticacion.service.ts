import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AutenticacionService {

	private listaAccesos = [
		{ usuario: "shidalgo", contrasena: "123", rol: "admin" },
		{ usuario: "acustodio", contrasena: "456", rol: "editor" },
		{ usuario: "asantos", contrasena: "789", rol: "operador" }
	]

	private usuarioLogueado

	constructor() { }

	login(usuario: string, contrasena: string) {
		const arr = this.listaAccesos.filter(acceso => (acceso.usuario === usuario && acceso.contrasena === contrasena))

		//if(arr.length==1) this.usuarioLogueado = arr[0]
		this.usuarioLogueado = arr.length == 1 ? arr[0] : undefined

		console.log("usuario logueado", this.usuarioLogueado)
	}

	estaLogueado(): boolean {
		return this.usuarioLogueado ? true : false
	}

	datoUsuario(campo): string {
		if (this.usuarioLogueado) {
			return this.usuarioLogueado[campo]
		} else {
			return ""
		}
	}

	logout() {
		this.usuarioLogueado = undefined

		console.log("Usuario deslogueado")
	}
}
