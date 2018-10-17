import { Request, Response } from "express";
import ControladorGenerido from "./controladorGenerico";

class UsuariosControladores extends ControladorGenerido {
	constructor() {
		super("usuarios")
	}

	listado(req: Request, res: Response) {
		res.send("Acá va la lista")
	}
}

export default UsuariosControladores