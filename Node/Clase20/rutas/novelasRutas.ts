import express = require("express")
import NovelasControlador from "../api/controladores/novelasControladores";
import { errores } from "../manejadores/errores";

const controlador = new NovelasControlador()

const ruteador = express.Router()

ruteador.get("/", errores.cacheo(controlador.listado))
ruteador.post("/", errores.cacheo(controlador.insercion))

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
