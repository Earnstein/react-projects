import Product from "../models/product.model.js";
import color from "colors";

async function httpGetAllProducts(req, res) {
  try {
    const products = await Product.find({},{
        __v:0,
        createdAt:0,
        updatedAt: 0
    });
    return res.status(200).json(products);
  } catch (error) {
    console.error(`${error}`.red.inverse);
    res.status(400).json({
      error: error,
    });
  }
}

async function httpGetProduct(req, res) {
try {
    const { id } = req.params;
    const product = await Product.findOne({_id: id});
    return res.json(product);
} catch (error) {
    
}
}
export { httpGetAllProducts, httpGetProduct };
