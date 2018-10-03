import { NextFunction, Request, Response } from "express";
import { crearToken, generarAccessToken, generarUid } from "../servicios/token";

const mongoose = require("mongoose");
const Usuario = mongoose.model("Usuario");

const controlador = {
	insertar: async (req: Request, res: Response, next: NextFunction) => {
		const usuario = new Usuario({
			nombreCompleto: req.body.nombreCompleto.trim(),
			usuario: req.body.usuario.trim(),
			contrasena: req.body.contrasena.trim(),
			rol: req.body.rol
		});

		const nuevoUsuario = await usuario.save();

		//const tokens: any = crearToken(nuevoUsuario._id, nuevoUsuario.rol);
		const refreshToken = generarUid();
		nuevoUsuario.refreshToken = refreshToken; //tokens.refreshToken;
		await nuevoUsuario.save();

		res.json({ estado: 201, mensaje: "usuario insertado" });
	},
	modificar: async (req: Request, res: Response, next: NextFunction) => {
		const datos = {
			nombreCompleto: req.body.nombreCompleto.trim(),
			usuario: req.body.usuario.trim(),
			contrasena: req.body.contrasena.trim(),
			rol: req.body.rol,
			estado: req.body.estado == "true" ? true : false
		};

		const usuario = await Usuario.findOne({ _id: req.params.id });

		if (usuario) {
			usuario.nombreCompleto = datos.nombreCompleto;
			usuario.usuario = datos.usuario;
			usuario.contrasena = datos.contrasena;
			usuario.rol = datos.rol;
			usuario.estado = datos.estado;

			await usuario.save();
		}

		res.json({ estado: 201, mensaje: "usuario modificado" });
	},
	eliminar: async (req: Request, res: Response, next: NextFunction) => {
		const usuario = await Usuario.findOne({ _id: req.params.id });

		if (usuario) {
			usuario.estado = false;
			await usuario.save();
		}

		res.json({ estado: 201, mensaje: "usuario desactivado" });
	},
	listar: async (req: Request, res: Response, next: NextFunction) => {
		const usuarios = await Usuario.find();

		res.json({
			estado: 200,
			mensaje: "lista de usuarios",
			resultado: usuarios
		});
	},
	detallar: async (req: Request, res: Response, next: NextFunction) => {
		const usuario = await Usuario.findOne({ _id: req.params.id });

		if (usuario) {
			res.json({
				estado: 200,
				mensaje: "Usuario",
				resultado: usuario
			});
		} else {
			res.json({ estado: 200, mensaje: "Usuario", resultado: {} });
		}
	},
	login: async (req: Request, res: Response, next: NextFunction) => {
		const usuario = await Usuario.findOne({
			usuario: req.body.usuario.trim().toLowerCase(),
			estado: true
		});

		if (usuario) {
			usuario.compararContrasena(req.body.contrasena.trim(), function (
				err,
				encontrado
			) {
				if (err)
					return res
						.status(404)
						.json({ estado: 404, mensaje: "Usuario no encontrado" });
				else {
					if (encontrado) {
						return res.json({
							estado: 200,
							mensaje: "Usuario válido",
							resultado: {
								accessToken: generarAccessToken(usuario._id),
								refreshToken: usuario.refreshToken,
								nombreCompleto: usuario.nombreCompleto,
								foto: ""
							}
						});
					} else {
						return res
							.status(404)
							.json({ estado: 404, mensaje: "Usuario no encontrado" });
					}
				}
			});
		} else {
			return res
				.status(404)
				.json({ estado: 404, mensaje: "Usuario no encontrado" });
		}
	}
};

export { controlador };
