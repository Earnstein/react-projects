import {Router} from "express";
import products from "../../../data/products.js";

const productRouter = Router();

productRouter.get("/", (req, res) => {
   return res.json(products)
})

productRouter.get("/:id", (req, res) => {
   const {id} = req.params;
   const product = products.find((p)=> (p._id === id ));
   return res.json(product);
})

export default productRouter;