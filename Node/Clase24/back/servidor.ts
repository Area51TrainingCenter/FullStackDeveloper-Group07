// Importaciones de variables de entorno
const dotenv = require("dotenv")
dotenv.config({ path: "./variables.env" })

import mongoose = require("mongoose")

require("./api/modelos/novelas")
require("./api/modelos/autores")

import app from "./bin/app";
import http = require("http")
//import https = require("https")

mongoose.Promise = global.Promise
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true })
mongoose.connection.on("connected", () => console.log("Conectado a Mongo"))
mongoose.connection.on("error", error => console.log(error))


// Servidor
const servidorHttp = http.createServer(app)

servidorHttp.listen(app.get("PORT"), () => console.log(`Servidor ejecutándose en el puerto ${app.get("PORT")}`))

//const servidorHttps = https.createServer(app)
