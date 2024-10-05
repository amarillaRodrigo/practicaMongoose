import express from "express";
import mongoose from "mongoose";
import Product from "./models/product.model.js";
import productRouter from "./routes/product.route.js"; // Corregido aquí
import morgan from "morgan";

const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/products", productRouter);

mongoose
  .connect(
    "mongodb+srv://rodrigoamarilla:xU78zgqCQlnvo9a2@ipf2024.1avnl.mongodb.net/Node-API?retryWrites=true&w=majority&appName=ipf2024"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
