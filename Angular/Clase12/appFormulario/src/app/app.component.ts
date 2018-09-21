import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("f") formulario: NgForm

  vCorreo: string = "sergiohidalgocaceres@gmail.com"

  ingresar() {
    const datos: any = {}
    datos.nombre = this.formulario.controls["nombre"].value
    datos.correo = this.formulario.controls["correo"].value
    datos.contrasena = this.formulario.controls["contrasena"].value

    console.log("Datos", datos)

    console.log(this.formulario.controls["correo"].value)
    this.formulario.reset({
      nombre: "Sergio"
    })
    //console.log(this.formulario)

  }

  setearValores() {
    /*this.formulario.setValue({
      nombre: "Sergio Hidalgo",
      correo: "sergiohidalgocaceres@gmail.com",
      contrasena: ""
    })*/

    this.formulario.form.patchValue({
      nombre: "Sergio Hidalgo",
      correo: "sergiohidalgocaceres@gmail.com"
    })

  }
}
