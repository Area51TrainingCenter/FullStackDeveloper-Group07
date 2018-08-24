import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  estudiantes: IEstudiante[] = [
    { nombre: "Clarisa", curso: "NodeJS" },
    { nombre: "Javier", curso: "Javascript" },
    { nombre: "Alejandro", curso: "Angular" }
  ]

  @ViewChild("nombre") nombreEstudiante: ElementRef
  @ViewChild("curso") cursoEstudiante: ElementRef

  eliminar(estudiante: IEstudiante): void {
    const posicion = this.estudiantes.indexOf(estudiante)
    this.estudiantes.splice(posicion, 1)
  }

  insertar() {
    const nombre = this.nombreEstudiante.nativeElement.value
    const curso = this.cursoEstudiante.nativeElement.value
    //console.log(this.nombreEstudiante)
    this.estudiantes.push({ nombre, curso })
  }
}

interface IEstudiante {
  nombre?: string
  curso?: string
}
