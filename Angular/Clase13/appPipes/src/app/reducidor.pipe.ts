import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "reducidorPipe"
})
export class ReducidorPipe implements PipeTransform {
  transform(valor: any, limite: number, texto: string = "...") {
    const arreglo: Array<string> = valor.split(" ")

    if (arreglo.length >= limite) {
      return arreglo.slice(0, limite).join(" ") + " " + texto
    }

    return valor

    /*if (valor.length >= limite) {
      return `${valor.substr(0, limite)} ${texto}`
    }
    return valor*/
  }
}
