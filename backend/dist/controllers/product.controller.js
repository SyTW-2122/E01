"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProduct = exports.createProduct = exports.getProducts = void 0;
const product_1 = __importDefault(require("../models/product"));
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
}
exports.getProduct = getProduct;
