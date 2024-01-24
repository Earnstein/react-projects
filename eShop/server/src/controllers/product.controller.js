import Product from "../models/product.model.js";
import { asyncHandler } from "../middleware/middleware.js";

const httpGetAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find(
    {},
    {
      __v: 0,
      createdAt: 0,
      updatedAt: 0,
    }
  );
  return res.status(200).json(products);
});

const httpGetProduct = asyncHandler(async (req, res) => {
  const { slugId } = req.params;
  const product = await Product.findOne(
    { slug: slugId },
    {
      __v: 0,
      createdAt: 0,
      updatedAt: 0,
    }
  );

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }
  return res.status(200).json(product);
});

export { httpGetAllProducts, httpGetProduct };
