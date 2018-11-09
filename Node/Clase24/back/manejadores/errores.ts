import { NextFunction, Request, Response } from "express";

export interface IError extends Error {
	status?: number
}

const errores = {
	cacheo(ftn: (req: Request, res: Response) => Promise<any>) {
		return (req: Request, res: Response, next: NextFunction) => {
			return ftn(req, res).catch((error: IError) => {
				error.status = 500
				next(error)
			})
		}
	},

	metodosNoValidos(req: Request, res: Response, next: NextFunction) {
		const metodosValidos = ["get", "post", "put", "delete", "options"]

		if (metodosValidos.indexOf(req.method.toLowerCase()) == -1) {
			const error: IError = new Error("Método no válido")
			error.status = 405

			return next(error)
		}

		next()
	},

	paginaNoEncontrada(req: Request, res: Response, next: NextFunction) {
		const error: IError = new Error("Ruta no encontrada")
		error.status = 404

		next(error)
	},

	manejadorGeneral(error: IError, req: Request, res: Response, next: NextFunction) {
		const datosAEnviar = {
			mensaje: error.message,
			estado: error.status,
			pila: error.stack
		}

		res
			.status(error.status)
			.json(datosAEnviar)
	}
}

export { errores };
