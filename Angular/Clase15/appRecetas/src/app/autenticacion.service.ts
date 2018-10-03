import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '../../node_modules/@angular/router';
import { Usuario } from './usuario';

@Injectable({
	providedIn: 'root'
})
export class AutenticacionService {

	private listaUsuarios: Usuario[] = [
		{ usuario: "shidalgo", contrasena: "123", rol: "admin" },
		{ usuario: "acustodio", contrasena: "456", rol: "editor" },
		{ usuario: "asantos", contrasena: "789", rol: "operador" }
	]

	private usuarioLogueado: Usuario

	onCambioEstado = new EventEmitter<boolean>()

	constructor(private ruteador: Router) { }

	login(usuario: Usuario) {
		const elemento = this.listaUsuarios.filter(el => el.usuario == usuario.usuario && el.contrasena == usuario.contrasena)

		if (elemento.length == 1) {
			this.usuarioLogueado = elemento[0]
			this.ruteador.navigate(["/receta"])
			this.onCambioEstado.emit(true)
		}
	}

	logout() {
		this.usuarioLogueado = undefined
		this.ruteador.navigate(["/"])
		this.onCambioEstado.emit(false)
	}

	estaLogueado(): boolean {
		return this.usuarioLogueado ? true : false
	}

	datoUsuario(campo) {
		return this.usuarioLogueado[campo]
	}
}
