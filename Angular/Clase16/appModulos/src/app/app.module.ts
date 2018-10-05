import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CancionesModule } from './canciones/canciones.module';
import { CantantesModule } from './cantantes/cantantes.module';
import { NucleoModule } from './nucleo/nucleo.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CantantesModule,
    CancionesModule,
    NucleoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
