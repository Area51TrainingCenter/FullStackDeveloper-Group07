import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit {
  activo: boolean = false
  //alumnos: Array<string> = []
  alumnos: string[] = ["Tania", "Jorge", "Manuel"]
  textoIngresado: string = ""

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.activo = !this.activo
    }, 3000)
  }

  activar() {
    this.activo = !this.activo
  }

  valorIngresado(evento) {
    const valor = (<HTMLInputElement>evento.target).value
    this.textoIngresado = valor
    //console.log(evento.target.value)
    //evento.target
  }

  agregarAlumno() {
    if (this.textoIngresado.trim() != "") {
      this.alumnos.push(this.textoIngresado)
      this.textoIngresado = ""
    }
  }

}
