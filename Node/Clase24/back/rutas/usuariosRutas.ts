import UsuariosControladores from "../api/controladores/usuariosControladores";
import { errores } from "../manejadores/errores";
const express = require("express")

const ruteador = express.Router()

const controlador = new UsuariosControladores()

ruteador.get("/", errores.cacheo(controlador.listado))
ruteador.post("/", errores.cacheo(controlador.insercion))
ruteador.put("/", errores.cacheo(controlador.actualizacion))
ruteador.delete("/", errores.cacheo(controlador.eliminacion))

ruteador.post("/login", errores.cacheo(controlador.login))
ruteador.post("/nuevo-access-token", errores.cacheo(controlador.solicitarNuevoAccessToken))

export { ruteador };
