import { useState } from 'react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { addToCart } from "@/states/slices";


const Cart = ({product}) => {
  const [quantity, setQuantity] = useState(1);
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10) || 1;
    setQuantity(Math.min(Math.max(1, newQuantity), product.countInStock));
    setShowAlert(false); // Hide the alert when the quantity changes
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, product.countInStock));
    setShowAlert(false); // Hide the alert after each increment
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
    setShowAlert(false); // Hide the alert after each decrement
  };

  const handleAddToCart = () => {
    if (quantity > product.countInStock) {
      // Show alert if quantity exceeds stock
      setShowAlert(true);
    } else {
      // Add to cart logic here
      dispatch(addToCart({ ...product, qty: quantity }));
      navigate("/cart")
      // ... other logic
    }
  };

  return (
    <>
      {product.countInStock > 0 && (
        <>
          <Separator />
          <p className="flex justify-between items-center">
            <span className="font-normal text-accent-foreground text-sm sm:text-2xl  font-playfair">
              Qty:
            </span>
            <div className="flex items-center">
              <button
                type="button"
                onClick={handleDecrement}
                className="bg-gray-200 px-2 py-1 rounded-l cursor-pointer"
              >
                -
              </button>
              <form>
                <label htmlFor="Line1Qty" className="sr-only">
                  Quantity
                </label>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  id="Line1Qty"
                  className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                  onChange={handleQuantityChange}
                />
              </form>
              <button
                type="button"
                onClick={handleIncrement}
                className="bg-gray-200 px-2 py-1 rounded-r cursor-pointer"
              >
                +
              </button>
            </div>
          </p>
          {showAlert && (
            <div className="alert">
              {/* Your alert component goes here */}
              <p>Cannot add more items than available in stock.</p>
            </div>
          )}
          
          
        </>
      )}
      <Separator/>
      <Button disabled={product.countInStock ===0} onClick={handleAddToCart}>Add to Cart</Button>
    </>
  );
};

export default Cart;
