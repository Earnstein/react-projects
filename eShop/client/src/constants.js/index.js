export const BASE_URL = process.env.NODE_ENV === "development" ? "http://localhost:5000/api/v3/" : ""
export const PRODUCTS_URL = "/product";
export const USERS_URL = "/user";
export const ORDERS_URL = "/order";
export const PAYPAL_URL = "/config/paypal";

export const Links = [
  {
    href: "/",
    label: "Products",
  },
  {
    href: "/categories",
    label: "Categories",
  },
  {
    href: "/Trending",
    label: "Trending",
  },
];
