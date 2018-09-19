import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { of } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DataResolve implements Resolve<any> {
  listaNombres: string[] = []
  roles: string[] = []

  resolve(): any {
    return Promise.all([this.promesasNombres(), this.promesasRoles()])
  }

  promesasNombres(): Promise<any> {

    return new Promise((resolve, reject) => {

      of(["sergio", "pedro", "carmen", "luis"])
        .pipe(
          delay(5000)
        )
        .subscribe(
          data => {
            this.listaNombres = data
            resolve()
          },
          error => reject()
        )


    })



  }

  promesasRoles(): Promise<any> {
    return new Promise((resolve, reject) => {

      of(['admin', 'operador', 'digitador'])
        .pipe(
          delay(8000)
        )
        .subscribe(
          data => {
            this.roles = data
            resolve()
          },
          error => reject()
        )


    })


  }
}
