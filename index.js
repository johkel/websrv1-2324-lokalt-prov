const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/local");
mongoose.connection.on("connected", () => {
  console.log("MongoDB local connected");
});
