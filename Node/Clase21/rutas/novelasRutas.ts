import express = require("express")
import NovelasControlador from "../api/controladores/novelasControladores";
import { errores } from "../manejadores/errores";

const controlador = new NovelasControlador()

const ruteador = express.Router()

ruteador.get("/", errores.cacheo(controlador.listado))
ruteador.post("/", errores.cacheo(controlador.insercion))
ruteador.put("/:_id", errores.cacheo(controlador.actualizacion))
ruteador.delete("/:_id", errores.cacheo(controlador.eliminacion))
ruteador.get("/:_id", errores.cacheo(controlador.detallar))

/*ruteador.get("/", async (req: Request, res: Response) => {

	const lista = await Novela.find()

	res.json(lista)



	/*Novela.find()
		.then(
			resultados => res.json(resultados)
		)
		.catch(error => {
			res
				.status(500)
				.send(error)
		})*/
//})

export { ruteador };
