import { Request, Response, NextFunction } from "express";
import product from '../models/product';
import path from "path"; //formatear la direccion del archivo
// import fs from "fs";
import fs from 'fs-extra'; //eliminar

//vamos a instalar un modulo que si soporta promesas, porque fs va con callbacks

export async function getProducts(req: Request, res: Response): Promise<Response>{
  const products = await product.find();
  return res.json(products);
}

//porque esto va a tomar un poco de tiempo
export async function createProduct(req: Request, res: Response): Promise<Response>{

  console.log(req.body);
  console.log(req.file);

  const {title, price, description} = req.body;
  const newProduct = {
    title: title,
    price: price,
    description: description,
    imagePath: req.file.path,
  };

  const product_ = new product(newProduct);
  console.log(product_);

  await product_.save();

  return res.json ({
    message: 'Foto guardada correctamente',
    product_
  });

};

export async function getProduct(req: Request, res: Response): Promise<Response>{
  console.log(req.params.id);
  const product_ = await product.findById(req.params.id);
  return res.json(product_);
}

export async function deleteProduct(req: Request, res: Response): Promise<Response> {
  const { id } = req.params
  const product_ = await product.findByIdAndRemove(id);
  if (product_) {
    await fs.unlink(path.resolve(product_.imagePath));
  }
  return res.json({
    message: 'Se ha eliminado el producto',
    product_,
  });
}

export async function updateProduct(req: Request, res: Response): Promise<Response> {
  const { id } = req.params;
  const { title, price, description } = req.body;
  const updatedProduct = await product.findByIdAndUpdate(id, {
    title,
    price,
    description
  }, {new: true}); //para que nos devuelva el modificado
  return res.json({
    message: 'Producto actualizado correctamente',
    updatedProduct
  });
}

//el unico problema que ocurriria seria que si se quiere eliminar en el sistema de archivos, 
//y se ha eliminado la carpeta uploads, no se va a poder, primero hay que buscar el archivo