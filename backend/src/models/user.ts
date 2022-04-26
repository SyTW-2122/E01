const {Schema, model} = require('mongoose');

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  type: String
}, {
  timestamps: true
});

module.exports = model('user', userSchema);