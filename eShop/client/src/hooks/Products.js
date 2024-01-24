import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProducts, getProduct } from "./request";

const useGetProductsQuery = () => {
  const queryClient = useQueryClient();

  // Prefetching data
  queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};

const useGetProductQuery = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
  });
};

export { useGetProductQuery, useGetProductsQuery };
