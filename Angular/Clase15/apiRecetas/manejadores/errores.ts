import { NextFunction, Request, Response } from "express";

interface IError extends Error {
  status?: number;
}

const erroresManejador = {
  noEncontrado: (req: Request, res: Response, next: NextFunction) => {
    const error: IError = new Error("Ruta no encontrada.");
    error.status = 404;

    next(error);
  },
  catch: (
    ftn: (req: Request, res: Response, next: NextFunction) => Promise<any>
  ) => {
    return (req: Request, res: Response, next: NextFunction) => {
      return ftn(req, res, next).catch((error: IError) => {
        error.status = 500;
        next(error);
      });
    };
  },
  general: (error: IError, req: Request, res: Response, next: NextFunction) => {
    if (process.env.NODE_ENV === "development") {
      res.status(error.status).json({
        mensaje: error.message,
        pila: error.stack,
        estado: error.status
      });
    } else {
      res.status(error.status).json({
        mensaje: error.message,
        estado: error.status
      });
    }
  }
};

export { erroresManejador };
