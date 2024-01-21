import products from "@/assets/products";
import Container from "@/components/Container";
import Rating from "@/components/Rating";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link, useParams } from "react-router-dom";
const Productpage = () => {
  const { id: productId } = useParams();
  const product = products.find((p) => p._id === productId);
  console.log(product);
  return (
    <section className="mt-24">
      <Container>
        {/* PRODUCT DETAIL SECTION */}
        <section className="flex flex-col gap-4 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-4 md:gap-6">
            {/* PRODUCT IMAGE */}
            <Card className="h-64 sm:h-96 sm:col-span-2 lg:col-span-1 bg-accent dark:bg-background order-1 sm:order-3 lg:order-1 relative">
              <div className="relative h-full w-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                  loading="lazy"
                />
              </div>
            </Card>

            {/* PRODUCT DETAILS */}
            <Card className="h-96 lg:h-[65vh] bg-white dark:bg-background md:col-span-1 lg:col-span-2 order-2 lg:p-4">
              <CardHeader>
                <CardTitle className=" font-playfair text-3xl sm:text-4xl pb-2 lg:pb-8 text-nowrap overflow-hidden text-ellipsis">
                  {product.name}
                </CardTitle>
                <Separator />
                <CardDescription className="pb-2 md:pb-4">
                  <Rating rating={product.numReviews} />
                </CardDescription>
                <Separator />
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-normal text-accent-foreground text-xl sm:text-2xl font-playfair">
                  Price: <span className="ml-4">${product.price}</span>
                </p>
                <Separator />
              </CardContent>

              <CardFooter>
                <p className="font-palanquin">
                  <span className="font-bold">Description:</span>{" "}
                  {product.description}
                </p>
              </CardFooter>
            </Card>

            {/* PRODUCT SUMMARY */}
            <Card className="h-72 sm:h-96 lg:h-80 bg-white dark:bg-background order-3 sm:order-1 lg:order-3 p-6 space-y-8">
              <CardTitle className="flex justify-between items-center">
                <span className="font-normal text-accent-foreground  text-xl sm:text-2xl font-playfair">
                  Price:
                </span>
                <span className="font-normal text-accent-foreground text-xl sm:text-2xl font-playfair">
                  ${product.price}
                </span>
              </CardTitle>
              <Separator />
              <CardDescription className="flex justify-between items-center">
                <span className="font-normal text-accent-foreground  text-xl sm:text-2xl font-playfair">
                  Status:
                </span>
                <span className="font-normal text-accent-foreground text-xl sm:text-2xl font-playfair">
                  {product.countInStock > 0 ? "In stock" : "Out of stock"}
                </span>
              </CardDescription>
              <Separator />
              <Button disabled={product.countInStock === 0}>
                <Link to='/cart'>Add to cart</Link>
              </Button>
            </Card>
          </div>

          {/* CTA */}
          <Link to="/">
            <Button className="z-2 px-8 py-2 self-start">
              Continue shopping
            </Button>
          </Link>
        </section>
      </Container>
    </section>
  );
};

export default Productpage;
