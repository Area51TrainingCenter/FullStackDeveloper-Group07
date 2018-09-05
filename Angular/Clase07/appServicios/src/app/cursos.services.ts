import { Log, Estado } from "./log.services";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CursosServices {
  cursos: string[] = []

  constructor(private log: Log) { }

  listar() {
    return Object.assign([], this.cursos)
  }

  insertar(curso: string) {
    this.log.registrarEvento("Curso insertado", Estado.BIEN)
    this.cursos.push(curso)
  }
}
