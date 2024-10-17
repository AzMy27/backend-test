const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/reportdb")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.error("MongoDB Connection Error", error);
  });

module.exports = mongoose;
