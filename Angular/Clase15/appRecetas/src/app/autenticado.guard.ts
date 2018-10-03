import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
	providedIn: 'root'
})
export class AutenticadoGuard implements CanActivate {

	constructor(private autenticacionService: AutenticacionService) { }

	canActivate(): boolean {
		return this.autenticacionService.estaLogueado();
	}
}
