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
