import multer from 'multer'
import path from 'path'
import {v4 as uuid} from 'uuid';

// opciones de configuracion, es un metoto que permite
// decidir donde guardar las imagenes

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        cb(null, uuid() + path.extname(file.originalname));
    }
});

//para que lo haga de una vez solamente
export default multer({storage});