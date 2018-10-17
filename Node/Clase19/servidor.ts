// Importaciones de variables de entorno
const dotenv = require("dotenv")
dotenv.config({ path: "./variables.env" })

import app from "./bin/app";
import http = require("http")
//import https = require("https")

// Servidor
const servidorHttp = http.createServer(app)

servidorHttp.listen(app.get("PORT"), () => console.log(`Servidor ejecutándose en el puerto ${app.get("PORT")}`))

//const servidorHttps = https.createServer(app)
