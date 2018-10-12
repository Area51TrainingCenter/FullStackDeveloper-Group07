// Importaciones
import { Application, NextFunction, Request, Response } from "express";
import { ruteador as UsuariosRutas } from "./rutas/usuariosRutas";
import express = require("express")

// Declaración de variables
const app: Application = express()

// Declaración inicial de middlewares
app.use((req: Request, res: Response, next: NextFunction) => {
	const metodosValidos = ["get", "post", "put", "delete"]

	/*if(metodosValidos.indexOf(req.method.toLowerCase())> -1) {
		next()
	} else {
		res
			.status(405)
			.send("Método no válido")
	}*/

	if (metodosValidos.indexOf(req.method.toLowerCase()) == -1) {
		return res
			.status(405)
			.send("Método no válido")
	}

	next()
})

// Definición de rutas
app.use("/usuarios", UsuariosRutas)

app.use((req: Request, res: Response) => {
	res
		.status(404)
		.send("Ruta no encontrada")
})


// Servidor
app.listen(3000, () => console.log("Servidor ejecutándose en el puerto 3000"))
