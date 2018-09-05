import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListarComponent } from './listar/listar.component';
import { CursosServices } from './cursos.services';
import { Log } from './log.services';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    //CursosServices,
    //Log
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
