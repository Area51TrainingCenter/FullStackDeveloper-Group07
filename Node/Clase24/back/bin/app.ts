// Importaciones
import express = require("express")
import helmet = require("helmet")
import cors = require("cors")
import bodyParser = require("body-parser")
import { Application } from "express";
import { errores } from "../manejadores/errores";
import { ruteador as NovelasRutas } from "../rutas/novelasRutas";
import { ruteador as UsuariosRutas } from "../rutas/usuariosRutas";
import { ruteador as AutoresRutas } from "../rutas/autoresRutas"

const app: Application = express()
const configCors = {
	origin: process.env.DOMAIN,
	optionsSuccessStatus: 200
}

app.set("PORT", process.env.PORT)

// Declaración inicial de middlewares
app.use(helmet())
app.use(cors(configCors))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(errores.metodosNoValidos)

app.use(express.static("./publico"))

// Definición de rutas
app.use("/usuarios", UsuariosRutas)
app.use("/novelas", NovelasRutas)
app.use("/autores", AutoresRutas)

app.use(errores.paginaNoEncontrada)
app.use(errores.manejadorGeneral)

export default app