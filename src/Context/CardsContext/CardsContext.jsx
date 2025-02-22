import { useEffect, useState } from "react";
import CardsContext from ".";
import { useQuery } from "@tanstack/react-query";
import { ProductAPI } from "@/Utils/AxiosUtils/API";
import request, { newRequest } from "@/Utils/AxiosUtils";

const CardsContext = (props) => {
  const [getProductParams, setGetProductPrams] = useState({});
  const [allProducts, setAllProducts] = useState([]);

  const { data, refetch, isLoading, isRefetching } = useQuery(
    [ProductAPI],
    () =>
      newRequest({
        url: ProductAPI,
        params: {},
      }),
    {
      enabled: false,
      refetchOnWindowFocus: false,
      select: (data) => {
        console.log(
          "datadata in req card",
          data.data.data.product_list,
          data.data.data
        );
        return data.data.data.product_list;
      },
    }
  );

  useEffect(() => {
    Object.keys(getProductParams).length > 0 && refetch();
  }, [getProductParams]);

  useEffect(() => {
    if (data) {
      console.log("datadata", data);
      setAllProducts((prev) => data);
    }
  }, [isLoading, getProductIds]);

  return (
    <CardsContext.Provider
      value={{ ...props, allProducts, setGetProductPrams, isLoading }}
    >
      {props.children}
    </CardsContext.Provider>
  );
};

export default CardsContext;
