import { NextFunction, Request, Response } from "express";

const mongoose = require("mongoose");
const Cancion = mongoose.model("Cancion");

const controlador = {
  insertar: async (req: Request, res: Response, next: NextFunction) => {
    const cancion = new Cancion({
      cancion: req.body.cancion.trim(),
      cantante: req.body.cantante.trim()
    });

    await cancion.save();

    res.json({ estado: 201, mensaje: "canción insertada" });
  },
  modificar: async (req: Request, res: Response, next: NextFunction) => {
    const datos = {
      cancion: req.body.cancion.trim(),
      cantante: req.body.cantante.trim()
    };

    await Cancion.findOneAndUpdate({ _id: req.params.id }, datos);

    res.json({ estado: 201, mensaje: "canción modificada" });
  },
  eliminar: async (req: Request, res: Response, next: NextFunction) => {
    await Cancion.findOneAndRemove({ _id: req.params.id });

    res.json({ estado: 201, mensaje: "canción eliminada" });
  },
  listar: async (req: Request, res: Response, next: NextFunction) => {
    const canciones = await Cancion.find();

    res.json({
      estado: 200,
      mensaje: "lista de canciones",
      resultado: canciones
    });
  },
  detallar: async (req: Request, res: Response, next: NextFunction) => {
    const cancion = await Cancion.findOne({ _id: req.params.id });

    if (cancion) {
      res.json({
        estado: 200,
        mensaje: "Canción",
        resultado: cancion
      });
    } else {
      res.json({ estado: 200, mensaje: "Canción", resultado: {} });
    }
  }
};

export { controlador };
