import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class Interceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let datos: any = {}

    if (localStorage.getItem("datos")) {
      datos = JSON.parse(localStorage.getItem("datos"))
    }

    const clon = req.clone({ headers: req.headers.append("Authorization", `Bearer ${datos.accessToken}`) })

    return next.handle(clon)
  }
}
