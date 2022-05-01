import express, {Application} from 'express';
import morgan from 'morgan';
import indexRoutes from './routes/index';
import path from 'path';
import cors from 'cors';

//Inicializacion de la aplicacion
const app: Application = express();

//opciones de configuracion
app.set('port', process.env.PORT || 3000);

//middelware: muestra mensajes cuando los usuarios hacen peticiones
//enviar y recibir archivos json
//cors agrega cabeceras a la peticion para poder ser pasado del servidor de angular al servidor express
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//rutas
app.use('/api', indexRoutes);



//esta carpeta se usara para almacenar archivos pubblicos, para decir donde esta
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;
