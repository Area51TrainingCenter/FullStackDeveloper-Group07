import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
	providedIn: 'root'
})
export class AutorizacionGuard implements CanActivate {

	constructor(private autenticacionService: AutenticacionService) { }

	permisosAutorizados(...permisos): boolean {
		const rol = this.autenticacionService.datoUsuario("rol")
		const encontrado = permisos.indexOf(rol)
		return encontrado == -1 ? false : true
	}

	canActivate(): boolean {
		return this.permisosAutorizados("admin", "editor");
	}
}
