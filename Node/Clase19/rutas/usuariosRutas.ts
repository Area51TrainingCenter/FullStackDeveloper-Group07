import { controlador } from "../api/controladores/usuariosControladores";
const express = require("express")

const ruteador = express.Router()

ruteador.get("/", controlador.listado)
ruteador.post("/", controlador.insercion)
ruteador.put("/", controlador.actualizacion)
ruteador.delete("/", controlador.eliminacion)

export { ruteador };
