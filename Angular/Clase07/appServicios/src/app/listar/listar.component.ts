import { Component, OnInit } from '@angular/core';
import { CursosServices } from '../cursos.services';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers: [//CursosServices]
})
export class ListarComponent implements OnInit {
  //cursoService
  cursos: string[] = []

  constructor(private cursoService: CursosServices) {
    //this.cursoService = new CursosServices()
  }

  ngOnInit() {
  }

  listarCursos() {
    this.cursos = this.cursoService.listar()
  }

}
