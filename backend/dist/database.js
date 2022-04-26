const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/angular-auth', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to the database');
}).catch(() => {
    console.log('Something went wrong when conecting to the database');
});
