const mongoose = require("mongoose");

const databaseConnect = async () => {
    try {
      let db = "mongodb+srv://ayaniegain:12345@cluster0.05adgij.mongodb.net/mydata";
      const conn = await mongoose.connect(db);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error);
    }
  };

  module.exports={
    databaseConnect
  }