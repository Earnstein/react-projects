import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api/v3/";

// FETCH A SINGLE PRODUCT , RETURN AS JSON
const getProduct = async (productId) => {
    const response = await axios.get(`/product/${productId}`);
    if (response.status !== 200) {
        throw new Error("Unable to fetch product.")
    }

    const product = await response.data;
    return product
}

 
// FETCH ALL PRODUCT, RETURN AS JSON
const getProducts = async () => {
    try {
        const response = await axios.get("/product");
        if (response.status !== 200) {
          throw new Error("Unable to fetch products");
        }
        const data = response.data;
        return data;
      } catch (error) {
        console.error(error);
        throw error;
      }
}


export {
    getProduct,
    getProducts
}