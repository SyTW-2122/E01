import {Schema, model, Document} from 'mongoose';

//un esquema es la descripcion

const productSchema = new Schema({
  title: String,
  price: String,
  description: String,
  imagePath: String,
});

//una interfaz es la descripcion de un objeto
//para que typescript lo entienda y nos ayude

interface Iproduct extends Document {
  title: string;
  price: string;
  description: string;
  imagePath: string;
}

//el modelo va a tener que cumplir la estructura de la interfaz
export default model<Iproduct>('product', productSchema);