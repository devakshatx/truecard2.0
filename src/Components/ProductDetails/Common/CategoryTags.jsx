import { useContext } from "react";
import { useTranslation } from "react-i18next";
import CategoryContext from "@/Context/CategoryContext";

const PaymentOptions = ({ productState }) => {
  const { categoryData } = useContext(CategoryContext);

  const { t } = useTranslation("common");
  return (
    <>
      {productState?.product?.welcome_benefits ? (
        <div className="paymnet-option">
          <div className="dashed-border-box">
            <h4 className="sub-title">{t("Top Categories")}</h4>
            <div className="category_tags">
              {productState?.product?.welcome_benefits
                ?.replace(/'/g, "")
                .split(",")
                .map((itm) => {
                  const _cate = categoryData?.find((cate) => cate.name === itm);
                  return (
                    <div key={`category_${itm}`} className="category_tag">
                      <i className={`fa ${_cate?.icon || "fa-heart"}`} />
                      {itm}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PaymentOptions;
