import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
//import { SeguridadService } from "./seguridad.service";
import { Observable, throwError } from "rxjs";
import { catchError, mergeMap, retry } from 'rxjs/operators';
import { SeguridadService } from "./seguridad.service";

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  p: Observable<string>
  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"))

    let accessToken = "", refreshToken = ""

    if (usuarioLogueado) {
      accessToken = usuarioLogueado.accessToken
      refreshToken = usuarioLogueado.refreshToken
    }

    let peticionClonada: HttpRequest<any> = req.clone({ headers: req.headers.append("Authorization", `Bearer ${accessToken}`) })

    let auth = this.injector.get(SeguridadService);

    return next.handle(peticionClonada)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.error instanceof ErrorEvent) {
          } else if (error.status == 401) {
            return auth.obtenerNuevoToken(refreshToken)
              .pipe(
                retry(3),
                mergeMap(
                  (respuesta: any) => {
                    usuarioLogueado.accessToken = respuesta.resultado.accessToken
                    localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioLogueado))

                    peticionClonada = req.clone({ headers: req.headers.append("Authorization", `Bearer ${respuesta.resultado.accessToken}`) })
                    return next.handle(peticionClonada)
                  }
                )
              )
          } else {
            if (error.error && error.error.mensaje) {
              return throwError(error.error.mensaje)
            } else {
              return throwError("No hay conexión con el servidor. Revise su conexión a internet.")
            }

          }
        })
      )
  }
}
