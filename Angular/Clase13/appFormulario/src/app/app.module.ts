import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppReactiveComponent } from './app-reactive/app-reactive.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    AppReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppReactiveComponent]
})
export class AppModule { }
