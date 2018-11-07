import { Request, Response } from "express";

class ControladorGenerico {
	constructor(private modelo: any) {
		this.listado = this.listado.bind(this)
		this.insercion = this.insercion.bind(this)
		this.actualizacion = this.actualizacion.bind(this)
		this.eliminacion = this.eliminacion.bind(this)
		this.detallar = this.detallar.bind(this)
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

	async actualizacion(req: Request, res: Response) {
		const _id = req.params._id
		const parametros = req.body

		//await this.modelo.update( {_id}, parametros)
		await this.modelo.findOneAndUpdate({ _id }, parametros)

		res.send("Usuario actualizado")
	}

	async eliminacion(req: Request, res: Response) {
		const _id = req.params._id

		//await this.modelo.remove({_id})
		await this.modelo.findOneAndRemove({ _id })

		res.send("Usuario eliminado")
	}

	async detallar(req: Request, res: Response) {
		const _id = req.params._id

		//const documento = await this.modelo.find({_id})
		const documento = await this.modelo.findOne({ _id })

		res.json(documento)
	}
}

export default ControladorGenerico