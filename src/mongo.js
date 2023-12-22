const mongoose = require("mongoose");
const { conection } = require("../config");
require("dotenv").config();

const uri = 'url de mongodb';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(uri, options)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });
