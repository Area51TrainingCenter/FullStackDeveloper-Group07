import multer = require("multer")
import { Request, Response, NextFunction } from "express"
import { IError } from "./errores";
import jimp = require("jimp")
import uuid = require("uuid")

const subir = () => {
	const opcionesMulter = {
		storage: multer.memoryStorage(),
		fileFilter(req, file, next) {
			const esFoto: boolean = file.mimetype.startsWith("image/")

			if (esFoto) {
				return next(null, true)
			} else {
				const errorImagen: IError = new Error("No es una imagen")
				errorImagen.status = 500

				next(errorImagen, false)
			}


		}
	}

	return multer(opcionesMulter).single("foto")
}

const grabar = () => {
	return async (req: Request, res: Response, next: NextFunction) => {
		if (!req.file) return next()

		const extension: string = req.file.mimetype.split("/")[1]
		const nuevoNombre: string = uuid.v4()

		req.body.foto = `${nuevoNombre}.${extension}`

		const foto = await jimp.read(req.file.buffer)
		await foto.resize(200, jimp.AUTO)
		await foto.write(`./publico/uploads/${req.body.foto}`)

		next()
	}
}

export { subir, grabar }