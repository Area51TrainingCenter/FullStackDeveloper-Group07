import express = require("express")
import AutoresControladores from "../api/controladores/autoresControladores"
import { errores } from "../manejadores/errores"

const controlador = new AutoresControladores()

const ruteador = express.Router()

ruteador.get("/", errores.cacheo(controlador.listado))
ruteador.get("/:_id", errores.cacheo(controlador.detallar))
ruteador.get("/paginacion/:pagina", errores.cacheo(controlador.listadoPaginado))
ruteador.post("/", errores.cacheo(controlador.insercion))
ruteador.put("/:_id", errores.cacheo(controlador.actualizacion))
ruteador.delete("/:_id", errores.cacheo(controlador.eliminacion))

export { ruteador }