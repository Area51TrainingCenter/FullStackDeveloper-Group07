import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";

export interface NoGuardado {
	verificarDatosNoSalvados: () => boolean
}

@Injectable({
	providedIn: "root"
})
export class DatosNoSalvados implements CanDeactivate<NoGuardado> {

	canDeactivate(componente: NoGuardado): boolean {
		if (componente.verificarDatosNoSalvados()) {
			if (confirm("¿Quiere salvar sus datos?")) {
				return false
			} else {
				return true
			}
		}

		return true
	}

}