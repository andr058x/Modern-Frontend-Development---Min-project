import { formatCurrency, formatDate, formatNumberValue } from "@/helpers";

const currencyFilters = {
  install(Vue) {
    //
    // date/time
    //

    const defaultCurrencyFormat = {
      symbol: "&euro;",
      precision: 2,
      thousand: ".",
      decimal: ",",
      format: "%v %s"
    };
    const defaultNumberFormat = {
      precision: 0,
      thousand: ".",
      decimal: ",",
      zeroValue: "0"
    };

    //
    // 'pattern' --> see moment() docs for suppoted values
    Vue.filter("formatDate", function(value, pattern) {
      return formatDate(value, pattern);
    });

    //
    // number, currency...
    //
    Vue.filter("euro", function(value) {
      return formatCurrency(value, defaultCurrencyFormat);
    });

    Vue.filter("currency", function(value, options) {
      let opt = _.merge({}, defaultCurrencyFormat, options);
      return formatCurrency(value, opt);
    });

    Vue.filter("number", function(value, options) {
      let opt = _.merge({}, defaultNumberFormat, options);
      return formatNumberValue(value, opt);
    });
  }
};

export default currencyFilters;
