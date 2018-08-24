import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { IReceta } from '../modelos/receta.model';

@Component({
  selector: 'app-listado-receta',
  templateUrl: './listado-receta.component.html',
  styleUrls: ['./listado-receta.component.css']
})
export class ListadoRecetaComponent implements OnInit {
  @Input() recetas: IReceta[]
  @Output() onEliminandoReceta = new EventEmitter<IReceta>()

  constructor() { }

  ngOnInit() {
  }

  par(indice: number): boolean {
    return (indice + 1) % 2 == 0 ? true : false
  }

  eliminar(receta: IReceta) {
    this.onEliminandoReceta.emit(receta)
  }

}
