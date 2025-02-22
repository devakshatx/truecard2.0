import AuthModal from "@/Components/Auth/AuthModal";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import request from "@/Utils/AxiosUtils";
import { CompareAPI } from "@/Utils/AxiosUtils/API";
import TabFocusChecker from "@/Utils/CustomFunctions/TabFocus";
import { ToastNotification } from "@/Utils/CustomFunctions/ToastNotification";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { usePathname, useSearchParams } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
import { useContext, useEffect, useState } from "react";
import ExitModal from "./ExitModal";
import Footers from "./Footer";
import Headers from "./Header";
import MobileMenu from "./Header/Widgets/MobileMenu";
import NewsLetterModal from "./NewsLetterModal";
import RecentPurchase from "./RecentPurchase";
import StickyCompare from "./StickyCompare";
import TapTop from "./TapTop";
import ThemeCustomizer from "./ThemeCustomizer";

const SubLayout = ({ children }) => {
  const isTabActive = TabFocusChecker();
  const { themeOption, setOpenAuthModal } = useContext(ThemeOptionContext);
  const [makeExitActive, setMakeExitActive] = useState(false);
  const path = useSearchParams();
  const theme = path.get("theme");
  const pathName = usePathname();
  const disableMetaTitle = ["product", "blogs", "brand"];
  const accountVerified = Cookies.get("uat");
  const authToast = Cookies.get("showAuthToast");

  const protectedRoutes = [
    `/account/dashboard`,
    `/account/notification`,
    `/account/wallet`,
    `/account/bank-details`,
    `/account/bank-details`,
    `/account/point`,
    `/account/refund`,
    `/account/order`,
    `/account/addresses`,
    `/wishlist`,
    `/compare`,
  ];

  useEffect(() => {
    if (!accountVerified && authToast && protectedRoutes.includes(pathName)) {
      ToastNotification("error", "Unauthenticated");
      setOpenAuthModal(true);
    }
    return () => Cookies.remove("showAuthToast");
  }, [pathName]);

  useEffect(() => {
    const setThemeColors = () => {
      let newThemeColor = "";
      let newThemeColor2 = "";

      newThemeColor = "#00ff66";
      newThemeColor2 = "#394868";

      setThemeColor(newThemeColor);
      setThemeColor2(newThemeColor2);
    };

    setThemeColors();
  }, [theme, pathName]);

  //  Setting the current url in cookies for redirection of protected routes
  useEffect(() => {
    if (typeof window !== "undefined") {
      Cookies.set(
        "currentPath",
        window.location.pathname + window.location.search
      );
    }
  }, [pathName, path]);

  const {
    data: CompareData,
    refetch,
    isLoading: getCompareLoading,
  } = useQuery(
    [CompareAPI],
    () => {
      if (Cookies.get("uat")) {
        return request({ url: CompareAPI });
      }
      return Promise.resolve(null); // Return null to avoid unnecessary loading
    },
    {
      enabled: false, // Initially disable fetching
      refetchOnWindowFocus: false,
      select: (res) => res?.data?.data,
    }
  );

  useEffect(() => {
    getCompareLoading && refetch();
  }, [getCompareLoading]);

  const [themeColor, setThemeColor] = useState("");
  const [themeColor2, setThemeColor2] = useState("");

  useEffect(() => {
    if (themeColor) {
      document.body.style.setProperty("--theme-color", themeColor);
    }
    if (themeColor2) {
      document.body.style.setProperty("--theme-color2", themeColor2);
    } else {
      document.body.style.removeProperty("--theme-color2");
    }
  }, [themeColor, themeColor2]);

  useEffect(() => {
    const message = themeOption?.general?.taglines;
    let timer;

    const updateTitle = (index) => {
      document.title = message[index];
      timer = setTimeout(() => {
        const nextIndex = (index + 1) % message.length;
        updateTitle(nextIndex);
      }, 500);
    };

    if (!disableMetaTitle.includes(pathName.split("/")[1].toLowerCase())) {
      if (!isTabActive && themeOption?.general?.exit_tagline_enable) {
        updateTitle(0);
      } else {
        let value =
          themeOption?.general?.site_title && themeOption?.general?.site_tagline
            ? `${themeOption?.general?.site_title} | ${themeOption?.general?.site_tagline}`
            : "Multikart Marketplace: Where Vendors Shine Together";
        document.title = value;
        clearTimeout(timer);
      }
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isTabActive, themeOption]);

  return (
    <>
      <Headers />
      {pathName?.split("/")[1].toLowerCase() != "product" && <MobileMenu />}
      {children}
      <AuthModal />
      {theme != "full_page" && <Footers />}
      <ThemeCustomizer />
      <NextTopLoader />
      <RecentPurchase />
      {themeOption?.popup?.news_letter?.is_enable && (
        <NewsLetterModal setMakeExitActive={setMakeExitActive} />
      )}
      <div className="compare-tap-top-box">
        {CompareData?.length > 0 && <StickyCompare CompareData={CompareData} />}
        <TapTop />
      </div>
      {themeOption?.popup?.exit?.is_enable && makeExitActive && (
        <ExitModal
          dataApi={themeOption?.popup?.exit}
          headerLogo={themeOption?.logo?.header_logo?.original_url}
        />
      )}
    </>
  );
};

export default SubLayout;
