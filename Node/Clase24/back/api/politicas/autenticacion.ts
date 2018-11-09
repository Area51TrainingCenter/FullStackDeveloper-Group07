import { Request, Response, NextFunction } from "express"
import { decodificarToken } from "../servicios/tokens"

const autenticacion = (req: Request, res: Response, next: NextFunction) => {
	if (req.headers["authorization"]) {
		const cabecera = req.headers["authorization"].toString()

		const accessToken = cabecera.split(" ")[1]

		decodificarToken(accessToken)
			.then((data: any) => {
				res.locals._id = data._id
				res.locals.rol = data.rol

				next()
			})
			.catch(error => {
				res.status(error.estado).json(error)
			})
	} else {
		return res.status(409).json({
			estado: 409,
			mensaje: "Usuario no logueado"
		})
	}
}

export { autenticacion }