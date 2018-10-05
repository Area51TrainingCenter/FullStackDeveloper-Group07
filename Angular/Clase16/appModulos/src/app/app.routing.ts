import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";

const rutas: Route[] = [
  { path: "", component: LoginComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(rutas)
  ]
})
export class AppRouting { }
