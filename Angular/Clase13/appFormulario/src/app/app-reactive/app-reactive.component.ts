import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-app-reactive',
  templateUrl: './app-reactive.component.html',
  styleUrls: ['./app-reactive.component.css']
})
export class AppReactiveComponent implements OnInit {

  dominiosValidos: string[] = ["midominio.com", "midominio.com.pe", "midominio.pe"]

  categorias: Array<{}> = [
    { id: 1, nombre: "Ropa para bebés" },
    { id: 2, nombre: "Zapatos para caminadores" },
    { id: 3, nombre: "Sport girls" }
  ]

  valorAcepto: string = "Sí"

  grupo: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    const controles: Array<FormControl> = this.categorias.map(categoria => new FormControl(null)
    )

    /*this.grupo = this.formBuilder.group({
      nombre: [null, Validators.required],
      correo: [null, [Validators.required, Validators.email, this.generadorValidador(this.dominiosValidos)]]
    })*/

    this.grupo = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email, this.generadorValidador(this.dominiosValidos)]),
      contrasena: new FormControl(null, Validators.required),
      confirmar: new FormControl(null, [Validators.required, this.confirmarContrasena]),
      terminos: new FormControl(null, Validators.required),
      categorias: new FormArray(controles)
    })
  }

  confirmarContrasena(control: AbstractControl): { [s: string]: boolean } {

    if (!control || !control.parent) return null

    const contrasena = control.parent.get("contrasena")
    const confirmar = control.parent.get("confirmar")

    if (!contrasena || !confirmar) return null

    if (confirmar.value === "") return null

    if (confirmar.value == contrasena.value) {
      return null
    } else {
      return { confirmarInvalido: true }
    }
  }

  /*
  validarCorreo(control: FormControl): { [s: string]: boolean } {
    if (control.value) {
      const correo: string = control.value
      const partes: string[] = correo.split("@")

      const lista = this.dominiosValidos.filter(item => item == partes[1].toLowerCase())

      if (lista.length > 0) {
        return null
      } else {
        return { correoInvalido: true }
      }
    }

    return null

  }
  */

  generadorValidador(dominios: Array<string>) {
    return (control: FormControl): { [s: string]: boolean } => {
      if (control.value) {
        const correo: string = control.value
        const partes: string[] = correo.split("@")

        const lista = dominios.filter(item => item == partes[1].toLowerCase())

        if (lista.length > 0) {
          return null
        } else {
          return { correoInvalido: true }
        }
      }

      return null
    }
  }

  setearValores() {
    /*this.grupo.setValue({
      nombre: "Sergio",
      correo: "sergiohidalgocaceres@gmail.com",
      contrasena: "1223"
    })*/

    this.grupo.patchValue({
      nombre: "Sergio",
      correo: "sergiohidalgocaceres@gmail.com"
    })
  }

  ingresar() {
    /*const datos: any = {}
    datos.nombre = this.grupo.controls["nombre"].value
    datos.correo = this.grupo.controls["correo"].value
    datos.contrasena = this.grupo.controls["contrasena"].value*/

    //console.log
    console.log(this.grupo)

    const controlesCategorias: any = this.grupo.controls.categorias

    /*const listaCategoriasSeleccionadas = controlesCategorias.map((el, ind) => {
      return el.value ? this.categorias[ind] : null
    }).filter(item => item ? true : false)*/

    const listaCategoriasSeleccionadas = []

    controlesCategorias.controls.forEach((el, ind) => {
      if (el.value) {
        listaCategoriasSeleccionadas.push(this.categorias[ind])
      }
    })

    console.log(listaCategoriasSeleccionadas)


    this.grupo.patchValue({ terminos: this.valorAcepto })

    const datos: any = this.grupo.getRawValue()


    console.log(datos)




    console.log(this.grupo)
  }

  forzarValidacion() {
    console.log("forzar validación")
    this.grupo.controls["confirmar"].updateValueAndValidity()
  }

}
