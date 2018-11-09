import express = require("express")
import AutoresControladores from "../api/controladores/autoresControladores"
import { errores } from "../manejadores/errores"
import { subir, grabar } from "../manejadores/imagenes";
import { autenticacion } from "../api/politicas/autenticacion";
import { permisos } from "../api/politicas/autorizacion";

const controlador = new AutoresControladores()

const ruteador = express.Router()

ruteador.get("/", autenticacion, permisos("admin", "editor"), errores.cacheo(controlador.listado))
ruteador.get("/:_id", errores.cacheo(controlador.detallar))
ruteador.get("/paginacion/:pagina", errores.cacheo(controlador.listadoPaginado))
ruteador.post("/", subir(), grabar(), errores.cacheo(controlador.insercion))
ruteador.put("/:_id", errores.cacheo(controlador.actualizacion))
ruteador.delete("/:_id", errores.cacheo(controlador.eliminacion))

export { ruteador }