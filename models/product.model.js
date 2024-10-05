import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter the product name"],
    },
    price: {
      type: Number,
      required: [true, "Please enter product price"],
    },
    quantity: {
      type: Number,
      required: [true, "Please enter the quantity of products"],
    },
  },
  {
    Timestamp: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
