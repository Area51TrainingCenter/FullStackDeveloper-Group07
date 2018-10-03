import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  insertar(usuario: any): Observable<any> {
    return this.http.post(`${environment.urlAPIRest}/usuario`, usuario)
  }

  login(usuario: any): Observable<any> {
    return this.http.post(`${environment.urlAPIRest}/usuario/login`, usuario)
  }

  listar(): Observable<any> {

    if (localStorage.getItem("datos")) {
      const datos = JSON.parse(localStorage.getItem("datos"))

      const cabecera = new HttpHeaders({
        "Authorization": `Bearer ${datos.accessToken}`
      })

      console.log(cabecera)

      return this.http.get(`${environment.urlAPIRest}/usuario`, { headers: cabecera })
    }

    return of(null)

    /*cabecera.append("Authorization", `Bearer ${datos.accessToken}`)*/


  }
}
