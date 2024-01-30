const mongoose = require("mongoose");
const Product = require('./models/Products.js');

mongoose.connect("mongodb://127.0.0.1:27017/prov");
mongoose.connection.on("connected", () => {
  console.log("MongoDB local connected");
});


const demo = async () => {
  let demodata = await Product.find();
  console.log(demodata);
};
demo();


