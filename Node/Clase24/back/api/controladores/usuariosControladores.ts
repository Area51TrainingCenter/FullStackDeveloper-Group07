import ControladorGenerico from "./controladorGenerico";
import Usuario from "../modelos/usuarios";
import { Request, Response } from "express";
import { crearTokens, generarNuevoAccessToken } from "../servicios/tokens";

class UsuariosControladores extends ControladorGenerico {
	constructor() {
		super(Usuario)
	}

	async insercion(req: Request, res: Response) {
		const datos = req.body

		const usuario = new Usuario(datos)
		const nuevoUsuario = await usuario.save()

		const tokens = crearTokens(nuevoUsuario._id, datos.rol)
		nuevoUsuario.refreshToken = tokens.refreshToken

		await nuevoUsuario.save()

		res.json(tokens)
	}

	async login(req: Request, res: Response) {
		const correo = req.body.correo.trim().toLowerCase()
		const contrasena = req.body.contrasena.trim()

		const usuario: any = Usuario.findOne({ correo, contrasena })

		if (usuario) {
			const accessToken = generarNuevoAccessToken(usuario._id, usuario.rol)

			res.json({ accessToken, refreshToken: usuario.refreshToken })
		} else {
			res.status(500).send("usuario no válido")
		}
	}

	async solicitarNuevoAccessToken(req: Request, res: Response) {
		const refreshToken = req.body.refreshToken

		const usuario = Usuario.findOne({ refreshToken })

		if (usuario) {
			const accessToken = generarNuevoAccessToken(usuario._id, usuario.rol)

			res.json({ accessToken })
		} else {
			res.status(500).send("Usuario no válido")
		}
	}
}

export default UsuariosControladores