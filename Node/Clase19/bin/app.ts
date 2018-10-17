// Importaciones
import express = require("express")
import helmet = require("helmet")
import cors = require("cors")
import { Application } from "express";
import { errores } from "../manejadores/errores";
import { ruteador as UsuariosRutas } from "../rutas/usuariosRutas";

const app: Application = express()
const configCors = {
	origin: process.env.DOMAIN,
	optionsSuccessStatus: 200
}

app.set("PORT", process.env.PORT)

// Declaración inicial de middlewares
app.use(helmet())
app.use(cors(configCors))

app.use(errores.metodosNoValidos)

// Definición de rutas
app.use("/usuarios", UsuariosRutas)

app.use(errores.paginaNoEncontrada)
app.use(errores.manejadorGeneral)

export default app