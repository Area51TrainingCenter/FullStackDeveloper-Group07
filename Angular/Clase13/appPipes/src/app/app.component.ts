import { Component } from '@angular/core';

export interface INovela {
  titulo: string
  autor: string
  fecha: Date
  descripcion: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fecha = new Date()
  nombre = "Francisco"
  campo = "autor"

  cantidadRegistros: Promise<number> = new Promise((resolve, reject) => {
    setTimeout(
      () => resolve(30), 3000
    )
  })

  novelas: INovela[] = [
    { titulo: "La Ciudad y Los Perros", autor: "Vargas Llosa", fecha: new Date(), descripcion: "Narra las vivencias en el colegio militar Leoncio Prado" },
    { titulo: "Los gallinazos sin plumas", autor: "Ramón Ribeyro", fecha: new Date(), descripcion: "Novela que muestra a la gente buscando en la basura" },
    { titulo: "El Caballero Carmelo", autor: "Abraham Valdelomar", fecha: new Date(), descripcion: "Cuenta la aventura de un gallo viejo llamado Carmelo y su lucha con un gallo joven llamado el Ají Seco" }
  ]

  filtro: string = ""


}
