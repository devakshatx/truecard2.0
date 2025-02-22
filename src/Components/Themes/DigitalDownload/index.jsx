"use client";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import BlogIdsContext from "@/Context/BlogIdsContext";
import BrandIdsContext from "@/Context/BrandIdsContext";
import ProductIdsContext from "@/Context/ProductIdsContext";
import {
  horizontalProductSlider,
  nftProductSlider,
  nftProductSlider3,
} from "@/Data/SliderSetting";
import Btn from "@/Elements/Buttons/Btn";
import Loader from "@/Layout/Loader";
import { Href, storageURL } from "@/Utils/Constants";
import useCustomDataQuery from "@/Utils/Hooks/useCustomDataQuery";
import { useSkeletonLoader2 } from "@/Utils/Hooks/useSkeleton2";
import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "reactstrap";
import HomeBlog from "../Widgets/HomeBlog";
import HomeCategorySidebar from "../Widgets/HomeCategorySidebar";
import HomeProduct from "../Widgets/HomeProduct";
import HomeProductTab from "../Widgets/HomeProductTab";
import HomeTitle from "../Widgets/HomeTitle";
import { digitalCategorySlider } from "@/Data/SliderSetting";
import { TbMoodHappy } from "react-icons/tb";
import { FaCalculator, FaExchangeAlt } from "react-icons/fa";

const filteredServices = [
  {
    title: "Quick & Clear Summaries",
    description: "No complicated terms, just essential credit card insights.",
    icon: <TbMoodHappy size={32} />,
  },
  {
    title: "Side-by-Side Comparisons",
    description: "Easily compare multiple credit cards in just minutes.",
    icon: <FaExchangeAlt size={32} />,
  },
  {
    title: "Smart Spend Planning",
    description: "Optimize rewards and maximize your credit card benefits.",
    icon: <FaCalculator size={32} />,
  },
];

const DigitalDownload = () => {
  const { data, isLoading, refetch } = useCustomDataQuery({
    params: "digital_download",
  });
  const { setGetProductIds, isRefetching: productLoad } =
    useContext(ProductIdsContext);
  const { setGetBrandIds, isLoading: brandLoading } =
    useContext(BrandIdsContext);
  const { setGetBlogIds, isLoading: blogLoading } = useContext(BlogIdsContext);
  const { t } = useTranslation("common");
  useEffect(() => {
    if (data?.products_ids?.length > 0) {
      setGetProductIds({
        ids: Array.from(new Set(data?.products_ids))?.join(","),
      });
    }
    if (data?.brands?.brand_ids?.length > 0) {
      setGetBrandIds({
        ids: Array.from(new Set(data?.brands?.brand_ids))?.join(","),
      });
    }
    // if (data?.featured_blogs?.blog_ids?.length > 0) {
    //   setGetBlogIds({ ids: Array.from(new Set(data?.featured_blogs?.blog_ids))?.join(",") });
    // }
  }, [data]);

  useEffect(() => {
    isLoading && refetch();
  }, [isLoading]);

  useEffect(() => {
    document.body.classList.add("home", "digital-download");
    return () => {
      document.body.classList.remove("home", "digital-download");
    };
  }, []);

  useSkeletonLoader2([productLoad, blogLoading, brandLoading]);
  if (isLoading && document.body) return <Loader />;

  return (
    <>
      {/* Home Banner */}
      <WrapperComponent
        classes={{ sectionClass: "p-0 height-85 nft-home overflow-hidden" }}
        customCol={true}
        style={{ backgroundColor: "#333" }}
      >
        <div className="home-slider">
          <Container>
            <Row>
              <Col>
                <div className="slider-contain">
                  <div>
                    <h1>
                      Find the Right
                      <br />
                      <span class="gradient-text">credit card for you</span>
                    </h1>
                    <p className="d-lg-block d-none">
                      Are you looking for a credit card that fits your needs?
                    </p>
                    <Btn href={Href} className="btn-solid">
                      {t("Explore Cards")}
                    </Btn>
                  </div>
                </div>
              </Col>
              <Col
                lg="7"
                xs="6"
                className=" d-md-inline-block d-none position-relative"
              >
                <div className="slider-img">
                  <img
                    src={"/images/home/cc-1.png"}
                    className="img-fluid sm-img"
                    alt=""
                  />
                  <img
                    src={"/images/home/cc-2.png"}
                    className="img-fluid"
                    alt=""
                  />
                  {/* <img
                    src={"/images/home/cc-3.png"}
                    className="img-fluid"
                    alt=""
                  /> */}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </WrapperComponent>

      {/* Category Section */}

      <Container>
        <section className="section-b-space border-section border-top-0 category-width no-arrow">
          <HomeTitle
            title={{ title: "Top Credit Card Categories" }}
            type="standard"
          />
          <HomeCategorySidebar
            sliderOptions={digitalCategorySlider}
            style="simple"
          />
        </section>
      </Container>

      {/* About Us  */}

      <WrapperComponent
        classes={{
          sectionClass: "single-about-us",
          fluidClass: "container",
          row: "g-3",
        }}
        customCol={true}
      >
        <Col lg="6">
          <div className="about-left-box">
            <h2>How TrueCards.in Helps You?</h2>
            <h4>
              We simplify credit card selection with{" "}
              <b>
                quick summaries, easy comparisons, and a Spend & Reward
                Calculator
              </b>
              —helping you choose the best card and maximize rewards
              effortlessly.
            </h4>
          </div>
        </Col>

        {filteredServices && filteredServices.length && (
          <Col lg="6">
            <ul className="about-right-box">
              {filteredServices?.map((service, i) => (
                <li className="right-box" key={i}>
                  <div className="about-img">
                    {service.icon}
                    {/* <img
                        src={storageURL + service.image_url}
                        className="img-fluid"
                        alt=""
                      /> */}
                  </div>
                  <div className="about-content">
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Col>
        )}
      </WrapperComponent>

      {/* Most Popular Credit Cards in India Slider */}

      <>
        <HomeTitle
          title={{
            title: "Credit Cards in India",
            tag: "Most Popular",
          }}
          // title={data?.products_list}
          type="basic"
        />
        <WrapperComponent
          classes={{
            sectionClass: "section-b-space pt-0 ratio_digital",
            fluidClass: "container",
          }}
          noRowCol={true}
        >
          <HomeProduct
            slider={false}
            style="vertical"
            productIds={[]}
            // productIds={[]}
            sliderOptions={nftProductSlider3}
          />
        </WrapperComponent>
      </>

      {/* Category Icon List */}
      {data?.products_list_2?.status && (
        <WrapperComponent
          classes={{
            sectionClass: "ratio_digital nft-collection-section",
            fluidClass: "container",
          }}
          customCol={true}
          style={{
            backgroundImage: `url(${
              storageURL + data?.products_list_2?.image_url
            })`,
          }}
        >
          {data?.products_list_2?.left_panel?.status && (
            <Col lg="4" className=" left-panel">
              <div className="product-left-title">
                <div>
                  <h3>{data?.products_list_2?.left_panel?.title}</h3>
                  <p>{data?.products_list_2?.left_panel?.description}</p>
                  <div className="d-flex gap-2">
                    <Btn className="btn-solid">{t("ViewAll")}</Btn>
                    {data?.products_list_2?.left_panel?.more_button && (
                      <Btn className="btn-outline">
                        {data?.products_list_2?.left_panel?.button_text}
                      </Btn>
                    )}
                  </div>
                </div>
              </div>
            </Col>
          )}
          <div
            className={
              data?.products_list_2?.left_panel?.status
                ? "col-lg-8"
                : "col-xl-12 col-lg-8"
            }
          >
            <HomeProduct
              productIds={data?.products_list_2?.products?.product_ids || []}
              style="vertical"
              slider={true}
              sliderOptions={nftProductSlider}
            />
          </div>
        </WrapperComponent>
      )}

      {/* Category Products */}
      {data?.category_product?.status && (
        <>
          <WrapperComponent
            classes={{
              sectionClass: "ratio_digital pt-0",
              fluidClass: "container",
            }}
            noRowCol={true}
          >
            <HomeTitle title={data?.category_product} type="basic" />
            <HomeProductTab
              isFilterCategoryDataNested={true}
              categoryIds={data?.category_product?.category_ids}
              style="vertical"
              slider={true}
              sliderOptions={nftProductSlider3}
            />
          </WrapperComponent>
        </>
      )}

      {/* Featured Blogs */}
      {data?.featured_blogs?.status && (
        <>
          <Container>
            <Row>
              <Col>
                <HomeTitle title={data?.featured_blogs} type="basic" />
              </Col>
            </Row>
          </Container>
          <WrapperComponent
            classes={{
              sectionClass: "blog pt-0 section-b-space ratio2_3",
              fluidClass: "container",
            }}
            colProps={{ md: "12" }}
          >
            <HomeBlog blogIds={data?.featured_blogs?.blog_ids || []} />
          </WrapperComponent>
        </>
      )}
    </>
  );
};

export default DigitalDownload;
