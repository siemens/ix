import { I as Info, D as DateTime } from "./date-time-locale-CgHCyd5r-CshVRSUN.js";
const MONTHS_IN_YEAR = 12;
const DAYS_IN_WEEK = 7;
const MONDAY = 0;
function weekStartFrom(value) {
  if (!Number.isFinite(value)) {
    return MONDAY;
  }
  return normaliseColumn(Math.floor(value));
}
function monthsOfYear(year) {
  return Array.from({ length: MONTHS_IN_YEAR }, (_, offset) => DateTime.local(year, offset + 1));
}
function monthNameOf(month, locale) {
  return month.setLocale(locale ?? month.locale ?? "en").toFormat("LLLL");
}
function dayOfMonth(month, day) {
  return month.set({ day });
}
function weekdayNamesFrom(weekStart, locale) {
  const names = Info.weekdays("long", { locale });
  return Array.from({ length: DAYS_IN_WEEK }, (_, column) => names[(column + weekStart) % DAYS_IN_WEEK]);
}
function weekdayColumnOf(date, weekStart = MONDAY) {
  return normaliseColumn(date.weekday - 1 - weekStart);
}
function normaliseColumn(value) {
  return (value % DAYS_IN_WEEK + DAYS_IN_WEEK) % DAYS_IN_WEEK;
}
const ISO_WEEK_ANCHOR = 4;
function weekNumberOfRow(rowStart) {
  const daysToThursday = normaliseColumn(ISO_WEEK_ANCHOR - rowStart.weekday);
  return rowStart.plus({ days: daysToThursday }).weekNumber;
}
function calendarRowsFor(month, weekStart = MONDAY) {
  const monthStart = month.startOf("month");
  const daysInMonth = monthStart.daysInMonth ?? 0;
  const leadingBlanks = weekdayColumnOf(monthStart, weekStart);
  const rows = [];
  for (let offset = -leadingBlanks; offset < daysInMonth; offset += DAYS_IN_WEEK) {
    const dayNumbers = Array.from({ length: DAYS_IN_WEEK }, (_, column) => {
      const day = offset + column + 1;
      return day >= 1 && day <= daysInMonth ? day : void 0;
    });
    rows.push({
      weekNumber: weekNumberOfRow(monthStart.plus({ days: offset })),
      dayNumbers
    });
  }
  return rows;
}
function isDayWithinRange(date, min, max) {
  const day = date.startOf("day");
  const isBefore = min ? day < min.startOf("day") : false;
  const isAfter = max ? day > max.startOf("day") : false;
  return !isBefore && !isAfter;
}
function isMonthWithinRange(month, min, max) {
  const monthStart = month.startOf("month");
  const isBefore = min ? monthStart < min.startOf("month") : false;
  const isAfter = max ? monthStart > max.startOf("month") : false;
  return !isBefore && !isAfter;
}
function isYearWithinRange(year, min, max) {
  const isBefore = min ? year < min.year : false;
  const isAfter = max ? year > max.year : false;
  return !isBefore && !isAfter;
}
function isSameDayOrUnset(a, b) {
  if (!a || !b) {
    return !a && !b;
  }
  return a.hasSame(b, "day");
}
function isSameRange(a, b) {
  return isSameDayOrUnset(a.from, b.from) && isSameDayOrUnset(a.to, b.to);
}
function isPartialRange(range) {
  return !!range.from && !range.to;
}
export {
  isSameDayOrUnset as a,
  isSameRange as b,
  calendarRowsFor as c,
  weekdayNamesFrom as d,
  dayOfMonth as e,
  isYearWithinRange as f,
  isMonthWithinRange as g,
  isDayWithinRange as h,
  isPartialRange as i,
  monthNameOf as j,
  monthsOfYear as m,
  weekStartFrom as w
};
