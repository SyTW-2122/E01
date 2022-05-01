"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
async function startConnection() {
    await (0, mongoose_1.connect)('mongodb://localhost/angular-auth', { useNewUrlParser: true,
        useUnifiedTopology: false,
    });
    console.log('Conectado a la base de datos');
}
exports.default = startConnection;
/*
mongoose.connect('mongodb://localhost/angular-auth', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}as ConnectOptions).then(() => {
  console.log('Conectado a la base de datos');
}).catch(() => {
  console.log('Ha habido un problema con la conexion a la base de datos');
});
*/
