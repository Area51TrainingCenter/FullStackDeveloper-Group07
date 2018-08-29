import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppDirective } from './app.directive';
import { AppSelectDirective } from './app-select.directive';
import { SubirArchivosDirective } from './subir-archivos.directive';

@NgModule({
	declarations: [
		AppComponent,
		AppDirective,
		AppSelectDirective,
		SubirArchivosDirective
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
