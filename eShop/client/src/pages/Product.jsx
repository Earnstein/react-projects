import products from "@/assets/products";
import ProductCard from "@/components/shared/ProductCard";

const Product = () => {
  return (
    <section className="max-container w-full">
      <h1>ESHOP</h1>
      <div className="px-20">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center  xl:grid-cols-4 gap-2">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
      </div>
    </section>
  );
};

export default Product;
