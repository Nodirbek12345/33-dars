import { useQuery } from "@tanstack/react-query";
import { API } from "../api";

interface IParams {
  limit?: number;
  skip?: number;
  order?: string;
}

export const useProductKey: string = "ProductKey";

export const useProduct = () => {
  const getProduct = (params?: IParams) =>
    useQuery({
      queryKey: [useProductKey, params],
      queryFn: () => API.get("product", { params }).then((res) => res.data),
    });

  return { getProduct };
};