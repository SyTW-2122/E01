import {Router, Request, Response, NextFunction} from 'express';
import User from '../models/user';
import { getProducts, createProduct, getProduct, deleteProduct, updateProduct } from '../controllers/product.controller';
import multer from '../libs/multer';

const router = Router();
const jwt = require('jsonwebtoken');

router.get('/', (req: Request, res: Response) => res.send('Hello world'));

router.post('/signup', async (req: Request, res: Response) => {
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

  const newUser = new User({ name, email, password, type }); 
  await newUser.save();

  const token = await jwt.sign({_id: newUser._id}, 'secretkey');
  console.log(newUser);
  return res.status(200).json({token});

  //console.log(email, password);
  //res.status(200).send('register');
});

router.post('/signin', async (req: Request, res: Response) => {
  const {email, password} = req.body;
  const user = await User.findOne({email});

  if (email == '' && password == '') {
    return res.status(401).send("Los campos de email o contraseña están vacíos");
  }

  if (!user) {
    return res.status(401).send("El correo no existe, debe proporcionar uno");
  }

  if (user && user.password !== password) {
    return res.status(401).send("La contraseña que ha proporcionado es errónea");
  }

  const token = jwt.sign({_id: user._id}, 'secretkey');
  return res.status(200).json({token});

});


//aqui hay que poner verifytoken
//editar producto hace la funcion del catalogo, y añadir un producto
router.route('/editarProducto')
  .get(verifyToken, getProducts)
  .post(verifyToken, multer.single('image'), createProduct);

router.route('/editarProducto/:id')
  .get(verifyToken, getProduct)
  .delete(verifyToken, deleteProduct)
  .put(verifyToken, updateProduct)

export default router;

function verifyToken(req, res: Response, next: NextFunction) {
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
