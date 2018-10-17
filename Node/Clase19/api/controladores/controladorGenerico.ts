import { Request, Response } from "express";

class ControladorGenerico {
	constructor(private tabla: string) {

		this.listado = this.listado.bind(this)
		this.insercion = this.insercion.bind(this)
		this.actualizacion = this.actualizacion.bind(this)
		this.eliminacion = this.eliminacion.bind(this)
	}

	listado(req: Request, res: Response) {
		console.log("get usuarios")
		res
			.json([
				{ nombre: "usuario 1", apellido: "apellido 1" },
				{ nombre: "usuario 2", apellido: "apellido 2" }
			])
	}

	insercion(req: Request, res: Response) {
		res
			.send("Usuario insertado")
	}

	actualizacion(req: Request, res: Response) {
		res
			.send("Usuario actualizado")
	}

	eliminacion(req: Request, res: Response) {
		res
			.send("<strong>Usuario eliminado</strong>")
	}
}

export default ControladorGenerico