import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReducidorPipe } from './reducidor.pipe';
import { FiltroPipe } from './filtro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReducidorPipe,
    FiltroPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
