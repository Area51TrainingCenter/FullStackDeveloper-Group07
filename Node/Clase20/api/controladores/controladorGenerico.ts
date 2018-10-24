import { Request, Response } from "express";

class ControladorGenerico {
	constructor(private modelo: any) {
		this.listado = this.listado.bind(this)
		this.insercion = this.insercion.bind(this)
		this.actualizacion = this.actualizacion.bind(this)
		this.eliminacion = this.eliminacion.bind(this)
	}

	async listado(req: Request, res: Response) {
		const lista = await this.modelo.find()
		res.json(lista)
	}

	async insercion(req: Request, res: Response) {
		const parametros = req.body

		const obj = new this.modelo(parametros)
		await obj.save()

		res.send("Item insertado")
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