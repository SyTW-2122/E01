"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = exports.getProducts = void 0;
function getProducts() {
}
exports.getProducts = getProducts;
function createProduct(req, res) {
    console.log(req.body);
    return res.json({
        message: 'Foto guardada correctamente',
    });
}
exports.createProduct = createProduct;
;
