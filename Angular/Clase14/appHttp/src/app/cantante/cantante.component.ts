import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICantante } from '../cantante.interface';
import { CantanteService } from '../cantante.service';

@Component({
  selector: 'app-cantante',
  templateUrl: './cantante.component.html',
  styleUrls: ['./cantante.component.css']
})
export class CantanteComponent implements OnInit {
  listadoCantantes: ICantante[] = []
  grupoCantante: FormGroup

  constructor(private cantanteService: CantanteService) { }

  ngOnInit() {
    this.grupoCantante = new FormGroup({
      nombre: new FormControl(null, Validators.required)
    })

    this.listar()
  }

  grabar() {
    this.cantanteService.insertar(this.grupoCantante.getRawValue())
      .subscribe(
        data => {
          this.grupoCantante.reset()
          this.listar()
        },
        error => console.log(error)
      )
  }

  listar() {
    this.cantanteService.listar()
      .subscribe(
        (data: any) => this.listadoCantantes = data.resultado
      )
  }

  eliminar(_id: string) {
    if (confirm("¿Está seguro?")) {
      this.cantanteService.eliminar(_id)
        .subscribe(
          data => this.listar(),
          error => console.log(error)
        )
    }
  }
}
