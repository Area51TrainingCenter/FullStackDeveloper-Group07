import { Pipe, PipeTransform } from '@angular/core';
import { INovela } from './app.component';

@Pipe({
  name: 'filtroPipe'
})
export class FiltroPipe implements PipeTransform {

  transform(value: INovela[], filtro: string, campo: string): any {
    if (filtro.trim() === "") return value

    return value.filter(novela => novela[campo].toLowerCase().indexOf(filtro.toLowerCase()) >= 0 ? true : false)
  }

}
