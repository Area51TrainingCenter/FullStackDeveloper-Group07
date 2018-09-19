import { Component } from '@angular/core';
import { Observable, Observer, of } from 'rxjs';
import { delay } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  valores: {}[] = []

  pagina: number = 1
  orden: string = "nombre"

  ngOnInit() {
    const promesa = new Promise((resolve, reject) => {
			/*setTimeout(() => {
				resolve([{ usuario: "usu1" }, { usuario: "usu2" }, { usuario: "usu3" }])
			}, 5000)*/

      setTimeout(() => {
        reject({ estado: 409, mensaje: "El usuario no está autorizado" })
      }, 3000)
    })

		/*promesa.then(
			(lista: any) => this.valores = lista,
			(rechazo) => console.log(rechazo)
		)*/

		/*
		promesa.then((lista: any) => this.valores = lista)
		promesa.catch(rechazo => console.log(rechazo))
		*/

		/*promesa
			.then((lista: any) => this.valores = lista)
			.catch(rechazo => console.log(rechazo))*/
  }

  promesasEncadenadas() {

    const promesaVacaciones = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{ id: 1 }, { id: 2 }, { id: 3 }])
      }, 3000)
    })

		/*promesaVacaciones
			.then(()=>{}, ()=>{})
			.then(()=>{}, ()=>{})*/

    promesaVacaciones
      .then((info) => {
        console.log("Promesa de Vacaciones Cumplida")

        const promesaDeudas = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve()
          }, 5000)
        })

        return promesaDeudas
      })
      .then(() => {
        console.log("Promesa de Deudas Cumplida")
      })
      .catch(() => console.log("Alguna de las promesas no se cumplió"))


  }

  promesasSimultaneas() {
    const promesaInasistencias = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ inasistencias: 30 })
      }, 2000)
    })

    const promesaTardanzas = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ tardanzas: 50 })
      }, 5000)
    })

    Promise.all([promesaInasistencias, promesaTardanzas])
      .then(respuestas => console.log(respuestas))
      .catch(error => console.log(error))
  }

  promesasCarrera() {
    const promesaA1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("A1")
      }, 3000)
    })

    const promesaA2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("A2")
      }, 2000)
    })

    const promesaA3 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("A3")
      }, 6000)
    })

    Promise.race([promesaA1, promesaA2, promesaA3])
      .then(respuesta => console.log(respuesta))
      .catch(error => console.log(error))
  }

  promesa(): Promise<any> {
    const usuarioEstaLogueado: boolean = true
    if (usuarioEstaLogueado) {
      return Promise.resolve("El usuario ya está logueado")
    }

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promesa del API de Autenticación")
      }, 4000)
    })
  }

  promesasCumpleInmediatamente() {
    this.promesa()
      .then(respuesta => console.log(respuesta))
      .catch(error => console.log(error))
  }


  observableBasico() {

    const suscripcion: Observable<string> = Observable.create(
      (observador: Observer<string>) => {

        setTimeout(() => {
          observador.next("Llegó la primera parte de la info")
        }, 3000)


        setTimeout(() => {
          observador.next("Llegó la segunda parte de la info")
        }, 5000)

        /*setTimeout(() => {
          observador.error("Ocurrió un error de conexión")
        }, 8000)*/

        setTimeout(() => {
          observador.next("Llegó la tercera parte de la info")
        }, 10000)

        setTimeout(() => {
          observador.complete()
        }, 12000)

        setTimeout(() => {
          observador.next("Llegó más info")
        }, 14000)

      }
    )

    suscripcion.subscribe(
      (data: string) => console.log(data),
      error => console.log(error),
      () => console.log("Toda la info llegó")
    )



  }


  observableAPIRest() {
    this.llamadaAlAPIRest({}).subscribe(
      respuesta => console.log(respuesta),
      error => console.log(error)
    )
  }

  llamadaAlAPIRest(filtro): Observable<string> {
    // return this.http.get("http://midominio.com/")
    return of("Sergio Hidalgo").pipe(
      delay(4000)
    )

    /*return throwError("Ocurrió un error")
      .pipe(
        delay(5000)
      )*/
  }

  paginacion(): Observable<number> {
    this.pagina = Math.floor(Math.random() * 10 + 1)

    return of(this.pagina)
  }

  llamadaPaginacion() {
    this.paginacion()
      .subscribe(
        respuesta => {
          console.log(respuesta)
          this.llamada({ pagina: this.pagina, ordenamiento: this.orden })
        },
        error => console.log(error)
      )
  }

  ordenamiento(): Observable<string> {
    this.orden = "apellido"
    return of(this.orden)
  }

  llamadaOrdenamiento() {
    this.ordenamiento()
      .subscribe(
        respuesta => {
          console.log(respuesta)
          this.llamada({ pagina: this.pagina, ordenamiento: this.orden })
        },
        error => console.log(error)
      )
  }

  llamada(filtro) {
    this.llamadaAlAPIRest(filtro)
      .subscribe(
        respuesta => console.log(respuesta),
        error => console.log(error)
      )
  }











}
