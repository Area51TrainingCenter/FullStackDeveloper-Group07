import { Component } from '@angular/core';
import { Log, Estado } from './log.services';
import { CursosServices } from './cursos.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [//CursosServices]
})
export class AppComponent {

  arrCursos: string[] = []

  constructor(private cursoService: CursosServices) {
    //this.cursoService = new CursosServices()
  }

  ngOnInit() {
    const log = new Log()
    setTimeout(() => {
      log.registrarEvento("Iniciando...", Estado.INFORMATIVO)
    }, 2000)

    setTimeout(() => {
      log.registrarEvento("Procesando...", Estado.BIEN)
    }, 4000)

    setTimeout(() => {
      log.registrarEvento("Error: token inválido", Estado.MAL)
    })
  }

  insertar(curso: string) {
    this.cursoService.insertar(curso)

    this.arrCursos = this.cursoService.listar()
  }


}
