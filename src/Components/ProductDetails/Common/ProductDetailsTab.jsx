import NavTabTitles from "@/Components/Widgets/NavTabs";
import NoDataFound from "@/Components/Widgets/NoDataFound";
import TextLimit from "@/Utils/CustomFunctions/TextLimit";
import { useState } from "react";
import { Col, Row, TabContent, TabPane } from "reactstrap";
import CustomerReview from "./CustomerReview";
import QnATab from "./QnATab";
import { RiArrowDownSLine } from "react-icons/ri";
import Btn from "@/Elements/Buttons/Btn";

const ProductDetailsTab = ({ productState }) => {
  let [showMore, setShowMore] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const ProductDetailsTabTitle = [
    { id: 1, name: "Overview" },
    { id: 2, name: "Reward Rate" },
    { id: 3, name: "Pro/Cons" },
    { id: 4, name: "QA" },
    { id: 5, name: "Review" },
  ];

  const seeMore = () => {
    setShowMore(!showMore);
  };
  return (
    <Col sm={12} lg={12}>
      <NavTabTitles
        classes={{ navClass: "nav nav-tabs nav-material" }}
        titleList={ProductDetailsTabTitle}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabContent className="nav-material" activeTab={activeTab}>
        <TabPane className={activeTab == 1 ? "show active" : ""}>
          <div
            className={`product-description more-less-box ${
              showMore ? "more" : ""
            }`}
          >
            {productState?.product?.paragraph?.length > 1500 ? (
              showMore ? (
                <TextLimit
                  classes={"more-text"}
                  value={productState?.product?.paragraph}
                />
              ) : (
                <TextLimit
                  classes={"more-text"}
                  value={productState?.product?.paragraph?.substring(
                    0,
                    productState?.product?.paragraph?.length / 2
                  )}
                />
              )
            ) : (
              <TextLimit
                classes={"more-text"}
                value={productState?.product?.paragraph}
              />
            )}
            {productState?.product?.paragraph?.length > 1500 && (
              <Btn
                className="btn-solid hover-solid bg-theme btn-md scroll-button btn-sm mt-3 more-lest-btn"
                onClick={seeMore}
              >
                {showMore ? "Show Less" : "Show more"}
                <RiArrowDownSLine />
              </Btn>
            )}

            <div className="nft__item_moreinfo">
              <div>
                <h4>Features</h4>
                <div
                  dangerouslySetInnerHTML={{
                    __html: productState?.product?.features,
                  }}
                />
              </div>
              <div>
                <h4>Welcome Offer</h4>
                <div
                  dangerouslySetInnerHTML={{
                    __html: productState?.product?.welcome_offer,
                  }}
                />
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane className={activeTab == 2 ? "show active" : ""}>
          <div className={""}>
            <div>
              <h5>Rewards</h5>
              <ul>
                {productState?.product?.reward_category?.map(
                  (rewardRecord, idx) => (
                    <li
                      key={`${productState?.product?.card_name}-reward-${idx}`}
                    >
                      {rewardRecord.description}
                    </li>
                  )
                )}
              </ul>
              <h5>Redeemption Rate</h5>
              <ul>
                {productState?.product?.redeem_options?.map(
                  (redeemRecord, idx) => (
                    <li
                      key={`${productState?.product?.card_name}-redeem-${idx}`}
                    >
                      {`${redeemRecord.name} (1RP = ₹${redeemRecord.ratePerPoint}) `}
                    </li>
                  )
                )}
              </ul>
              <div
                role="button"
                className="btn-main sec nft__item_actn "
                // onClick={() => handleViewRewardCalc(navigate, productState?.product?.card_name)}
              >
                Calculate Reward
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane className={activeTab == 3 ? "show active" : ""}>
          <div className={" "}>
            <div>
              <h5>Pros</h5>
              <ul>
                {productState?.product?.pros?.map((pros, idx) => (
                  <li key={`${productState?.product?.card_name}-pros-${idx}`}>
                    {pros}
                  </li>
                ))}
              </ul>
              <h5>Cons</h5>
              <ul>
                {productState?.product?.cons?.map((cons, idx) => (
                  <li key={`${productState?.product?.card_name}-cons-${idx}`}>
                    {cons}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TabPane>
        <TabPane className={activeTab == 4 ? "show active" : ""}>
          <div className="single-product-tables ">
            <Row>
              {productState?.product?.can_review ||
              productState?.product?.reviews_count ? (
                <CustomerReview productState={productState} />
              ) : (
                <Col xl={12}>
                  <NoDataFound
                    customClass="no-data-added"
                    title="NoReviewYet"
                    description="NoReviewYetDescription"
                  />
                </Col>
              )}
            </Row>
          </div>
        </TabPane>
        <TabPane className={activeTab == 5 ? "show active" : ""}>
          <QnATab productState={productState} activeTab={activeTab} />
        </TabPane>
      </TabContent>
    </Col>
  );
};

export default ProductDetailsTab;
