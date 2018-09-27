import { NextFunction, Request, Response } from "express";

const mongoose = require("mongoose");
const Receta = mongoose.model("Receta");

const controlador = {
  insertar: async (req: Request, res: Response, next: NextFunction) => {
    const receta = new Receta({
	  titulo: req.body.titulo.trim(),
	  descripcion: req.body.descripcion.trim()
    });

    await receta.save();

    res.json({ estado: 201, mensaje: "receta insertado" });
  },
  modificar: async (req: Request, res: Response, next: NextFunction) => {
    const datos = {
	  titulo: req.body.titulo.trim(),
	  descripcion: req.body.descripcion.trim()
    };

    await Receta.findOneAndUpdate({ _id: req.params.id }, datos);

    res.json({ estado: 201, mensaje: "receta modificado" });
  },
  eliminar: async (req: Request, res: Response, next: NextFunction) => {
    await Receta.findOneAndRemove({ _id: req.params.id });

    res.json({ estado: 201, mensaje: "receta eliminado" });
  },
  listar: async (req: Request, res: Response, next: NextFunction) => {
    const recetas = await Receta.find();

    res.json({
      estado: 200,
      mensaje: "lista de recetas",
      resultado: recetas
    });
  },
  detallar: async (req: Request, res: Response, next: NextFunction) => {
    const receta = await Receta.findOne({ _id: req.params.id });

    if (receta) {
      res.json({
        estado: 200,
        mensaje: "Receta",
        resultado: receta
      });
    } else {
      res.json({ estado: 200, mensaje: "Receta", resultado: {} });
    }
  }
};

export { controlador };
