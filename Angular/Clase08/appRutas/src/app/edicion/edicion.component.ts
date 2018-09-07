import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {

  valorId: number
  valorRol: string
  valorFragmento: string

  constructor(private rutaActiva: ActivatedRoute, private ruteador: Router) { }

  ngOnInit() {
    //this.valorId = +this.rutaActiva.snapshot.paramMap.get("id")

    this.rutaActiva.paramMap.subscribe(
      (parametros: Params) => {
        this.valorId = parametros.params.id
      }
    )

    //this.valorRol = this.rutaActiva.snapshot.queryParamMap.get("rol")
    this.rutaActiva.queryParamMap.subscribe(
      (parametros: Params) => {
        this.valorRol = parametros.params.rol
      }
    )

    //this.valorFragmento = this.rutaActiva.snapshot.fragment
    this.rutaActiva.fragment.subscribe(
      (parametro) => this.valorFragmento = parametro
    )
  }

  irARegistro() {
    this.ruteador.navigate(['edicion', 20], {
      queryParams: { capitulo: "prólogo" },
      fragment: "jesus",
      queryParamsHandling: "merge",
      preserveFragment: false
      //preserveQueryParams: true
    })
  }

  navegacionRelativa() {
    this.ruteador.navigate(["todo"], { relativeTo: this.rutaActiva })
  }

}
