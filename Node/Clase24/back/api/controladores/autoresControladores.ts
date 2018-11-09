import Autor from "../modelos/autores";
import ControladorGenerico from "./controladorGenerico";
import { Request, Response } from "express"

class AutoresControladores extends ControladorGenerico {
	constructor() {
		super(Autor)
	}

	async listadoPaginado(req: Request, res: Response) {
		const pagina = +req.params.pagina
		//const lista = await Autor.find().populate("novelas")
		const lista = await Autor.listadoAutores(pagina)
		res.json(lista)
	}
}

export default AutoresControladores
