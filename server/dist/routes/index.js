"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = __importDefault(require("../models/user"));
const product_controller_1 = require("../controllers/product.controller");
const multer_1 = __importDefault(require("../libs/multer"));
const router = (0, express_1.Router)();
const jwt = require('jsonwebtoken');
router.get('/', (req, res) => res.send('Hello world'));
router.post('/signup', async (req, res) => {
    //console.log(req.body);
    const { name, email, password, type } = req.body;
    if (email == '' && password == '') {
        return res.status(401).send("Los campos de email o contraseña están vacíos");
    }
    if (email == '') {
        return res.status(401).send("Debe proporcionar un email");
    }
    if (password == '') {
        return res.status(401).send("Debe proporcionar una contraseña");
    }
    if (password.length < 4) {
        return res.status(401).send("La contraseña debe tener un mínimo de 4 caracteres");
    }
    const newUser = new user_1.default({ name, email, password, type });
    await newUser.save();
    const token = await jwt.sign({ _id: newUser._id }, 'secretkey');
    console.log(newUser);
    return res.status(200).json({ token });
    //console.log(email, password);
    //res.status(200).send('register');
});
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    const user = await user_1.default.findOne({ email });
    if (email == '' && password == '') {
        return res.status(401).send("Los campos de email o contraseña están vacíos");
    }
    if (!user) {
        return res.status(401).send("El correo no existe, debe proporcionar uno");
    }
    if (user && user.password !== password) {
        return res.status(401).send("La contraseña que ha proporcionado es errónea");
    }
    const token = jwt.sign({ _id: user._id }, 'secretkey');
    return res.status(200).json({ token });
});
//aqui hay que poner verifytoken
//editar producto hace la funcion del catalogo, y añadir un producto
router.route('/editarProducto')
    .get(verifyToken, product_controller_1.getProducts)
    .post(verifyToken, multer_1.default.single('image'), product_controller_1.createProduct);
router.route('/editarProducto/:id')
    .get(verifyToken, product_controller_1.getProduct)
    .delete(verifyToken, product_controller_1.deleteProduct)
    .put(verifyToken, product_controller_1.updateProduct);
exports.default = router;
function verifyToken(req, res, next) {
    console.log("->");
    console.log(req.headers);
    if (!req.headers.authorization) {
        return res.status(401).send('Autorización errónea');
    }
    const token = req.headers.authorization.split(' ')[1];
    if (token === "null") {
        return res.status(401).send('Autorización errónea');
    }
    const payload = jwt.verify(token, 'secretkey'); //contenido que esta dentro del token
    console.log(payload);
    req.userId = payload._id;
    next();
}
