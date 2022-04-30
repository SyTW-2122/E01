import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  type: String
}, {
  timestamps: true
});

export default model('user', userSchema);

// module.exports = model('user', userSchema);