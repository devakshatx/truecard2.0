import NoDataFound from "@/Components/Widgets/NoDataFound";
import CategoryContext from "@/Context/CategoryContext";
import { ImagePath } from "@/Utils/Constants";
import Link from "next/link";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import { Col, Row } from "reactstrap";
import {
  FaCreditCard,
  FaMoneyBill,
  FaPlane,
  FaCar,
  FaShoppingCart,
  FaTrophy,
} from "react-icons/fa";

const iconMapping = {
  "fa-credit-card": <FaCreditCard size={40} />,
  "fa-money": <FaMoneyBill size={40} />,
  "fa-plane": <FaPlane size={40} />,
  "fa-car": <FaCar size={40} />,
  "fa-shopping-cart": <FaShoppingCart size={40} />,
  "fa-trophy": <FaTrophy size={40} />,
};

const HomeCategorySidebar = ({
  categoryIds = [],
  height,
  width,
  style,
  slider,
  sliderOptions,
}) => {
  const { t } = useTranslation("common");
  const { categoryData } = useContext(CategoryContext);

  const filterCategoryData = (categoryData, categoryIds) => {
    if (categoryIds?.length === 0) return categoryData;
    if (!categoryData || !categoryIds) {
      return [];
    }

    const filteredCategories = [];
    const filteredSubCategoryIds = new Set(categoryIds);

    const filterCategory = (category) => {
      if (filteredSubCategoryIds.has(category.id)) {
        filteredCategories.push(category);
      }
      if (category.subcategories) {
        category.subcategories.forEach((subcategory) => {
          filterCategory(subcategory);
        });
        return;
      }
    };
    categoryData.forEach(filterCategory);
    return filteredCategories;
  };

  const mainCategories = filterCategoryData(categoryData, categoryIds);
  const categorySliderSettingMain =
    sliderOptions && sliderOptions(mainCategories?.length);

  return (
    <>
      {mainCategories?.length ? (
        <>
          {style == "standard" && (
            <Row>
              {slider ? (
                <Col>
                  <Slider {...categorySliderSettingMain}>
                    {mainCategories?.map((category, i) => (
                      <div key={i} className="category-block">
                        <Link href={`/category/${category?.slug}`}>
                          <div className="category-image svg-image">
                            <div className="img-sec">
                              <img
                                src={
                                  category.category_icon
                                    ? category.category_icon.original_url
                                    : `${ImagePath}/placeholder/category.png`
                                }
                                className="img-fluid"
                                alt={category?.name}
                              />
                            </div>
                          </div>
                        </Link>
                        <div className="category-details">
                          <Link href={`/category/${category?.slug}`}>
                            <h5>{category.name}</h5>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </Col>
              ) : (
                mainCategories?.map((category, i) => (
                  <div key={i} className="col-xl-2 col-sm-3 col-4">
                    <div className="category-block">
                      <Link href={`/category/${category?.slug}`}>
                        <div className="category-image svg-image">
                          <div className="img-sec">
                            <img
                              src={
                                category.category_icon
                                  ? category.category_icon.original_url
                                  : `${ImagePath}/placeholder/category.png`
                              }
                              className="img-fluid"
                              alt={category?.name}
                            />
                          </div>
                        </div>
                      </Link>
                      <div className="category-details">
                        <Link href={`/category/${category?.slug}`}>
                          <h5>{category.name}</h5>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </Row>
          )}

          {style === "simple" && (
            <Row>
              {slider ? (
                <Col>
                  <div className="category-5">
                    <Slider {...categorySliderSettingMain}>
                      {mainCategories.map((category, index) => (
                        <div className="category-block" key={index}>
                          <Link href={`/category/${category?.slug}`}>
                            <div className="category-image">
                              <img
                                src={
                                  category.category_image
                                    ? category.category_image.original_url
                                    : `${ImagePath}/placeholder/category.png`
                                }
                                className="img-fluid"
                                alt={category.name}
                              />
                            </div>
                          </Link>
                          <div className="category-details">
                            <Link href={`/category/${category?.slug}`}>
                              <h5>{category?.name}</h5>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </Col>
              ) : (
                mainCategories.map((category, index) => (
                  <div className="col-xl-2 col-sm-3 col-4" key={index}>
                    <div className="category-block">
                      <Link href={`/category/${category?.name}`}>
                        <div className="category-image">
                          {iconMapping[category?.icon]}
                          {/* <img
                            src={
                              category?.category_image
                                ? category?.category_image?.original_url
                                : `${ImagePath}/placeholder/category.png`
                            }
                            className="img-fluid"
                            alt={category.name}
                          /> */}
                        </div>
                      </Link>
                      <div className="category-details">
                        <Link href={`/category/${category?.slug}`}>
                          <h5>{category.name}</h5>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </Row>
          )}
        </>
      ) : (
        <NoDataFound title="NoCategoryFound" customClass="no-data-added" />
      )}
    </>
  );
};

export default HomeCategorySidebar;
