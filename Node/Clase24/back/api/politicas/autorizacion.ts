import { Request, Response, NextFunction } from "express"

const permisos = (...roles) => {
	const rolPermitido = rol => roles.indexOf(rol) > -1

	return (req: Request, res: Response, next: NextFunction) => {
		const rolUsuario = res.locals.rol

		if (rolPermitido(rolUsuario)) {
			next()
		} else {
			return res.status(409)
				.json({
					estado: 409,
					mensaje: "Operación no permitida"
				})
		}
	}
}

export { permisos }