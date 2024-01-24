import { Router } from "express";
import {
   httpGetProduct,
   httpGetAllProducts,
 
} from "../../controllers/product.controller.js";

const productRouter = Router();

productRouter.get("/", httpGetAllProducts);

productRouter.get("/:slugId", httpGetProduct);

export default productRouter;
