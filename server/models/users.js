const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    phoneNumber: Number,
    password: String,
  });
  
  const Users = mongoose.model('Users', userSchema);
  module.exports = Users