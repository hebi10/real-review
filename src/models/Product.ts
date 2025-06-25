import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  desc: String,
  img: String,
  price: String,
});
const Product = mongoose.model("Product", productSchema);

export default Product;
