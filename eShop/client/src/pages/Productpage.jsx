import Container from "@/components/Container";
import ErrorMessage from "@/components/ErrorMessage";
import Rating from "@/components/Rating";
import Spinner from "@/components/Spinner";
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
import { useGetProductQuery } from "@/hooks/Products";
import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Cart from "@/components/Cart";
import { alexaImg } from "@/assets";

const Productpage = () => {
  const [qty, setQty] = useState(1);
  const { id: productId } = useParams();
  
  const {
    error,
    isError,
    isLoading,
    data: product,
  } = useGetProductQuery(productId);

  return (
    <section className="mt-24">
      <Container>
        {isLoading && <Spinner />}
        {isError && (
          <ErrorMessage
            variant={"destructive"}
            title={error?.name}
            message={error?.message || "Something went wrong... Retry"}
          />
        )}

        {/* PRODUCT DETAIL SECTION */}
        {product && (
          <section className="flex  gap-4 p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-4 md:gap-6">
              {/* PRODUCT IMAGE */}
              <Card className="h-64 sm:h-96 sm:col-span-2 lg:col-span-1 bg-accent dark:bg-background order-1 sm:order-3 lg:order-1 relative">
                <div className="relative h-full w-full">
                  <img
                    src={alexaImg}
                    alt={product.name}
                    className="absolute inset-0 object-cover h-full w-full"
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
                  <p className="font-palanquin max-xs:text-xs">
                    <span className="font-bold ">Description:</span>{" "}
                    {product.description}
                  </p>
                </CardFooter>
              </Card>

              {/* PRODUCT SUMMARY */}
              <Card className="h-80 sm:h-96 lg:h-80 bg-white dark:bg-background order-3 sm:order-1 lg:order-3 p-3 space-y-6">
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

                
                <Cart product={product}/>
                
              </Card>
            </div>

            {/* CTA */}
            
          </section>
        )}
        <Link to="/">
              <Button className="z-2 px-8 py-2 self-start inline ml-4">
                Continue shopping
              </Button>
            </Link>
      </Container>
    </section>
  );
};

export default Productpage;
