import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { LoginComponent } from './login/login.component';
import { NucleoRoutingModule } from './nucleo-routing.module';


@NgModule({
  imports: [
    CommonModule,
    NucleoRoutingModule
  ],
  declarations: [
    LoginComponent,
    CabeceraComponent
  ],
  exports: [
    CabeceraComponent,
    NucleoRoutingModule
  ]
})
export class NucleoModule { }