import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
	providedIn: 'root'
})
export class RolesGuard implements CanActivate {
	constructor(private autenticacionService: AutenticacionService) { }

	permisosAutorizados(...permisos): boolean {
		if (this.autenticacionService.estaLogueado()) {
			const rolUsuario: string = this.autenticacionService.datoUsuario("rol")

			const arr = permisos.filter(permiso => permiso === rolUsuario)

			if (arr.length) {
				return true
			} else {
				return false
			}
		}

		return false
	}

	canActivate(): boolean {
		return this.permisosAutorizados("admin", "editor")
	}
}
