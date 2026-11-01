import type { RequestHandler } from "express";

const routeNotFound: RequestHandler = (req, res) => {
  res.status(404).json({
    "message": "Requested resource not found"
  });
}

export { routeNotFound };