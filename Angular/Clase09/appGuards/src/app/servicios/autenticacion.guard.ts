import { Injectable } from "@angular/core";
import { CanActivate, CanActivateChild } from "@angular/router";
import { AutenticacionService } from "./autenticacion.service";

@Injectable()
export class AutenticacionGuard implements CanActivate, CanActivateChild {

	constructor(private autenticacionService: AutenticacionService) { }

	canActivate(): boolean {
		return this.autenticacionService.estaLogueado()
	}

	canActivateChild(): boolean {
		return false
	}
}