import { Injectable } from "@angular/core";

export enum Estado {
  BIEN,
  MAL,
  INFORMATIVO
}

@Injectable({
  providedIn: "root"
})
export class Log {
  registrarEvento(mensaje: string, estado: Estado) {
    let estilos

    if (estado == Estado.BIEN) {
      estilos = "color:green; font-weight: bold"
    } else if (estado == Estado.MAL) {
      estilos = "color: red; font-weight: bold"
    } else {
      estilos = "color: yellow; font-weight: bold"
    }

    console.log(`%c ${mensaje}`, estilos)
  }
}
