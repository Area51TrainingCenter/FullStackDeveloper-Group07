import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CancionesModule } from './canciones/canciones.module';
import { CantantesModule } from './cantantes/cantantes.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CabeceraComponent
  ],
  imports: [
    BrowserModule,
    CantantesModule,
    CancionesModule,
    AppRouting,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
