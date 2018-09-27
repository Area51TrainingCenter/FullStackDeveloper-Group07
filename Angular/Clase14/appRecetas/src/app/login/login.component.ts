import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../autenticacion.service';
import { Usuario } from '../usuario';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(private autenticacionService: AutenticacionService) { }

	ngOnInit() {
	}

	login(usuario: string, contrasena: string) {
		const obj: Usuario = { usuario, contrasena }

		this.autenticacionService.login(obj)
	}

}
