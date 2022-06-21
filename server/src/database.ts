import  mongoose, {ConnectOptions, connect}  from 'mongoose';

async function startConnection() {
  await connect('mongodb://localhost/angular-auth', 
  { useNewUrlParser: true,
    useUnifiedTopology: false,
  } as ConnectOptions);
  console.log('Conectado a la base de datos');
}

export default startConnection;

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
/*
import { MongoClient } from 'mongodb';

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
export const client = new MongoClient(url);

// Database Name
const dbName = 'angular-auth';

async function start() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Conectado satisfactoriamente a la base de datos');
  const db = client.db(dbName);
  //const collection = db.collection('documents');

  // the following code examples can be pasted here...

  return 'hecho';
}

export default start;*/

/*start()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());*/