const LUXON_DEFAULT_DATE_ONLY_FORMAT = "yyyy/LL/dd";
const LUXON_DEFAULT_TIME_ONLY_FORMAT = "HH:mm:ss";
function firstLuxonTimeTokenIndex(format) {
  return format.search(/[HhmsaSZ]/);
}
function getLuxonDateOnlyFormatMask(format, fallback = LUXON_DEFAULT_DATE_ONLY_FORMAT) {
  const timeTokenIndex = firstLuxonTimeTokenIndex(format);
  if (timeTokenIndex === -1) {
    return format;
  }
  let end = timeTokenIndex;
  while (end > 0 && " 	'T".includes(format[end - 1])) {
    end--;
  }
  const prefix = format.slice(0, end).trimEnd();
  return prefix === "" ? fallback : prefix;
}
function getLuxonTimeFormatMask(format, fallback = LUXON_DEFAULT_TIME_ONLY_FORMAT) {
  const timeTokenIndex = firstLuxonTimeTokenIndex(format);
  if (timeTokenIndex === -1) {
    return fallback;
  }
  return format.slice(timeTokenIndex);
}
export {
  getLuxonTimeFormatMask as a,
  getLuxonDateOnlyFormatMask as g
};
