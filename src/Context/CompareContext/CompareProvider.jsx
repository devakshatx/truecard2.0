import request from "@/Utils/AxiosUtils";
import { CompareAPI } from "@/Utils/AxiosUtils/API";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import CompareContext from ".";

const CompareProvider = (props) => {
  const [compareState, setCompareState] = useState([]);
  const [openCompareSidebar, setOpenCompareSidebar] = useState(false);

  // Add product to compare list
  const addToCompare = (card_id) => {
    console.log("compare", compareState, card_id);
    setCompareState((prev) => {
      // Avoid duplicate entries
      if (prev.includes(card_id)) return prev;
      return [...prev, card_id];
    });
  };

  // Remove product from compare list
  const removeFromCompare = (id) => {
    setCompareState((prev) => prev.filter((card_id) => card_id !== id));
  };

  // Clear all compared products
  const clearCompare = () => {
    setCompareState([]);
  };

  return (
    <CompareContext.Provider
      value={{
        ...props,
        openCompareSidebar,
        setOpenCompareSidebar,
        compareState,
        setCompareState,
        addToCompare,
        removeFromCompare,
        clearCompare,
      }}
    >
      {props.children}
    </CompareContext.Provider>
  );
};

export default CompareProvider;
