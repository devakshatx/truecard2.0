import { useCountdown } from "@/Utils/Hooks/useCountDown";
import { useTranslation } from "react-i18next";

const OfferTimer = ({ productState, noHeading }) => {
  const [days, hours, minutes, seconds] = useCountdown(productState?.product?.sale_starts_at, productState?.product?.sale_expired_at);
  const { t } = useTranslation("common");

  if (days + hours + minutes + seconds <= 0) {
    return null;
  } else {
    return (
      <div className="bordered-box sale-timer-box">
        {!noHeading && (
          <h4 className="sub-title">
            <span className="clock"></span> {t("SaleEndsIn")}
          </h4>
        )}
        <div className="timer ">
          <p className="demo">
            <span>
              {days}
              <span className="padding-l">:</span>
              <span className="timer-cal">{t("Days")}</span>
            </span>
            <span>
              {hours}
              <span className="padding-l">:</span>
              <span className="timer-cal">{t("Hours")}</span>
            </span>
            <span>
              {minutes}
              <span className="padding-l">:</span>
              <span className="timer-cal">{t("Min")}</span>
            </span>
            <span>
              {seconds}
              <span className="timer-cal">{t("Sec")}</span>
            </span>
          </p>
        </div>
      </div>
    );
  }
};

export default OfferTimer;
