//
// formatters for bootstrap-vue table
//

import { formatCurrency, formatDate } from "@/helpers";

export function currencyFormatter(value) {
  return formatCurrency(value);
}

export function currencyFormatterFourDigits(value) {
  return formatCurrency(value, {
    symbol: "&euro;",
    precision: 4,
    thousand: ".",
    decimal: ",",
    format: "%v %s"
  });
}

export function dateFormatter(value) {
  return formatDate(value);
}

export function dateWithTimeFormatter(value) {
  return formatDate(value, "DD/MM/YYYY HH:mm");
}
