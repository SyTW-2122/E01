const mongoose = require('mongoose');

mongoose.connect('mongodb://superAdmin:caramelo82@10.6.130.15:27017/prueba?authSource=admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to the database');
}).catch(() => {
  console.log('Something went wrong when conecting to the database');
});