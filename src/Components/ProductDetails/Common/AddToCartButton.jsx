import Btn from "@/Elements/Buttons/Btn";
import { useTranslation } from "react-i18next";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { GoGitCompare } from "react-icons/go";
import CompareContext from "@/Context/CompareContext";
import { useContext } from "react";

const AddToCartButton = ({ productState, addToCart, extraOption = true }) => {
  const { addToCompare } = useContext(CompareContext);

  const { t } = useTranslation("common");

  return (
    <div className="product-buy-btn-group">
      {extraOption && (
        <Btn
          color="black"
          className={`btn-animation btn-solid hover-solid buy-button ${
            productState?.product?.status === 0 ||
            productState?.product?.stock_status == "out_of_stock" ||
            productState?.product?.quantity < productState?.productQty
              ? "btn-md scroll-button"
              : "bg-theme btn-md scroll-button"
          }`}
          onClick={addToCart}
          // disabled={
          // }
        >
          <div className="d-inline-block ring-animation">
            <RiMoneyRupeeCircleLine className="me-2" />
          </div>
          {t("Spend Calculator")}
        </Btn>
      )}

      <Btn
        className="btn-solid btn-black buy-button"
        onClick={() => addToCompare(productState?.product?.card_id)}
      >
        <div className="d-inline-block ring-animation">
          <GoGitCompare className="me-2" />
        </div>
        {t("AddToCompare")}
      </Btn>
    </div>
  );
};

export default AddToCartButton;
