import type { RequestHandler } from "express";

const routeNotFound: RequestHandler = (req, res) => {
  res.status(404).json({
    "message": "Recurso solicitado no encontrado"
  });
}

export { routeNotFound };