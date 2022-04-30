"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("./routes/index"));
const path_1 = __importDefault(require("path"));
//Inicializacion de la aplicacion
const app = (0, express_1.default)();
//opciones de configuracion
app.set('port', process.env.PORT || 3000);
//middelware: muestra mensajes cuando los usuarios hacen peticiones
//enviar y recibir archivos json
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
//rutas
app.use('/api', index_1.default);
//esta carpeta se usara para almacenar archivos pubblicos, para decir donde esta
app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads')));
exports.default = app;
