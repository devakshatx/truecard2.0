const fallback_url = `/credit-cards`;

const getCardViewUrl = (card_name) => {
  if (card_name) return `/credit-cards/${card_name.replace(/ /g, "-")}`;
  else return fallback_url;
};

const getBankViewUrl = (bank_name) => {
  if (bank_name) return `/credit-cards/bank/${bank_name.replace(/ /g, "-")}`;
  else return fallback_url;
};

const getCateViewUrl = (cate_name) => {
  if (cate_name)
    return `/credit-cards/category/${cate_name.replace(/ /g, "-")}`;
  else return fallback_url;
};

const getRewardCalcUrl = (card_name) => {
  if (card_name) return `/reward-calculator/${card_name.replace(/ /g, "-")}`;
  else return fallback_url;
};
const getLoungeAccessUrl = (card_name) => {
  if (card_name) return `/lounge-access/${card_name.replace(/ /g, "-")}`;
  else return fallback_url;
};
const getCompareCardUrl = (card_key) => {
  if (card_key) return `/compare-credit-cards/${card_key}`;
  return fallback_url;
};

module.exports = {
  getCardViewUrl,
  getBankViewUrl,
  getCateViewUrl,
  getRewardCalcUrl,
  getLoungeAccessUrl,
  getCompareCardUrl,
};
