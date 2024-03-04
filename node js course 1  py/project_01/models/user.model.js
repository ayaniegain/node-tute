const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name: {
      type: String,
      require: true,
    },
    last_name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    ip_address: {
      type: String,
      require: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
    },
  });
  const User = mongoose.model("users", userSchema);

  module.exports={User}