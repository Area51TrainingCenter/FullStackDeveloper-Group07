import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms"

import { AppComponent } from './app.component';
import { RecetasComponent } from './recetas/recetas.component';

@NgModule({
  declarations: [
    AppComponent,
    RecetasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
