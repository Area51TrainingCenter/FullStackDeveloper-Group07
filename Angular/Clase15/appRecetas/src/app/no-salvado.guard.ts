import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { DatosNoSalvados } from './datosNoSalvados';

@Injectable({
	providedIn: 'root'
})
export class NoSalvadoGuard implements CanDeactivate<DatosNoSalvados> {

	canDeactivate(componente: DatosNoSalvados): boolean {
		if (componente.verificar()) {
			if (confirm("¿Quieres guardar los datos?")) {
				return false
			}
		}

		return true
	}
}
