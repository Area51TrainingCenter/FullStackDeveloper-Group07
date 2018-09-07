import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { IReceta } from '../modelos/receta.model';
import { RecetasService } from '../recetas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-receta',
  templateUrl: './listado-receta.component.html',
  styleUrls: ['./listado-receta.component.css']
})
export class ListadoRecetaComponent implements OnInit {
  //@Input() recetas: IReceta[]
  //@Output() onEliminandoReceta = new EventEmitter<IReceta>()

  recetas: IReceta[] = []

  constructor(private recetasService: RecetasService, private ruteador: Router) { }

  ngOnInit() {
    this.recetas = this.recetasService.recetas
  }

  par(indice: number): boolean {
    return (indice + 1) % 2 == 0 ? true : false
  }

  eliminar(receta: IReceta) {
    //this.onEliminandoReceta.emit(receta)
    this.recetasService.eliminar(receta)
  }

  editar(id: number) {
    this.ruteador.navigate(["edicion", id])
  }

}
