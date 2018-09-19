import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataResolve } from '../data.resolve';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  nombres: string[] = ["sergio", "javier", "pedro", "carmen", "pamela"]

  lista: string[] = []
  roles: string[] = []

  constructor(private rutaActiva: ActivatedRoute, private dataResolve: DataResolve) { }

  ngOnInit() {
    /*const suscripcion = of(this.nombres).pipe(
      delay(5000)
    )

    suscripcion.subscribe(
      data => this.lista = data,
      error => console.log(error)
    )*/

    //this.lista = this.rutaActiva.snapshot.data.listaNombres

    this.lista = this.dataResolve.listaNombres
    this.roles = this.dataResolve.roles

  }

}
