import { Request, Response, NextFunction } from "express";

export function getProducts() {

}

export function createProduct(req: Request, res: Response) {

  console.log(req.body);

  return res.json ({
    message: 'Foto guardada correctamente',
  });

};