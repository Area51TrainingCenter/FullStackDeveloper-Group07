import { NextFunction, Request, Response } from "express";
import { decodificarToken } from "../servicios/token";

const autenticado = (req: Request, res: Response, next: NextFunction) => {
  if (req.headers["authorization"]) {
    const cabecera = req.headers["authorization"].toString();
    const accessToken = cabecera.split(" ")[1];

    decodificarToken(accessToken)
      .then((data: any) => {
        res.locals.id = data.id;
        return next();
      })
      .catch(error => {
        res.status(error.estado).json(error);
      });
  } else {
    return res.status(409).json({
      estado: 409,
      mensaje: "No está logueado"
    });
  }
};

export { autenticado };
