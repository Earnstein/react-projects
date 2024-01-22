import express from "express";
import productRouter from "./product.route.js";

const api = express.Router();

api.use("/product", productRouter);

export default api;