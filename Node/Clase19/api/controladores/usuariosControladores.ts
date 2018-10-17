import { Request, Response } from "express";

const controlador = {
	listado(req: Request, res: Response) {
		/*res
			.status(200)
			.type("application/json")
			.send(JSON.stringify([
				{ nombre: "usuario 1", apellido: "apellido 1" },
				{ nombre: "usuario 2", apellido: "apellido 2" }
			]))*/

		console.log("get usuarios")
		res
			.json([
				{ nombre: "usuario 1", apellido: "apellido 1" },
				{ nombre: "usuario 2", apellido: "apellido 2" }
			])
	},

	insercion(req: Request, res: Response) {
		res
			.send("Usuario insertado")
	},

	actualizacion(req: Request, res: Response) {
		res
			.send("Usuario actualizado")
	},

	eliminacion(req: Request, res: Response) {
		res
			.send("<strong>Usuario eliminado</strong>")
	}
}

export { controlador };
