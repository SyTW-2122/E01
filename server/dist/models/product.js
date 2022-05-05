"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
//un esquema es la descripcion
const productSchema = new mongoose_1.Schema({
    title: String,
    price: String,
    description: String,
    imagePath: String,
});
//el modelo va a tener que cumplir la estructura de la interfaz
exports.default = (0, mongoose_1.model)('product', productSchema);
