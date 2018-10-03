import { controlador } from "../api/controladores/usuarioControlador";
import { autenticado } from "../api/politicas/autenticadoPolitica";
import { erroresManejador } from "../manejadores/errores";

import express = require("express");

const ruteador = express.Router();

ruteador.get("/", autenticado, erroresManejador.catch(controlador.listar));
ruteador.get("/:id", erroresManejador.catch(controlador.detallar));
ruteador.post("/", erroresManejador.catch(controlador.insertar));
ruteador.put(
	"/:id",
	erroresManejador.catch(controlador.modificar)
);
ruteador.delete(
	"/:id",
	erroresManejador.catch(controlador.eliminar)
);
ruteador.post("/login", erroresManejador.catch(controlador.login));

export { ruteador };
