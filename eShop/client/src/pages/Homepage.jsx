import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import products from "@/assets/products";

const Homepage = () => {
  return (
    <section className="mt-20">
      <Container>
        <h1 className="font-palanquin dark:text-muted-foreground text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Latest products.
        </h1>
        <div className="max-w-7xl mx-auto py-4 px-8">
          <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                id={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Homepage;
