import { useEffect, useState } from "react";
import ProductIdsContext from ".";
import { useQuery } from "@tanstack/react-query";
import { ProductAPI } from "@/Utils/AxiosUtils/API";
import { newRequest } from "@/Utils/AxiosUtils";

const ProductIdsProvider = (props) => {
  const [getProductIds, setGetProductIds] = useState({});
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);

  const { data, refetch, isLoading, isRefetching } = useQuery(
    [ProductAPI, getProductIds?.ids],
    () =>
      newRequest({
        url: ProductAPI,
        params: {
          ...getProductIds,
          status: 1,
          paginate: getProductIds?.ids?.length,
        },
      }),
    {
      enabled: false,
      refetchOnWindowFocus: false,
      select: (data) => data.data.data.product_list,
    }
  );

  useEffect(() => {
    Object.keys(getProductIds).length > 0 && refetch();
  }, [getProductIds?.ids]);

  useEffect(() => {
    if (data) {
      setFilteredProduct((prev) => data);
    }
  }, [isLoading, getProductIds]);

  return (
    <ProductIdsContext.Provider
      value={{
        ...props,
        allProducts: filteredProduct,
        filteredProduct,
        setGetProductIds,
        isLoading,
        isRefetching,
      }}
    >
      {props.children}
    </ProductIdsContext.Provider>
  );
};

export default ProductIdsProvider;
