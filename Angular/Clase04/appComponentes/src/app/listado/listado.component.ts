import { Component, OnInit, Input } from '@angular/core';
import { IServidor } from '../modelos/servidor.model';

@Component({
	selector: 'app-listado',
	templateUrl: './listado.component.html',
	styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

	@Input("dato") servidores: IServidor[]

	constructor() { }

	ngOnInit() {
	}

}
