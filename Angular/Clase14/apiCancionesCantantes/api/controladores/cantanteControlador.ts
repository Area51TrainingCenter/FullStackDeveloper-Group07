import { NextFunction, Request, Response } from "express";

const mongoose = require("mongoose");
const Cantante = mongoose.model("Cantante");

const controlador = {
  insertar: async (req: Request, res: Response, next: NextFunction) => {
    const cantante = new Cantante({
      nombre: req.body.nombre.trim()
    });

    await cantante.save();

    res.json({ estado: 201, mensaje: "cantante insertado" });
  },
  modificar: async (req: Request, res: Response, next: NextFunction) => {
    const datos = {
      nombre: req.body.nombre.trim()
    };

    await Cantante.findOneAndUpdate({ _id: req.params.id }, datos);

    res.json({ estado: 201, mensaje: "cantante modificado" });
  },
  eliminar: async (req: Request, res: Response, next: NextFunction) => {
    await Cantante.findOneAndRemove({ _id: req.params.id });

    res.json({ estado: 201, mensaje: "cantante eliminado" });
  },
  listar: async (req: Request, res: Response, next: NextFunction) => {
    const cantantes = await Cantante.find();

    res.json({
      estado: 200,
      mensaje: "lista de cantantes",
      resultado: cantantes
    });
  },
  detallar: async (req: Request, res: Response, next: NextFunction) => {
    const cantante = await Cantante.findOne({ _id: req.params.id });

    if (cantante) {
      res.json({
        estado: 200,
        mensaje: "Cantante",
        resultado: cantante
      });
    } else {
      res.json({ estado: 200, mensaje: "Cantante", resultado: {} });
    }
  }
};

export { controlador };
