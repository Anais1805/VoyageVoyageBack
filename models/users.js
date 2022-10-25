const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  token: String,
  avatar: String,
  age: Number,
  phone: Number,
  isConnected: Boolean, 
  family: String,
  budget: String,
  displacement: String, 
  diet: String
});

const User = mongoose.model('users', userSchema);

module.exports = User;
