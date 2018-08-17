import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {

  recetas: Array<{}> = []
  titulo: string
  descripcion: string
  url: string

  constructor() { }

  ngOnInit() {
  }

  grabar() {
    if (this.titulo && this.titulo.trim() && this.descripcion && this.descripcion.trim()) {
      const receta = { titulo: this.titulo, descripcion: this.descripcion, url: this.url }

      this.recetas.push(receta)

      this.titulo = ""
      this.descripcion = ""
      this.url = ""
    }
  }

  par(indice: number): boolean {
	  return (indice+1) % 2 == 0 ? true : false
  }

}
