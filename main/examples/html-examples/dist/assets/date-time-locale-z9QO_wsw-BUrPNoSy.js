import { D as DateTime } from "./datetime-D1WplX1z-grPSvmS5.js";
function formatWithLocale(dt, format, locale) {
  return locale ? dt.toFormat(format, { locale }) : dt.toFormat(format);
}
function parseWithLocale(value, format, locale) {
  return DateTime.fromFormat(value, format, { locale });
}
function tryParseWithLocale(value, format, locale, outputError = true) {
  const date = parseWithLocale(value, format, locale);
  if (!date.isValid) {
    if (outputError) {
      console.error(date.invalidExplanation);
    }
    return void 0;
  }
  return date;
}
function toISODate(dt) {
  return dt?.isValid ? dt.toISODate() ?? void 0 : void 0;
}
function toISOTime(dt) {
  return dt?.isValid ? dt.toISOTime() ?? void 0 : void 0;
}
export {
  toISOTime as a,
  tryParseWithLocale as b,
  formatWithLocale as f,
  parseWithLocale as p,
  toISODate as t
};
