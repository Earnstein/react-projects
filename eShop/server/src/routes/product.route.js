import {Router} from "express";
import products from "../../data/products.js";

const productRouter = Router();

productRouter.get("/", (req, res) => {
    res.json(products)
})

export default productRouter;