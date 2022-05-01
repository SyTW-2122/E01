import { Request, Response } from "express";
export declare function getProducts(req: Request, res: Response): Promise<Response>;
export declare function createProduct(req: Request, res: Response): Promise<Response>;
export declare function getProduct(req: Request, res: Response): Promise<Response>;
export declare function deleteProduct(req: Request, res: Response): Promise<Response>;
export declare function updateProduct(req: Request, res: Response): Promise<Response>;
