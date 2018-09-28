import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  grupo: FormGroup
  resultado: string
  persona: FormGroup
  nombre: string

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.grupo = new FormGroup({
      titulo: new FormControl(null, Validators.required),
      artista: new FormControl(null, Validators.required)
    })

    this.persona = new FormGroup({
      dni: new FormControl(null, Validators.required)
    })
  }

  buscar() {
    const artista = this.grupo.value.artista
    const titulo = this.grupo.value.titulo

    this.http.get<{ lyrics: string }>(`https://api.lyrics.ovh/v1/${artista}/${titulo}`, {
      observe: "body",
      responseType: "json"
    })
      .subscribe(
        (respuesta: any) => {
          this.resultado = respuesta.lyrics.replace(/(?:\r\n|\r|\n)/g, '<br>')
        },
        (respuestaError: HttpErrorResponse) => {
          this.resultado = respuestaError.error.error
        }
      )
  }

  buscarPorDNI() {
    const dni = this.persona.value.dni
    this.http.get<string>(`http://aplicaciones007.jne.gob.pe/srop_publico/Consulta/Afiliado/GetNombresCiudadano?DNI=${dni}`)
      .subscribe(
        respuesta => this.nombre = respuesta,
        error => console.log(error)
      )
  }


}
