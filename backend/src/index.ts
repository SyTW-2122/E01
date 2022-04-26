const express = require('express');
const app = express();
const cors = require('cors');

require('./database');

app.use(cors()); //agrega cabeceras a la peticion para poder
//ser pasado del servidor de angular al servidor express
app.use(express.json());

app.use('/api', require('./routes/index'));

app.listen(3000);
console.log("Server on port", 3000);