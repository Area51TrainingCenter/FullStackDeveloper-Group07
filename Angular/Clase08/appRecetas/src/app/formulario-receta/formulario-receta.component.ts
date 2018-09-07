import { Component, OnInit, Output, EventEmitter, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { IReceta } from '../modelos/receta.model';
import { RecetasService } from '../recetas.service';

FileList.prototype["forEach"] = function (cb) {
  [].forEach.call(this, cb)
}

@Component({
  selector: 'app-formulario-receta',
  templateUrl: './formulario-receta.component.html',
  styleUrls: ['./formulario-receta.component.css']
})
export class FormularioRecetaComponent implements OnInit {
  @ViewChild("titulo") titulo: ElementRef
  @ViewChild("descripcion") descripcion: ElementRef
  @ViewChild("url") url: ElementRef

  aplicarClaseActivo: boolean = false
  listaFiles: File[] = []

  receta: IReceta = {}

  //@Output() onEnviandoReceta = new EventEmitter<IReceta>()

  constructor(private recetasService: RecetasService) { }

  ngOnInit() {
  }

  grabar() {
    const titulo = this.titulo.nativeElement.value
    const descripcion = this.descripcion.nativeElement.value
    const url = "" //this.url.nativeElement.value

    if (titulo.trim() != "" && descripcion.trim() != "") {
      //this.onEnviandoReceta.emit({ titulo, descripcion })
      const receta: IReceta = { titulo, descripcion }
      this.recetasService.grabar(receta)
      this.titulo.nativeElement.value = ""
      this.descripcion.nativeElement.value = ""
      this.url.nativeElement.value = ""
    }


		/*if (this.receta.titulo.trim() != "" && this.receta.descripcion.trim() != "" && this.receta.url.trim() != "") {
		  this.onEnviandoReceta.emit(this.receta)
		  this.receta = {}
		}*/
  }

  seleccion(archivos: FileList) {
    archivos["forEach"](item => {
      if (item.type.startsWith("image")) {
        this.listaFiles.push(item)
      }
    })

    console.log(this.listaFiles)
  }

}
