import { Component } from "@angular/core";

@Component({
  selector: "[app-primero]",
  templateUrl: "./primero.component.html",
  styleUrls: ["./primero.component.css"]
})
export class PrimeroComponent {
  nombre: string = "Sergio Hidalgo"

  mostrarFecha(){
    const fecha = new Date()

    alert(fecha)
  }

}
