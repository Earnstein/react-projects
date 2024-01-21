import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const ProductCard = ({ image, name, price, id }) => {
  return (
    <Card
      className="card group relative bg-gray-900 dark:bg-background rounded-2xl
    before:absolute before:top-[-60%] before:w-full before:h-full before:bg-muted-foreground dark:before:bg-muted-foreground before:skew-y-[-10deg]
    transition before:transition before:duration-500 overflow-hidden
    hover:before:top-[-70%] hover:before:skew-y-[30deg] h-[350px] sm:h-96"
    >
      <CardTitle className="relative w-full flex justify-center items-center z-[1]">
        <img
          src={image}
          alt="image"
          className="max-w-[100%] transition-all duration-500 group-hover:max-w-[80%]"
        />
      </CardTitle>

      <CardContent className="relative p-4 flex justify-center items-center flex-col z-[1]">
        <CardDescription
          className=" font-palanquin text-xs text-center sm:text-sm
      font-medium uppercase tracking-[1px] text-muted dark:text-muted-foreground"
        >
          {name}
        </CardDescription>
        <h2 className="font-playfair text-xl sm:text-2xl font-medium text-white tracking-[1px]">
          ${price}
        </h2>

        <Link to={`/product/${id}`}>
          <Button
            className={cn(
              "relative py-2.5 px-8 mt-4 no-underline rounded-3xl uppercase tracking-[1px] transition duration-500 opacity-0 group-hover:opacity-100 group-hover:top-0 cursor-pointer"
            )}
          >
            Buy Now
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
