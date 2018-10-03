import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICantante } from '../cantante.interface';
import { CantanteService } from '../cantante.service';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-cantante',
  templateUrl: './cantante.component.html',
  styleUrls: ['./cantante.component.css']
})
export class CantanteComponent implements OnInit {
  listadoCantantes: ICantante[] = []
  grupoCantante: FormGroup
  grupoCantanteEdicion: FormGroup
  grupoUsuario: FormGroup
  grupoLogin: FormGroup

  registroEditando: any

  constructor(private cantanteService: CantanteService, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.grupoCantante = new FormGroup({
      nombre: new FormControl(null, Validators.required)
    })

    this.grupoCantanteEdicion = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      _id: new FormControl(null)
    })

    this.grupoUsuario = new FormGroup({
      nombreCompleto: new FormControl(null, Validators.required),
      usuario: new FormControl(null, Validators.required),
      contrasena: new FormControl(null, Validators.required)
    })

    this.grupoLogin = new FormGroup({
      usuario: new FormControl(null, Validators.required),
      contrasena: new FormControl(null, Validators.required)
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

  editar(cantante: any) {
    this.cantanteService.detallar(cantante._id)
      .subscribe(
        data => this.mostrarDatos(data),
        error => console.log(error)
      )
  }

  mostrarDatos(data: any) {
    this.registroEditando = data
    this.grupoCantanteEdicion.patchValue({ nombre: data.nombre, _id: data._id })
  }

  grabarEdicion() {
    if (this.registroEditando) {
      this.cantanteService.modificar(this.grupoCantanteEdicion.getRawValue()._id, this.grupoCantanteEdicion.getRawValue())
        .subscribe(
          () => {
            this.registroEditando = undefined
            this.grupoCantanteEdicion.reset()
            this.listar()
          },
          error => console.log(error)
        )
    }
  }

  grabarUsuario() {
    this.usuarioService.insertar(this.grupoUsuario.getRawValue())
      .subscribe(
        () => {
          this.grupoUsuario.reset()
        },
        error => console.log(error)
      )
  }

  login() {
    this.usuarioService.login(this.grupoLogin.getRawValue())
      .subscribe(
        data => {
          const datosToken = data.resultado
          localStorage.setItem("datos", JSON.stringify(datosToken))
        },
        error => console.log(error)
      )
  }

  listarUsuarios() {
    this.usuarioService.listar()
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      )
  }

}
