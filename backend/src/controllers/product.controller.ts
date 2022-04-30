import { Request, Response, NextFunction } from "express";
import product from '../models/product';

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
  
}