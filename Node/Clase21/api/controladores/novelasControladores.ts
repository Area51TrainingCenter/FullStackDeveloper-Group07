import Novela from "../modelos/novelas";
import ControladorGenerico from "./controladorGenerico";
import { Request, Response } from "express"

class NovelasControlador extends ControladorGenerico {
	constructor() {
		super(Novela)
	}

	async listado(req: Request, res: Response) {
		const lista = await Novela.find().populate("autor")
		res.json(lista)
	}
}

export default NovelasControlador