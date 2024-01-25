import Container from "@/components/Container";
import ErrorMessage from "@/components/ErrorMessage";
import  { LoadingComponent } from "@/components/Loader";
import ProductCard from "@/components/ProductCard";
import { useGetProductsQuery } from "@/hooks/Products";
import useMediaQuery from "@/hooks/useMediaQuery";


const Homepage = () => {
  const isSmallScreens = useMediaQuery("(max-width: 600px)")
  const { isError, isLoading, data: products, error } = useGetProductsQuery();
 
  return (
    <section className="mt-12">
      <Container>
        <h1 className="font-playfair dark:text-muted-foreground text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Latest products.
        </h1>
        <div className="py-4 px-8">
          <div className="grid grid-cols-1 gap-2 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {isLoading && <LoadingComponent num={isSmallScreens ? 1 : 4} />}
            {isError && <ErrorMessage variant={"destructive"} title={error?.name} message={error?.message || "Something went wrong... Retry"}/>}
            {products &&
              products.map((product) => (
                <ProductCard
                  key={product._id}
                  id={product.slug}
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
