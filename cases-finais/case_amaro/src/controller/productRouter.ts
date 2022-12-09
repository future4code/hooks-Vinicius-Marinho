import { ProductController } from './ProductController';
import express from "express";



export const productRouter = express.Router();

const productController = new ProductController();

productRouter.post("/signup", productController.signup);
productRouter.get("/findByName", productController.findProductByName);

