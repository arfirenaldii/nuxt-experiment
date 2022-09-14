const toFixedFix = function (n, prec) {
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    const k = Math.pow(10, prec);
    return Math.round(n * k) / k;
};

/**
 * Source: https://stackoverflow.com/a/2901136
 * Examples:
 * - `number_format(1234.56)`               -> `1,235`
 * - `number_format(1234.56, 2, ',', ' ')`  -> `1 234,56`
 * - `number_format(1234.5678, 2, '.', '')` -> `1234.57`
 * - `number_format(67, 2, ',', '.')`       -> `67,00`
 * - `number_format(1000)`                  -> '1,000'
 * - `number_format(67.311, 2)`             -> `67.31`
 * - `number_format(1000.55, 1)`            -> `1,000.6`
 * - `number_format(67000, 5, ',', '.')`    -> `67.000,00000`
 * - `number_format(0.9, 0)`                -> `1`
 * - `number_format('1.20', 2)`             -> `1.20`
 * - `number_format('1.20', 4)`             -> `1.2000`
 * - `number_format('1.2000', 3)`           -> `1.200`
 */

export const numberFormat = (
    number,
    decimals = 0,
    decPoint = ".",
    thousandsSep = ","
) => {
    // http://kevin.vanzonneveld.net
    // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +     bugfix by: Michael White (http://getsprink.com)
    // +     bugfix by: Benjamin Lupton
    // +     bugfix by: Allan Jensen (http://www.winternet.no)
    // +    revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +     bugfix by: Howard Yeend
    // +    revised by: Luke Smith (http://lucassmith.name)
    // +     bugfix by: Diogo Resende
    // +     bugfix by: Rival
    // +      input by: Kheang Hok Chin (http://www.distantia.ca/)
    // +   improved by: davook
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +      input by: Jay Klehr
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +      input by: Amir Habibi (http://www.residence-mixte.com/)
    // +     bugfix by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Theriault
    // +   improved by: Drew Noakes
    const n = !isFinite(+number) ? 0 : +number;
    const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
    const sep = typeof thousandsSep === "undefined" ? "," : thousandsSep;
    const dec = typeof decPoint === "undefined" ? "." : decPoint;
    const s = (prec ? toFixedFix(n, prec) : Math.round(n)).toString().split(".");
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || "").length < prec) {
        s[1] = s[1] || "";
        s[1] += new Array(prec - s[1].length + 1).join("0");
    }
    return s.join(dec);
};

/**
 *
 * @param price Price as number
 * @param hidePrefix Whether the currency prefix should be hiddden. Defaults to false.
 * @returns
 */

export const formatRupiah = (price, { hidePrefix } = {}) => {
    if (price === null || price === undefined) return "";
    const formattedNumber = numberFormat(price, 0, ",", ".");
    const prefixString = hidePrefix ? "" : "Rp";
    return `${prefixString}${formattedNumber}`;
};

/**
 * Convert header title into slug URL:
 * - Convert characters into lower case
 * - Replace single and multiple spaces with single dash
 */

export const convertHeaderTitleIntoSlugUrl = (headerNameFromUrl = "") => {
    return headerNameFromUrl
        .toLowerCase()
        .replace(/-+/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .replace(/\s/g, "-");
};

export const toTitleCase = (str = "") => {
    return str.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.slice(1, txt.length).toLowerCase();
    });
};
