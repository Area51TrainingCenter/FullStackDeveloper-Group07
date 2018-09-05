import { Component, OnInit } from '@angular/core';
import { IReceta } from '../modelos/receta.model';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {
  recetas: Array<{}> = []

  constructor() { }

  ngOnInit() {
  }

  grabar(receta: IReceta) {
    receta.mostrarDescripcion = false
    this.recetas.push(Object.assign({}, receta))
  }

  eliminar(receta: IReceta) {
    if (confirm("¿Está seguro de querer eliminar?")) {
      const indice = this.recetas.indexOf(receta)
      this.recetas.splice(indice, 1)
    }
  }


}
