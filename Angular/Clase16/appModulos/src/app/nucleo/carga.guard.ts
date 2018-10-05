import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

@Injectable()
export class CargaGuard implements CanLoad {

  constructor(private ruteador: Router) { }

  canLoad(): boolean {
    this.ruteador.navigate(["/cantantes"])
    return false
  }

}
