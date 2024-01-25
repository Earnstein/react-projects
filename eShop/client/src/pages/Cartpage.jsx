import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Delete, DeleteIcon, Trash, Trash2, TrashIcon } from "lucide-react";
import React from "react";
import { FaTrash } from "react-icons/fa";

const Cartpage = () => {
  return (
    <section className="mt-12">
      <Container>
        <div className="max-w-3xl mx-auto">
          <header className="text-center">
            <h1 className="font-playfair dark:text-muted-foreground text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Your Cart
            </h1>
          </header>

          <div className="mt-8">
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                  alt=""
                  className="h-16 w-16 rounded object-cover"
                />

                <div>
                  <h3 className="text-sm font-normal text-accent-foreground font-palanquin">Basic Tee 6-Pack</h3>

                  <dl className="mt-0.5 space-y-px text-xs font-normal text-accent-foreground font-palanquin">
                    <div>
                      <dt className="inline">Size:</dt>
                      <dd className="inline">XXS</dd>
                    </div>

                    <div>
                      <dt className="inline">Color:</dt>
                      <dd className="inline">White</dd>
                    </div>
                  </dl>
                </div>

                <div className="flex flex-1 items-center justify-end gap-2">
                <form>
                <label htmlFor="Line1Qty" className="sr-only">
                  Quantity
                </label>
                <Input  
                  type="number"
                  min="1"
                  max="9"
                  step="1"
                  defaultValue="1"
                  id="Line1Qty"
                  className={cn("h-8 w-16 rounded bg-muted text-gray-600 dark:bg-background text-xs dark:text-white focus:outline-[0] ")}
                  />
            
              </form>

                  <Button variant="outline" size="icon" className={cn("transition p-0")}>
                    <span className="sr-only">Remove item</span>

                    <Trash2 className="h-[1rem] w-[1rem] transition-all dark:text-white hover:text-red-300"/>
                  </Button>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex justify-end border-t border-gray-100 dark:border-gray-700 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-700">
                  <div className="flex justify-between dark:text-white font-palanquin text-sm">
                    <dt>Subtotal</dt>
                    <dd>£250</dd>
                  </div>

                  <div className="flex justify-between dark:text-white font-palanquin text-sm">
                    <dt>VAT</dt>
                    <dd>£25</dd>
                  </div>

                  <div className="flex justify-between dark:text-white font-palanquin text-sm">
                    <dt>Discount</dt>
                    <dd>-£20</dd>
                  </div>

                  <div className="flex justify-between !text-base font-medium dark:text-white">
                    <dt>Total</dt>
                    <dd>£200</dd>
                  </div>
                </dl>

                <div className="flex justify-end">
                  <span className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="-ms-1 me-1.5 h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                      />
                    </svg>

                    <p className="whitespace-nowrap text-xs dark:text-primary font-semibold">
                      2 Discounts Applied
                    </p>
                  </span>
                </div>

                <div className="flex justify-end">
                  <Button 
                    href="#"
                    className=" bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600 font-palanquin"
                  >
                    Checkout
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cartpage;
