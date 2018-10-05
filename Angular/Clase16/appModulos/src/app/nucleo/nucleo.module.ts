import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CargaGuard } from './carga.guard';
import { LoginComponent } from './login/login.component';
import { NucleoRoutingModule } from './nucleo-routing.module';


@NgModule({
  imports: [
    CommonModule,
    NucleoRoutingModule,
    MaterialModule
  ],
  declarations: [
    LoginComponent,
    CabeceraComponent
  ],
  exports: [
    CabeceraComponent,
    NucleoRoutingModule
  ],
  providers: [CargaGuard]
})
export class NucleoModule { }
