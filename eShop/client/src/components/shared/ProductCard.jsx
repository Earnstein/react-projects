import products from "@/assets/products";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

const ProductCard = ({id, image, name, price}) => {
  return (
    <Card className="w-[300px] max-w-xs shadow-md grid gap-1">
      <CardTitle>
        <a href={`product/${id}`} className="hover:opacity-90 transition-all duration-200">
          <img src={image} alt="image" />
        </a>
      </CardTitle>
      <CardContent>
        <CardDescription className="text-black">
          <a href={`product/${products[0]._id}`} className="hover:underline">
            <h4 className="text-[1.2rem] font-medium font-opensans hover:opacity-80">
              {name}
            </h4>
          </a>
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-2">
        <Button variant="link" className="text-sm">Buy</Button>
        <a href="/checkout" className="text-start">
          <p className="scroll-m-20 text-2xl font-semibold font-playfair text-blue">
           {`$${price}`}
          </p>
        </a>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
