import NoDataFound from "@/Components/Widgets/NoDataFound";
import ProductBox from "@/Components/Widgets/ProductBox";
import CardsContext from "@/Context/CardsContext";
import ProductIdsContext from "@/Context/ProductIdsContext";
import React, { useContext, useMemo } from "react";
import Slider from "react-slick";
import { Row } from "reactstrap";

const HomeProduct = ({
  type,
  style,
  slider = false,
  productIds,
  product_box_style,
  classForVertical,
  sliderOptions,
  rowClass,
}) => {
  const { allProducts, filteredProduct } = useContext(ProductIdsContext);

  const products = useMemo(() => {
    return allProducts
      ?.filter(
        (el) => productIds.length === 0 || productIds?.includes(el.card_id)
      )
      .slice(0, 3);
  }, [allProducts, productIds]);

  // const verticalSettings = { slidesToShow: 5, ...sliderOptions };
  const sliderSettingMain = sliderOptions && sliderOptions(productIds?.length);
  console.log("datadata in page AllProducts", products);
  return (
    <>
      {style === "horizontal" ? (
        slider ? (
          products?.length ? (
            <Slider {...sliderSettingMain}>
              {products?.map((product, index) => (
                <div key={product.card_name}>
                  <div className="theme-card center-align d-block">
                    <div className="offer-slider">
                      <div className="sec-1">
                        <div className="product-box2">
                          <ProductBox product={product} style={style} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <NoDataFound title="NoProductFound" customClass={"no-data-added"} />
          )
        ) : product_box_style == "single_product" ? (
          products?.map((product, i) => (
            <ProductBox
              key={i}
              product={product}
              style={style}
              boxStyle={product_box_style}
            />
          ))
        ) : product_box_style === "horizontal" ? (
          <div className="row g-3">
            {products?.map((product, index) => (
              <div key={index} className="col-xl-3 col-md-6 col-sm-12">
                <div className="theme-card center-align">
                  <div className="offer-slider">
                    <div className="sec-1">
                      <div className="product-box2 product-box">
                        <ProductBox product={product} style={style} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {products?.length === 0 && (
              <NoDataFound
                title="NoProductFound"
                customClass={"no-data-added"}
              />
            )}
          </div>
        ) : (
          <div>
            {products?.map((product, index) => (
              <ProductBox
                key={index}
                product={product}
                style={style}
                boxStyle={product_box_style}
              />
            ))}
            {products?.length === 0 && (
              <NoDataFound
                title="NoProductFound"
                customClass={"no-data-added"}
              />
            )}
          </div>
        )
      ) : style === "vertical" ? (
        slider ? (
          <div className={`product-4 ${classForVertical || ""}`}>
            {products?.length ? (
              <Slider {...sliderSettingMain}>
                {products?.map((product, index) => (
                  <div key={index}>
                    <div className={classForVertical}>
                      <ProductBox product={product} style={style} />
                    </div>
                  </div>
                ))}
              </Slider>
            ) : (
              <NoDataFound title="NoProductFound" customClass="no-data-added" />
            )}
          </div>
        ) : (
          <>
            <Row
              className={
                rowClass
                  ? rowClass
                  : "row-cols-xl-4 row-cols-md-3 row-cols-2 g-sm-4 g-3 m-0"
              }
            >
              {products?.map((product, index) => (
                <div key={index} className={classForVertical}>
                  <ProductBox product={product} style={style} />
                </div>
              ))}
            </Row>
            {products?.length === 0 && (
              <NoDataFound title="NoProductFound" customClass="no-data-added" />
            )}
          </>
        )
      ) : null}
    </>
  );
};
export default HomeProduct;
