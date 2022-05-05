"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.deleteProduct = exports.getProduct = exports.createProduct = exports.getProducts = void 0;
const product_1 = __importDefault(require("../models/product"));
const path_1 = __importDefault(require("path")); //formatear la direccion del archivo
// import fs from "fs";
const fs_extra_1 = __importDefault(require("fs-extra")); //eliminar
//vamos a instalar un modulo que si soporta promesas, porque fs va con callbacks
async function getProducts(req, res) {
    const products = await product_1.default.find();
    return res.json(products);
}
exports.getProducts = getProducts;
//porque esto va a tomar un poco de tiempo
async function createProduct(req, res) {
    console.log(req.body);
    console.log(req.file);
    const { title, price, description } = req.body;
    const newProduct = {
        title: title,
        price: price,
        description: description,
        imagePath: req.file.path,
    };
    const product_ = new product_1.default(newProduct);
    console.log(product_);
    await product_.save();
    return res.json({
        message: 'Foto guardada correctamente',
        product_
    });
}
exports.createProduct = createProduct;
;
async function getProduct(req, res) {
    console.log(req.params.id);
    const product_ = await product_1.default.findById(req.params.id);
    return res.json(product_);
}
exports.getProduct = getProduct;
async function deleteProduct(req, res) {
    const { id } = req.params;
    const product_ = await product_1.default.findByIdAndRemove(id);
    if (product_) {
        await fs_extra_1.default.unlink(path_1.default.resolve(product_.imagePath));
    }
    return res.json({
        message: 'Se ha eliminado el producto',
        product_,
    });
}
exports.deleteProduct = deleteProduct;
async function updateProduct(req, res) {
    const { id } = req.params;
    const { title, price, description } = req.body;
    const updatedProduct = await product_1.default.findByIdAndUpdate(id, {
        title,
        price,
        description
    }, { new: true }); //para que nos devuelva el modificado
    return res.json({
        message: 'Producto actualizado correctamente',
        updatedProduct
    });
}
exports.updateProduct = updateProduct;
//el unico problema que ocurriria seria que si se quiere eliminar en el sistema de archivos, 
//y se ha eliminado la carpeta uploads, no se va a poder, primero hay que buscar el archivo
