import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CantanteService {

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get(`${environment.urlAPIRest}/cantante`)
  }

  detallar(id: string) {
    return this.http.get(`${environment.urlAPIRest}/cantante/${id}`)
  }

  insertar(cantante: {}) {
    return this.http.post(`${environment.urlAPIRest}/cantante`, cantante)
  }

  modificar(id: string, cantante: {}) {
    return this.http.put(`${environment.urlAPIRest}/cantante/${id}`, cantante)
  }

  eliminar(id: string) {
    return this.http.delete(`${environment.urlAPIRest}/cantante/${id}`)
  }

}
