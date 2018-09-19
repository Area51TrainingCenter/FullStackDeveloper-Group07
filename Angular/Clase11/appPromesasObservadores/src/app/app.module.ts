import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DataResolve } from './data.resolve';
import { ListadoComponent } from './listado/listado.component';



const rutas: Routes = [
  { path: "", component: ListadoComponent, resolve: { respuesta: DataResolve } }
]

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
