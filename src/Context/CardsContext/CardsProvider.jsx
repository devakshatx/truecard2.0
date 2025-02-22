import request, { newRequest } from "@/Utils/AxiosUtils";
import { ProductAPI, ProductSearchAPI } from "@/Utils/AxiosUtils/API";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CardsContext from ".";

const CardsProvider = (props) => {
  const [customProduct, setCustomProduct] = useState([]);
  const [searchWithCategory, setSearchWithCategory] = useState("");
  const router = useRouter();
  const [totalDealIds, setTotalDealIds] = useState("");
  const [allProducts, setAllProducts] = useState({
    data: [],
    refetchProduct: "",
    params: { ...totalDealIds },
    productIsLoading: false,
  });
  const {
    data: productData,
    refetch: productRefetch,
    isLoading: productIsLoading,
  } = useQuery(
    [ProductAPI],
    () =>
      newRequest(
        {
          url: ProductAPI,
          // params: {
          //   ...allProducts.params,
          //   ids: totalDealIds,
          //   status: 1,
          //   paginate:
          //     Object.keys(totalDealIds).length > 5
          //       ? Object.keys(totalDealIds).length
          //       : 5,
          // },
        },
        router
      ),
    {
      enabled: false,
      refetchOnWindowFocus: false,
      select: (data) => data.data.data,
    }
  );
  const {
    data: searchListData,
    isLoading: searchListIsLoading,
    refetch,
  } = useQuery(
    [ProductSearchAPI],
    () =>
      request(
        {
          url: ProductSearchAPI,
          params: {
            category_id: searchWithCategory
              ? searchWithCategory === "All Category"
                ? null
                : searchWithCategory
              : null,
            status: searchWithCategory ? 1 : null,
          },
        },
        router
      ),
    {
      enabled: true,
      refetchOnWindowFocus: false,
      select: (data) =>
        data.data.map((item) => ({
          original_url: item?.product_thumbnail?.original_url,
          title: item.name,
          slug: item.slug,
          categories: item?.categories,
        })),
    }
  );

  useEffect(() => {
    if (searchWithCategory !== "" && !searchListIsLoading) {
      refetch();
    }
  }, [searchWithCategory]);

  useEffect(() => {
    if (productData) {
      console.log("allProducts datadata", productData);
      setAllProducts((prev) => ({
        ...prev,
        data: productData,
        productIsLoading: productIsLoading,
      }));
    }
  }, [productData]);
  return (
    <CardsContext.Provider
      value={{
        ...props,
        searchWithCategory,
        setSearchWithCategory,
        allProducts,
        setAllProducts,
        customProduct,
        setCustomProduct,
        totalDealIds,
        setTotalDealIds,
        productRefetch,
        searchList: searchListData,
      }}
    >
      {props.children}
    </CardsContext.Provider>
  );
};
export default CardsProvider;
