import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrimeroComponent} from "./primero.component"

@NgModule({
  declarations: [
    AppComponent, PrimeroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PrimeroComponent]
})
export class AppModule { }
