import express from "express";
import Product from "../models/product.model.js"; // Corregido aquí
import {
  getProducts,
  getProduct,
  postProduct,
  updateProduct,
  deleteProduct,
} from "../controller/product.controller.js"; // Corregido aquí

const router = express.Router(); // Corregido aquí

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", postProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
