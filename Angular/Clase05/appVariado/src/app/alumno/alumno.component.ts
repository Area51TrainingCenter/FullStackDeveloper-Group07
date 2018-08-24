import { Component, OnInit, Input, ElementRef, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  @Input() datos: any

  @ContentChild("etiquetap") parrafo: ElementRef

  constructor() { }

  ngOnInit() {
    alert(this.parrafo.nativeElement.innerHTML)
  }

  mostrarDataParrafo() {
    alert(this.parrafo.nativeElement.innerHTML)
  }

}
