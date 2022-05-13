"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
/*
async function startConnection() {
  await connect('mongodb://localhost/angular-auth',
  { useNewUrlParser: true,
    useUnifiedTopology: false,
  } as ConnectOptions);
  console.log('Conectado a la base de datos');
}

export default startConnection;*/
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
const mongodb_1 = require("mongodb");
// Connection URL
const url = 'mongodb://127.0.0.1:27017';
exports.client = new mongodb_1.MongoClient(url);
// Database Name
const dbName = 'angular-auth';
async function start() {
    // Use connect method to connect to the server
    await exports.client.connect();
    console.log('Conectado satisfactoriamente a la base de datos');
    const db = exports.client.db(dbName);
    //const collection = db.collection('documents');
    // the following code examples can be pasted here...
    return 'hecho';
}
exports.default = start;
/*start()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());*/ 
