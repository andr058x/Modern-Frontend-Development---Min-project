import {
  format as formatMoney,
  formatNumber
} from "accounting-js/dist/accounting.es6.js";
//import moment from "moment";

//
// currency & date converters
//

const currencyDefaultOptions = {
  symbol: "&euro;",
  precision: 2,
  thousand: ".",
  decimal: ",",
  format: "%v %s"
};

export function formatCurrency(value, format) {
  //return value;
  if (!format) {
    // by default use Euro currency format
    format = currencyDefaultOptions;
  }

  return formatMoney(value, _.merge({}, currencyDefaultOptions, format));
}

export function formatNumberValue(value, format) {
  if (!format) {
    format = { decimal: ",", thousand: ".", precision: 0, zeroValue: "0" };
  }
  var result = formatNumber(value, _.merge({}, currencyDefaultOptions, format));
  if (result == 0) {
    return format.zeroValue;
  }
  return result;
}

// export function formatDate(value, pattern) {
//   if (!pattern) {
//     pattern = "DD/MM/YYYY";
//   }
//   return moment(value).format(pattern);
// }

export function trimHtml(value) {
  let val = value.replace(/< (. | \n) *?>/g, "");
  return val;
}
