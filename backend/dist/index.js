"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//para ejecutar typescript con node se usa ts-node
const app_1 = __importDefault(require("./app"));
const database_1 = __importDefault(require("./database"));
async function main() {
    (0, database_1.default)();
    //es un codigo asincrono y no quiero usar un callback
    await app_1.default.listen(app_1.default.get('port'));
    console.log('Servidor escuchando en el puerto', app_1.default.get('port'));
}
main();
//const cors = require('cors');
//app.use(cors()); //agrega cabeceras a la peticion para poder
//ser pasado del servidor de angular al servidor express
//app.use('/api', require('./routes/index'));
