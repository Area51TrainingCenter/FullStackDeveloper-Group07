import Novela from "../modelos/novelas";
import ControladorGenerico from "./controladorGenerico";

class NovelasControlador extends ControladorGenerico {
	constructor() {
		super(Novela)
	}
}

export default NovelasControlador