//para ejecutar typescript con node se usa ts-node
import app from './app';
import startConnection from './database';

async function main() {
  startConnection();
  //es un codigo asincrono y no quiero usar un callback
  await app.listen(app.get('port'));
  console.log('Servidor escuchando en el puerto', app.get('port'));
} 

main();

//app.use('/api', require('./routes/index'));
