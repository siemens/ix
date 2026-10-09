import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-CU4RCWGK.js";
import { Q as iconChevronLeftSmall, u as iconChevronRightSmall } from "./index-BeX6RWvV-CXzUIwMU.js";
import { D as DateTime, I as Info } from "./datetime-D1WplX1z-grPSvmS5.js";
import { b as tryParseWithLocale, p as parseWithLocale, f as formatWithLocale, t as toISODate } from "./date-time-locale-z9QO_wsw-BUrPNoSy.js";
import { q as queryElements } from "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
import { D as DefaultMixins, h as hasKeyboardMode } from "./component-BP5Ot-Ed-DlnqSJRp.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { r as requestAnimationFrameNoNgZone } from "./requestAnimationFrame-BEuV0Xpe-CBtvTq-Q.js";
import "./shadow-dom-C7UpA3Tm-CtINZypD.js";
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
const datePickerCss = () => `@charset "UTF-8";:host{--ix-button--outline-color--focus:var(--si-sys-color-effects-focus);--ix-button-danger-primary--background:var(--si-sys-color-background-danger);--ix-button-danger-primary--background--active:var(--si-sys-color-background-danger-active);--ix-button-danger-primary--background--disabled:var(--si-sys-color-background-1);--ix-button-danger-primary--background--hover:var(--si-sys-color-background-danger-hover);--ix-button-danger-primary--border-color:rgba(0, 0, 0, 0);--ix-button-danger-primary--border-color--active:rgba(0, 0, 0, 0);--ix-button-danger-primary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-danger-primary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-danger-primary--color:var(--si-sys-color-text-on-danger);--ix-button-danger-primary--color--active:var(--si-sys-color-text-on-danger);--ix-button-danger-primary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-danger-primary--color--hover:var(--si-sys-color-text-on-danger);--ix-button-danger-secondary--background:rgba(0, 0, 0, 0);--ix-button-danger-secondary--background--active:var(--si-sys-color-background-danger-active);--ix-button-danger-secondary--background--disabled:rgba(0, 0, 0, 0);--ix-button-danger-secondary--background--hover:var(--si-sys-color-background-danger-hover);--ix-button-danger-secondary--border-color:var(--si-sys-color-text-danger);--ix-button-danger-secondary--border-color--active:var(--si-sys-color-border-danger);--ix-button-danger-secondary--border-color--disabled:var(--si-sys-color-border-3);--ix-button-danger-secondary--border-color--hover:var(--si-sys-color-border-danger);--ix-button-danger-secondary--color:var(--si-sys-color-text-danger);--ix-button-danger-secondary--color--active:var(--si-sys-color-text-on-danger);--ix-button-danger-secondary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-danger-secondary--color--hover:var(--si-sys-color-text-on-danger);--ix-button-danger-tertiary--background:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--background--active:var(--si-sys-color-background-danger-active);--ix-button-danger-tertiary--background--disabled:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--background--hover:var(--si-sys-color-background-danger-hover);--ix-button-danger-tertiary--border-color:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--border-color--active:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--color:var(--si-sys-color-text-danger);--ix-button-danger-tertiary--color--active:var(--si-sys-color-text-on-danger);--ix-button-danger-tertiary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-danger-tertiary--color--hover:var(--si-sys-color-text-on-danger);--ix-button-primary--background:var(--si-sys-color-background-accent);--ix-button-primary--background--active:var(--si-sys-color-background-accent-active);--ix-button-primary--background--disabled:var(--si-sys-color-background-1);--ix-button-primary--background--hover:var(--si-sys-color-background-accent-hover);--ix-button-primary--background--pressed:var(--si-sys-color-background-accent-hover);--ix-button-primary--background--pressed-active:var(--si-sys-color-background-accent-active);--ix-button-primary--background--pressed-hover:var(--si-sys-color-background-accent-hover);--ix-button-primary--border-color:rgba(0, 0, 0, 0);--ix-button-primary--border-color--active:rgba(0, 0, 0, 0);--ix-button-primary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-primary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-primary--border-color--pressed:rgba(0, 0, 0, 0);--ix-button-primary--border-color--pressed-hover:rgba(0, 0, 0, 0);--ix-button-primary--border-color--pressed-hover-active:rgba(0, 0, 0, 0);--ix-button-primary--color:var(--si-sys-color-text-on-accent);--ix-button-primary--color--active:var(--si-sys-color-text-on-accent);--ix-button-primary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-primary--color--hover:var(--si-sys-color-text-on-accent);--ix-button-primary--color--pressed:var(--si-sys-color-text-on-accent);--ix-button-primary--color--pressed-active:var(--si-sys-color-text-on-accent);--ix-button-primary--color--pressed-hover:var(--si-sys-color-text-on-accent);--ix-button-secondary--background:var(--si-sys-color-background-accent-secondary);--ix-button-secondary--background--active:var(--si-sys-color-background-accent-secondary-active);--ix-button-secondary--background--disabled:rgba(0, 0, 0, 0);--ix-button-secondary--background--hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button-secondary--background--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button-secondary--background--pressed-active:var(--si-sys-color-background-accent-secondary-active);--ix-button-secondary--background--pressed-hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button-secondary--border-color:var(--si-sys-color-border-accent);--ix-button-secondary--border-color--active:var(--si-sys-color-border-accent-active);--ix-button-secondary--border-color--disabled:var(--si-sys-color-border-3);--ix-button-secondary--border-color--hover:var(--si-sys-color-border-accent-hover);--ix-button-secondary--border-color--pressed:var(--si-sys-color-border-accent-hover);--ix-button-secondary--border-color--pressed-active:var(--si-sys-color-border-accent-active);--ix-button-secondary--border-color--pressed-hover:var(--si-sys-color-border-accent-hover);--ix-button-secondary--color:var(--si-sys-color-text-accent);--ix-button-secondary--color--active:var(--si-sys-color-text-accent-active);--ix-button-secondary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-secondary--color--hover:var(--si-sys-color-text-accent-hover);--ix-button-secondary--color--pressed:var(--si-sys-color-text-accent-hover);--ix-button-secondary--color--pressed-active:var(--si-sys-color-text-accent-active);--ix-button-secondary--color--pressed-hover:var(--si-sys-color-text-accent-hover);--ix-button-subtle-primary--background:var(--si-sys-color-background-2);--ix-button-subtle-primary--background--active:var(--si-sys-color-background-selected);--ix-button-subtle-primary--background--disabled:var(--si-sys-color-background-1);--ix-button-subtle-primary--background--hover:var(--si-sys-color-background-hover);--ix-button-subtle-primary--background--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button-subtle-primary--background--pressed-active:var(--si-sys-color-background-accent-secondary-active);--ix-button-subtle-primary--background--pressed-hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button-subtle-primary--border-color:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--active:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--pressed:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--pressed-active:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--pressed-hover:rgba(0, 0, 0, 0);--ix-button-subtle-primary--color:var(--si-sys-color-text-primary);--ix-button-subtle-primary--color--active:var(--si-sys-color-text-primary);--ix-button-subtle-primary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-subtle-primary--color--hover:var(--si-sys-color-text-primary);--ix-button-subtle-primary--color--pressed:var(--si-sys-color-text-accent-hover);--ix-button-subtle-primary--color--pressed-active:var(--si-sys-color-text-accent-hover);--ix-button-subtle-primary--color--pressed-hover:var(--si-sys-color-text-accent-hover);--ix-button-subtle-secondary--background:rgba(0, 0, 0, 0);--ix-button-subtle-secondary--background--active:var(--si-sys-color-background-selected);--ix-button-subtle-secondary--background--disabled:rgba(0, 0, 0, 0);--ix-button-subtle-secondary--background--hover:var(--si-sys-color-background-hover);--ix-button-subtle-secondary--background--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button-subtle-secondary--background--pressed-active:var(--si-sys-color-background-accent-secondary-active);--ix-button-subtle-secondary--background--pressed-hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button-subtle-secondary--border-color:var(--si-sys-color-border-2);--ix-button-subtle-secondary--border-color--active:var(--si-sys-color-border-2);--ix-button-subtle-secondary--border-color--disabled:var(--si-sys-color-border-3);--ix-button-subtle-secondary--border-color--hover:var(--si-sys-color-border-2);--ix-button-subtle-secondary--border-color--pressed:var(--si-sys-color-border-2);--ix-button-subtle-secondary--border-color--pressed-active:var(--si-sys-color-border-2);--ix-button-subtle-secondary--border-color--pressed-hover:var(--si-sys-color-border-2);--ix-button-subtle-secondary--color:var(--si-sys-color-text-primary);--ix-button-subtle-secondary--color--active:var(--si-sys-color-text-primary);--ix-button-subtle-secondary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-subtle-secondary--color--hover:var(--si-sys-color-text-primary);--ix-button-subtle-secondary--color--pressed:var(--si-sys-color-text-accent-hover);--ix-button-subtle-secondary--color--pressed-active:var(--si-sys-color-text-accent-hover);--ix-button-subtle-secondary--color--pressed-hover:var(--si-sys-color-text-accent-hover);--ix-button-subtle-tertiary--background:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--background--active:var(--si-sys-color-background-selected);--ix-button-subtle-tertiary--background--disabled:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--background--hover:var(--si-sys-color-background-hover);--ix-button-subtle-tertiary--background--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button-subtle-tertiary--background--pressed-active:var(--si-sys-color-background-accent-secondary-active);--ix-button-subtle-tertiary--background--pressed-hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button-subtle-tertiary--border-color:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--active:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--pressed:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--pressed-active:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--pressed-hover:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--color:var(--si-sys-color-text-primary);--ix-button-subtle-tertiary--color--active:var(--si-sys-color-text-primary);--ix-button-subtle-tertiary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-subtle-tertiary--color--hover:var(--si-sys-color-text-primary);--ix-button-subtle-tertiary--color--pressed:var(--si-sys-color-text-accent-hover);--ix-button-subtle-tertiary--color--pressed-active:var(--si-sys-color-text-accent-hover);--ix-button-subtle-tertiary--color--pressed-hover:var(--si-sys-color-text-accent-hover);--ix-button-tertiary--background:rgba(0, 0, 0, 0);--ix-button-tertiary--background--active:var(--si-sys-color-background-accent-secondary-active);--ix-button-tertiary--background--disabled:rgba(0, 0, 0, 0);--ix-button-tertiary--background--hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button-tertiary--background--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button-tertiary--background--pressed-active:var(--si-sys-color-background-accent-secondary-active);--ix-button-tertiary--background--pressed-hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button-tertiary--border-color:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--active:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--pressed:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--pressed-active:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--pressed-hover:rgba(0, 0, 0, 0);--ix-button-tertiary--color:var(--si-sys-color-text-accent);--ix-button-tertiary--color--active:var(--si-sys-color-text-accent-active);--ix-button-tertiary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-tertiary--color--hover:var(--si-sys-color-text-accent-hover);--ix-button-tertiary--color--pressed:var(--si-sys-color-text-accent-hover);--ix-button-tertiary--color--pressed-active:var(--si-sys-color-text-accent-active);--ix-button-tertiary--color--pressed-hover:var(--si-sys-color-text-accent-hover)}:host{--ix-button--border-radius:var(--si-sys-sizing-border-radius-xs);--ix-button--border-width:var(--si-sys-sizing-border-width-default);--ix-button--outline-width--focus:var(--si-sys-sizing-border-width-default);--ix-button--focus--outline-offset:var(--si-sys-sizing-focus-ring-offset);--ix-button--padding:0 var(--si-sys-sizing-spacing-x-40);--ix-button--height:var(--si-sys-sizing-size-80);--ix-button--margin-right:var(--si-sys-sizing-spacing-x-20);--ix-button-icon--margin-right:var(--si-sys-sizing-spacing-x-20);--ix-button-icon-right--margin-left:var(--si-sys-sizing-spacing-x-20);--ix-button--min-width:var(--si-sys-sizing-size-120)}:host{--ix-date-picker-day--outline-color--focus:var(--si-sys-color-effects-focus);--ix-date-picker-day--background:rgba(0, 0, 0, 0);--ix-date-picker-day--background--active:var(--si-sys-color-background-active);--ix-date-picker-day--background--disabled:rgba(0, 0, 0, 0);--ix-date-picker-day--background--hover:var(--si-sys-color-background-hover);--ix-date-picker-day--background--range:var(--si-sys-color-background-active);--ix-date-picker-day--background--range-active:var(--si-sys-color-background-accent-secondary-active);--ix-date-picker-day--background--range-disabled:var(--si-sys-color-background-1);--ix-date-picker-day--background--range-hover:var(--si-sys-color-background-accent-secondary-hover);--ix-date-picker-day--background--selected:var(--si-sys-color-background-accent);--ix-date-picker-day--background--selected-active:var(--si-sys-color-background-accent-active);--ix-date-picker-day--background--selected-disabled:var(--si-sys-color-background-1);--ix-date-picker-day--background--selected-hover:var(--si-sys-color-background-accent-hover);--ix-date-picker-day--color:var(--si-sys-color-text-accent);--ix-date-picker-day--color--disabled:var(--si-sys-color-text-disabled);--ix-date-picker-day--color--range:var(--si-sys-color-text-primary);--ix-date-picker-day--color--range-disabled:var(--si-sys-color-text-disabled);--ix-date-picker-day--color--selected:var(--si-sys-color-text-on-accent);--ix-date-picker-day--color--selected-disabled:var(--si-sys-color-text-disabled);--ix-date-picker-today--border-color:var(--si-sys-color-border-accent);--ix-date-picker-today--contrast-ring-color:var(--si-sys-color-background-0);--ix-date-picker-today--border-color--range-disabled:var(--si-sys-color-background-1);--ix-date-picker-weekday--color:var(--si-sys-color-text-secondary);--ix-date-picker-menu-item--color:var(--si-sys-color-text-primary);--ix-date-picker-list-item--background--hover:var(--si-sys-color-background-hover);--ix-date-picker-list-item--background--selected:var(--si-sys-color-background-selected)}:host{--ix-date-picker-day--font-weight--selected:var(     --si-ref-typography-font-weight-bold   );--ix-date-picker-weekday--font-size:var(--si-ref-typography-font-size-code);--ix-date-picker--focus--outline-offset:var(--si-sys-sizing-focus-ring-offset);--ix-date-picker--max-width:calc(     var(--si-sys-sizing-size-170) + var(--si-sys-sizing-spacing-x-60)   );--ix-date-picker-selector--padding:0 var(--si-sys-sizing-spacing-x-60);--ix-date-picker-arrow-year--padding:var(--si-sys-sizing-spacing-y-50) var(--si-sys-sizing-spacing-x-90);--ix-date-picker-arrow-position--left:calc(     (var(--si-sys-sizing-size-90) / 2) - var(--si-sys-sizing-spacing-x-30)   );--ix-date-picker-arrow-position--top:calc(     50% - var(--si-sys-sizing-spacing-y-40)   );--ix-date-picker-check-position--left:calc(     (var(--si-sys-sizing-size-90) / 2) - var(--si-sys-sizing-spacing-x-40)   );--ix-date-picker-check-position--top:calc(     50% - var(--si-sys-sizing-spacing-y-40)   );--ix-date-picker-month-margin--margin-left:calc(     var(--si-sys-sizing-spacing-x-40) + var(--si-sys-sizing-spacing-x-10)   );--ix-date-picker-grid--grid-template-columns:repeat(     7,     var(--si-sys-sizing-size-90)   );--ix-date-picker-grid--grid-template-rows:repeat(     7,     var(--si-sys-sizing-size-90)   );--ix-date-picker-grid--week-number-columns:var(--si-sys-sizing-size-70) repeat(7, var(--si-sys-sizing-size-90));--ix-date-picker-calendar-item--width:var(--si-sys-sizing-size-90);--ix-date-picker-calendar-item--height:var(--si-sys-sizing-size-90);--ix-date-picker-week-number--width:var(--si-sys-sizing-size-70);--ix-date-picker-button--margin-top:var(--si-sys-sizing-spacing-y-60);--ix-date-picker-first-of-type--padding-bottom:var(--si-sys-sizing-spacing-y-120);--ix-date-picker-last-of-type--padding-top:var(--si-sys-sizing-spacing-y-120);--ix-date-picker-year-selector--button-padding:0 var(--si-sys-sizing-spacing-x-20);--ix-date-picker-dropdown--font-size:14px;--ix-date-picker-dropdown--line-height:20px;--ix-date-picker-calendar-item--border-width:var(--si-sys-sizing-border-width-default);--ix-date-picker--outline-width--focus:var(--si-sys-sizing-border-width-default);--ix-date-picker-today--border-width:var(--si-sys-sizing-border-width-default);--ix-date-picker-today--box-shadow-width:var(--si-sys-sizing-border-width-default);--ix-date-picker-range--border-width:var(--si-sys-sizing-border-width-default);--ix-date-picker-week-number--font-size:10px;--ix-date-picker-week-number--line-height:14px}:host{display:block;position:relative;max-width:var(--ix-date-picker--max-width)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .header{display:flex;align-items:center;justify-content:space-between}:host .disabled-item{pointer-events:none;background-color:var(--ix-date-picker-day--background--disabled);color:var(--ix-date-picker-day--color--disabled);cursor:default}:host .selector{flex-basis:100%;display:flex;align-items:center;justify-content:center;padding:var(--ix-date-picker-selector--padding)}:host .selector .dropdown{color:var(--ix-date-picker-menu-item--color);font-size:var(--ix-date-picker-dropdown--font-size);line-height:var(--ix-date-picker-dropdown--line-height)}:host .selector .arrowYear{display:flex;position:relative;padding:var(--ix-date-picker-arrow-year--padding);align-items:center;cursor:pointer}:host .selector .arrowYear:hover{background-color:var(--ix-date-picker-list-item--background--hover)}:host .selector .arrowYear.selected{background-color:var(--ix-date-picker-list-item--background--selected)}:host .selector .arrowYear .arrowPosition{position:absolute;left:var(--ix-date-picker-arrow-position--left);top:var(--ix-date-picker-arrow-position--top)}:host .selector .arrowYear .checkPosition{position:absolute;left:var(--ix-date-picker-check-position--left);top:var(--ix-date-picker-check-position--top)}:host .selector .arrowYear .monthMargin{margin-left:var(--ix-date-picker-month-margin--margin-left)}:host .grid{display:grid;grid-template-columns:var(--ix-date-picker-grid--grid-template-columns);grid-template-rows:var(--ix-date-picker-grid--grid-template-rows);align-items:center;justify-items:center;justify-content:center}:host .grid--show-week-numbers{grid-template-columns:var(--ix-date-picker-grid--week-number-columns)}:host .grid [role=row]{display:grid;grid-column:1/-1;grid-template-columns:subgrid}:host .grid .calendar-item{font:var(--si-sys-typography-body);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;position:relative;display:flex;justify-content:center;align-items:center;background-color:var(--ix-date-picker-day--background);border:var(--ix-date-picker-calendar-item--border-width) solid var(--ix-date-picker-day--background);color:var(--ix-date-picker-day--color);width:var(--ix-date-picker-calendar-item--width);height:var(--ix-date-picker-calendar-item--height);cursor:pointer}:host .grid .calendar-item:focus-visible{outline:var(--ix-date-picker--outline-width--focus) solid var(--ix-date-picker-day--outline-color--focus);outline-offset:var(--ix-date-picker--focus--outline-offset);z-index:1}:host .grid .calendar-item.today{border:var(--ix-date-picker-today--border-width) solid var(--ix-date-picker-today--border-color);box-shadow:inset 0 0 0 var(--ix-date-picker-today--box-shadow-width) var(--ix-date-picker-today--contrast-ring-color)}:host .grid .calendar-item.today.selected.disabled{border:var(--ix-date-picker-today--border-width) solid var(--ix-date-picker-day--background--selected-disabled)}:host .grid .calendar-item.today.range.disabled{border:var(--ix-date-picker-range--border-width) solid var(--ix-date-picker-today--border-color--range-disabled)}:host .grid .calendar-item.today.disabled{cursor:default}:host .grid .calendar-item:hover{background-color:var(--ix-date-picker-day--background--hover)}:host .grid .calendar-item:active{background-color:var(--ix-date-picker-day--background--active)}:host .grid .calendar-item.selected{background-color:var(--ix-date-picker-day--background--selected);color:var(--ix-date-picker-day--color--selected);border:var(--ix-date-picker-calendar-item--border-width) solid var(--ix-date-picker-day--background--selected);font-weight:var(--ix-date-picker-day--font-weight--selected)}:host .grid .calendar-item.selected:hover{background-color:var(--ix-date-picker-day--background--selected-hover)}:host .grid .calendar-item.selected:active{background-color:var(--ix-date-picker-day--background--selected-active)}:host .grid .calendar-item.selected.disabled{pointer-events:none;background-color:var(--ix-date-picker-day--background--selected-disabled);color:var(--ix-date-picker-day--color--selected-disabled)}:host .grid .calendar-item.range{background-color:var(--ix-date-picker-day--background--range);color:var(--ix-date-picker-day--color--range)}:host .grid .calendar-item.range:hover{background-color:var(--ix-date-picker-day--background--range-hover)}:host .grid .calendar-item.range:active{background-color:var(--ix-date-picker-day--background--range-active)}:host .grid .calendar-item.range.disabled{pointer-events:none;background-color:var(--ix-date-picker-day--background--range-disabled);color:var(--ix-date-picker-day--color--range-disabled)}:host .grid .calendar-item.disabled{pointer-events:none;background-color:var(--ix-date-picker-day--background--disabled);color:var(--ix-date-picker-day--color--disabled)}:host .grid .calendar-item.week-day{color:var(--ix-date-picker-weekday--color);font-size:var(--ix-date-picker-weekday--font-size);line-height:143%;border:none;background:none;cursor:initial}:host .grid .calendar-item.week-day .overflow{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .grid .calendar-item.empty-day{border:none;background:none;cursor:initial}:host .grid .calendar-item.week-number{font-size:var(--ix-date-picker-week-number--font-size);line-height:var(--ix-date-picker-week-number--line-height);color:var(--ix-date-picker-weekday--color);border:none;background:none;cursor:initial;width:var(--ix-date-picker-week-number--width)}:host .button{display:flex;justify-content:flex-end;margin-top:var(--ix-date-picker-button--margin-top)}:host .hidden{display:none}:host .infinite-scrolling-spacer:first-of-type{position:relative;padding-bottom:var(--ix-date-picker-first-of-type--padding-bottom)}:host .infinite-scrolling-spacer:first-of-type .sentinel{position:absolute;bottom:0;height:1px;width:50px}:host .infinite-scrolling-spacer:last-of-type{position:relative;padding-top:var(--ix-date-picker-last-of-type--padding-top)}:host .infinite-scrolling-spacer:last-of-type .sentinel{position:absolute;top:0;height:1px;width:50px}:host .month-selector,:host .year-selector{--ix-button-padding:var(--ix-date-picker-year-selector--button-padding)}`;
const DatePicker = class extends Mixin(...DefaultMixins) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
    this.dateChange = createEvent(this, "dateChange", 7);
    this.dateRangeChange = createEvent(this, "dateRangeChange", 7);
    this.dateSelect = createEvent(this, "dateSelect", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Date format string.
   * See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
   */
  format = "yyyy/LL/dd";
  /**
   * If true, disables date range selection (from/to).
   */
  singleSelection = false;
  /**
   * Corner style.
   */
  corners = "rounded";
  /**
   * The selected starting date. If the date picker is not in range mode, this is the selected date.
   * Format has to match the `format` property.
   */
  from;
  watchFromPropHandler(newValue) {
    if (!newValue) {
      this.currFromDate = void 0;
      return;
    }
    const date = tryParseWithLocale(newValue, this.format, this.locale);
    if (date) {
      this.currFromDate = date;
      this.updateSelectedYearMonth(date);
    }
  }
  /**
   * The selected end date. If the date picker is not in range mode, this property has no impact.
   * Format has to match the `format` property.
   */
  to;
  watchToPropHandler(newValue) {
    if (!newValue) {
      this.currToDate = void 0;
      return;
    }
    const date = tryParseWithLocale(newValue, this.format, this.locale);
    if (date) {
      this.currToDate = date;
      this.updateSelectedYearMonth(date);
    }
  }
  /**
   * The earliest date that can be selected by the date picker.
   * If not set there will be no restriction.
   */
  minDate = "";
  /**
   * The latest date that can be selected by the date picker.
   * If not set there will be no restriction.
   */
  maxDate = "";
  onDateBoundOrFormatChange() {
    this.refreshDates();
  }
  /**
   * Text of the date select button.
   */
  i18nDone = "Done";
  /**
   * ARIA label for the previous month icon button.
   * Will be set as aria-label on the nested HTML button element.
   */
  ariaLabelPreviousMonthButton = "Change calendar view to previous month";
  /**
   * ARIA label for the next month icon button.
   * Will be set as aria-label on the nested HTML button element.
   */
  ariaLabelNextMonthButton = "Change calendar view to next month";
  /**
   * ARIA label for the next month icon button
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 5.0.0
   */
  ariaLabelMonthSelection = "Select month";
  /**
   * ARIA label for the next month icon button
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 5.0.0
   */
  ariaLabelYearSelection = "Select year";
  /**
   * The index of the day the week starts on, as a 0-based index into Luxon's
   * `Info.weekdays()` array. That array is always ordered Monday-first
   * regardless of locale, so 0 is Monday, 1 is Tuesday and 6 is Sunday.
   * E.g. weekStartIndex = 6 results in starting the week on Sunday.
   */
  weekStartIndex = 0;
  /**
   * The public `weekStartIndex` prop, narrowed and sanitised for the calendar
   * helpers. Converting in one place keeps the raw number from reaching them.
   */
  get weekStart() {
    return weekStartFrom(this.weekStartIndex);
  }
  /**
   * Locale identifier (e.g. 'en' or 'de').
   * The locale is used to translate the labels for weekdays and months.
   * When the locale changes, the weekday labels are rotated according to the `weekStartIndex`.
   * The locale is also applied when formatting and parsing date values.
   * For locale-dependent format tokens (e.g. `MMMM`, `MMM`), the output will reflect the locale.
   * Use the `isoFrom` and `isoTo` fields on events for locale-independent values.
   */
  locale;
  onLocaleChange() {
    this.setTranslations();
    this.refreshDates();
    this.calendarDirty = true;
  }
  /**
   * Re-parse every date the component holds as a string with the current
   * `format` and `locale`.
   */
  refreshDates() {
    this.refreshBoundDates();
    this.refreshSelectedDates();
  }
  refreshBoundDates() {
    this._minDateObj = this.minDate ? parseWithLocale(this.minDate, this.format, this.locale) : void 0;
    this._maxDateObj = this.maxDate ? parseWithLocale(this.maxDate, this.format, this.locale) : void 0;
  }
  /**
   * Re-parse `from`/`to` with the current `format` and `locale`.
   */
  refreshSelectedDates() {
    this.currFromDate = this.from ? tryParseWithLocale(this.from, this.format, this.locale) : void 0;
    this.currToDate = this.to ? tryParseWithLocale(this.to, this.format, this.locale) : void 0;
  }
  /**
   * Shows week numbers displayed on the left side of the date picker.
   *
   * @since 3.0.0
   */
  showWeekNumbers = false;
  /** @internal */
  embedded = false;
  /** @internal */
  today = DateTime.now().toISO();
  /**
   * Enable Popover API rendering for dropdown.
   *
   * @default false
   * @since 4.3.0
   */
  enableTopLayer = false;
  /**
   * Emitted when the date selection changes. The `DateChangeEvent` contains `from` and `to` properties
   * formatted according to the `format` and `locale` properties.
   * Use `isoFrom` and `isoTo` for locale-independent ISO 8601 date strings.
   * Note: Since 2.0.0 `dateChange` does not dispatch detail property as `string`
   */
  dateChange;
  /**
   * Date range change event. Emitted when the date range selection changes and the component is in range mode.
   * The `DateChangeEvent` contains `from` and `to` properties formatted according to the `format` and `locale` properties.
   * Use `isoFrom` and `isoTo` for locale-independent ISO 8601 date strings.
   */
  dateRangeChange;
  /**
   * Date selection event. Emitted when the selection is confirmed via the date select button.
   * The `DateChangeEvent` contains `from` and `to` properties formatted according to the `format` and `locale` properties.
   * Use `isoFrom` and `isoTo` for locale-independent ISO 8601 date strings.
   */
  dateSelect;
  /**
   * Get the currently selected date or range. The object returned contains `from` and `to` properties
   * formatted according to the `format` and `locale` properties.
   * Use `isoFrom` and `isoTo` for locale-independent ISO 8601 date strings.
   */
  async getCurrentDate() {
    const _from = this.currFromDate?.isValid ? formatWithLocale(this.currFromDate, this.format, this.locale) : void 0;
    const _to = this.currToDate?.isValid ? formatWithLocale(this.currToDate, this.format, this.locale) : void 0;
    if (!this.singleSelection) {
      return {
        from: _from,
        to: _to,
        isoFrom: toISODate(this.currFromDate),
        isoTo: toISODate(this.currToDate)
      };
    }
    return {
      from: _from,
      to: void 0,
      isoFrom: toISODate(this.currFromDate),
      isoTo: void 0
    };
  }
  currFromDate;
  currToDate;
  /**
   * The month on display, as the first of that month. Carries the displayed
   * year with it, so the two can never drift apart. The calendar grid, the
   * header and the month/year dropdown all read it, so they always agree.
   * Write it through {@link setDisplayedMonth}.
   */
  selectedMonthDate = DateTime.local().startOf("month");
  startYear = 0;
  endYear = 0;
  yearDropdownButtonRef = makeRef();
  yearMonthSelectionDropdownRef = makeRef();
  dayNames = [];
  focusedDay = 1;
  isDayFocus = false;
  monthChangedFromFocus = false;
  calendar = [];
  _minDateObj;
  _maxDateObj;
  calendarDirty = true;
  onKeyDown(event) {
    if (!this.isDayFocus) {
      return;
    }
    if (this.yearMonthSelectionDropdownRef.current?.show) {
      return;
    }
    if (["PageUp", "PageDown", "Home", "End"].includes(event.key)) {
      switch (event.key) {
        case "PageUp":
          this.navigateCalendar(-1, event.shiftKey);
          break;
        case "PageDown":
          this.navigateCalendar(1, event.shiftKey);
          break;
        case "Home":
          this.focusFirstDayOfCurrentWeek();
          break;
        case "End":
          this.focusLastDayOfCurrentWeek();
          break;
      }
      return;
    }
    let _focusedDay = this.focusedDay;
    switch (event.key) {
      case "ArrowLeft":
        _focusedDay--;
        break;
      case "ArrowRight":
        _focusedDay++;
        break;
      case "ArrowUp":
        _focusedDay = _focusedDay - 7;
        break;
      case "ArrowDown":
        _focusedDay = _focusedDay + 7;
        break;
      default:
        return;
    }
    event.preventDefault();
    this.setFocusedDay(_focusedDay);
  }
  setFocusedDay(day = 0) {
    if (day > this.getDaysInCurrentMonth()) {
      day = day - this.getDaysInCurrentMonth();
      this.changeCalendarView(1);
      this.monthChangedFromFocus = true;
    } else if (day < 1) {
      this.changeCalendarView(-1);
      day = day + this.getDaysInCurrentMonth();
      this.monthChangedFromFocus = true;
    }
    this.focusedDay = day;
  }
  getDaysInCurrentMonth() {
    return this.selectedMonthDate.daysInMonth ?? 0;
  }
  getFirstDayOfWeek(day) {
    const week = this.calendar.find((w) => w.dayNumbers.includes(day));
    if (!week) {
      return day;
    }
    const firstDay = week.dayNumbers.find((d) => d !== void 0);
    return firstDay ?? day;
  }
  getLastDayOfWeek(day) {
    const week = this.calendar.find((w) => w.dayNumbers.includes(day));
    if (!week) {
      return day;
    }
    const lastDay = [...week.dayNumbers].reverse().find((d) => d !== void 0);
    return lastDay ?? day;
  }
  getDateTimeNow() {
    return DateTime.fromISO(this.today);
  }
  /**
   * @internal
   */
  async updateSelectedYearMonth(date) {
    this.setDisplayedMonth(DateTime.fromObject({
      year: date.year,
      month: date.month
    }));
  }
  /**
   * The single way to move the calendar. `month` may be any day of the target
   * month; it is normalised to the first of that month.
   */
  setDisplayedMonth(month) {
    this.selectedMonthDate = month.startOf("month");
  }
  onCalendarStateChange() {
    this.calendarDirty = true;
  }
  onWeekStartIndexChange() {
    this.setTranslations();
    this.calendarDirty = true;
  }
  onDayBlur() {
    this.isDayFocus = false;
  }
  onDayFocus() {
    this.isDayFocus = true;
  }
  componentWillLoad() {
    this.setTranslations();
    this.refreshDates();
    const initialMonth = (this.currFromDate ?? this.getDateTimeNow()).startOf("month");
    this.startYear = initialMonth.year - 101;
    this.endYear = initialMonth.year + 101;
    this.setDisplayedMonth(initialMonth);
  }
  keyboardNavigationYearSelection;
  keyboardNavigationMonthSelection;
  disconnectedCallback() {
    this.keyboardNavigationYearSelection?.();
    this.keyboardNavigationMonthSelection?.();
  }
  componentDidLoad() {
    super.componentDidLoad?.();
  }
  componentWillRender() {
    if (this.calendarDirty) {
      this.calendar = calendarRowsFor(this.selectedMonthDate, this.weekStart);
      this.calendarDirty = false;
    }
  }
  componentDidRender() {
    if (!this.monthChangedFromFocus && !this.isDayFocus) {
      return;
    }
    const dayElem = this.hostElement.shadowRoot.querySelector(`[id=day-cell-${this.focusedDay}]`);
    dayElem?.focus();
    this.monthChangedFromFocus = false;
  }
  /** @internal */
  async navigateCalendar(direction, byYear) {
    this.navigateByMonthOrYear(byYear ? "year" : "month", direction);
  }
  /** @internal */
  async focusFirstDayOfCurrentWeek() {
    this.focusedDay = this.getFirstDayOfWeek(this.focusedDay);
  }
  /** @internal */
  async focusLastDayOfCurrentWeek() {
    this.focusedDay = this.getLastDayOfWeek(this.focusedDay);
  }
  /** @internal */
  async isCalendarDayFocused() {
    return this.isDayFocus && !this.yearMonthSelectionDropdownRef.current?.show;
  }
  /** @internal */
  async focusActiveDay() {
    const shadowRoot = this.hostElement.shadowRoot;
    const dayElement = shadowRoot.querySelector(".calendar-item.selected") ?? shadowRoot.querySelector(".calendar-item.today") ?? shadowRoot.querySelector(".calendar-item.first-day");
    if (!dayElement) {
      return;
    }
    const day = dayElement.dataset.calendarDay;
    if (day) {
      this.focusedDay = parseInt(day, 10);
    }
    dayElement.focus();
  }
  setTranslations() {
    this.dayNames = weekdayNamesFrom(this.weekStart, this.locale);
  }
  async onDone() {
    const date = await this.getCurrentDate();
    this.dateSelect.emit(date);
  }
  changeCalendarView(number) {
    this.setDisplayedMonth(this.selectedMonthDate.plus({ months: number }));
  }
  navigateByMonthOrYear(unit, direction) {
    const targetMonth = this.selectedMonthDate.plus(unit === "year" ? { years: direction } : { months: direction });
    this.focusedDay = Math.min(this.focusedDay, targetMonth.daysInMonth ?? 0);
    this.setDisplayedMonth(targetMonth);
    this.monthChangedFromFocus = true;
  }
  selectDay(selectedDay, target) {
    if (target.classList.contains("disabled")) {
      return;
    }
    const date = dayOfMonth(this.selectedMonthDate, selectedDay);
    if (this.singleSelection || this.currFromDate === void 0) {
      this.currFromDate = date;
      this.onDateChange();
      return;
    }
    if (this.currToDate !== void 0) {
      this.currFromDate = date;
      this.currToDate = void 0;
      this.onDateChange();
      return;
    }
    if (date < this.currFromDate) {
      this.currToDate = this.currFromDate;
      this.currFromDate = date;
      this.onDateChange();
      return;
    }
    this.currToDate = date;
    this.onDateChange();
  }
  onDateChange() {
    this.getCurrentDate().then((date) => {
      this.dateChange.emit(date);
      if (!this.singleSelection) {
        this.dateRangeChange.emit(date);
      }
    });
  }
  getUtilitiesBasedOnDay(day) {
    const todayObj = this.getDateTimeNow();
    const selectedDayObj = dayOfMonth(this.selectedMonthDate, day);
    return {
      isFirstDay: () => day === 1,
      isToday: () => todayObj.hasSame(selectedDayObj, "day"),
      isSelected: () => !!(this.currFromDate?.hasSame(selectedDayObj, "day") || this.currToDate?.hasSame(selectedDayObj, "day")),
      isRange: () => !!(this.currFromDate && selectedDayObj.startOf("day") > this.currFromDate.startOf("day") && this.currToDate !== void 0 && selectedDayObj.startOf("day") < this.currToDate?.startOf("day"))
    };
  }
  getDayClasses(day, util) {
    const selectedDayObj = dayOfMonth(this.selectedMonthDate, day);
    return {
      "calendar-item": true,
      "empty-day": day === void 0,
      "first-day": util.isFirstDay(),
      today: util.isToday(),
      selected: util.isSelected(),
      range: util.isRange(),
      disabled: !this.isWithinMinMaxDate(selectedDayObj)
    };
  }
  isWithinMinMaxYear(year) {
    return isYearWithinRange(year, this._minDateObj, this._maxDateObj);
  }
  /** `month` is the first of the month being offered, so it carries its year. */
  isWithinMinMaxMonth(month) {
    return isMonthWithinRange(month, this._minDateObj, this._maxDateObj);
  }
  isWithinMinMaxDate(date) {
    return isDayWithinRange(date, this._minDateObj, this._maxDateObj);
  }
  renderMonths() {
    return monthsOfYear(this.selectedMonthDate.year).map((month) => {
      const name = monthNameOf(month, this.locale);
      return h("ix-dropdown-item", { checked: month.hasSame(this.selectedMonthDate, "month"), key: name, class: {
        "month-dropdown-item": true,
        "disabled-item": !this.isWithinMinMaxMonth(month)
      }, onClick: () => {
        this.setDisplayedMonth(month);
      } }, h("span", { class: "capitalize monthMargin" }, name));
    });
  }
  renderYears() {
    const rows = [];
    for (let year = this.startYear; year <= this.endYear; year++) {
      const selected = this.selectedMonthDate.year === year;
      rows.push(h("ix-dropdown-item", { key: year, checked: selected, class: {
        "month-dropdown-item": true,
        "disabled-item": !this.isWithinMinMaxYear(year)
      }, onClick: () => {
        this.setDisplayedMonth(this.selectedMonthDate.set({ year }));
      } }, h("div", { style: { "min-width": "max-content" } }, `${year}`)));
    }
    return rows;
  }
  changeFocusedDay() {
    if (this.monthChangedFromFocus) {
      return;
    }
    requestAnimationFrameNoNgZone(() => {
      const shadowRoot = this.hostElement.shadowRoot;
      const selectedDayElement = shadowRoot.querySelector(".calendar-item.selected");
      const todayElement = shadowRoot.querySelector(".calendar-item.today");
      let dayElement = selectedDayElement ?? todayElement;
      if (!dayElement) {
        dayElement = shadowRoot.querySelector(".calendar-item.first-day");
      }
      if (!dayElement) {
        return;
      }
      const currentDay = dayElement.dataset.calendarDay;
      if (currentDay) {
        this.focusedDay = parseInt(currentDay, 10);
      }
    });
  }
  async intersect(entries) {
    const yearDropdownButton = this.yearDropdownButtonRef.current;
    if (!yearDropdownButton) {
      return;
    }
    const container = await yearDropdownButton.getDropdownReference();
    entries.forEach((entry) => {
      const target = entry.target;
      if (entry.isIntersecting) {
        if (target.dataset.sentinel === "top") {
          this.startYear -= 5;
          if (!this.skipFirstScrollOffset) {
            requestAnimationFrameNoNgZone(() => {
              const first = queryElements(container, "ix-dropdown-item")[0];
              container.scrollTo(0, first.offsetTop);
            });
          }
          this.skipFirstScrollOffset = false;
        } else {
          this.endYear += 5;
        }
      }
    });
  }
  skipFirstScrollOffset = true;
  intersectStart = new IntersectionObserver((entries) => this.intersect(entries), { threshold: 0.5 });
  intersectEnd = new IntersectionObserver((entries) => this.intersect(entries), { threshold: 0.5 });
  render() {
    const monthLabel = monthNameOf(this.selectedMonthDate, this.locale);
    const yearLabel = this.selectedMonthDate.year;
    return h(Host, { key: "1544084d0677d2e7bbb3ce6cef2d3d05211b083e", onKeyDown: (event) => this.onKeyDown(event), onFocusin: () => {
      if (hasKeyboardMode()) {
        this.changeFocusedDay();
      }
    } }, h("ix-date-time-card", { key: "61ba2af1c52749b1957946f0187c2e21d50d6953", corners: this.corners, embedded: this.embedded }, h("div", { key: "d11bfebb6df3bfa9db0b0c96543ccc137b5730d3", class: "header", slot: "header" }, h("ix-icon-button", { key: "a413f697bb56bfe281bb2d7ff59100df1c36f5cb", onClick: () => this.changeCalendarView(-1), icon: iconChevronLeftSmall, variant: "tertiary", class: "arrows", "aria-label": this.ariaLabelPreviousMonthButton }), h("div", { key: "cc0c9eaa34be0fce93367c625366b5212a766e75", class: "selector" }, h("ix-dropdown-button", { key: "4e4255d31e6984ebdecdf38f1f5f202209d97b47", class: "month-selector", focusCheckedItem: true, "aria-label": this.ariaLabelMonthSelection, variant: "tertiary", label: null, onShowChanged: (event) => {
      event.stopPropagation();
    } }, h("ix-typography", { key: "6c609e59c1c3feb9eadb5326ede9ad2196fa4110", bold: true, class: "capitalize", slot: "button-label" }, monthLabel), this.renderMonths()), h("ix-dropdown-button", { key: "1df115f710f93bf71a01181a11641f2f6b3ec7c9", class: "year-selector", focusCheckedItem: true, "aria-label": this.ariaLabelYearSelection, ref: this.yearDropdownButtonRef, variant: "tertiary", label: null, onShowChanged: (event) => {
      event.stopPropagation();
      if (event.detail) {
        requestAnimationFrameNoNgZone(() => {
          this.intersectStart.observe(this.hostElement.shadowRoot.querySelector('[data-sentinel="top"]'));
          this.intersectEnd.observe(this.hostElement.shadowRoot.querySelector('[data-sentinel="bottom"]'));
          const selectedYearItem = this.yearDropdownButtonRef.current?.querySelector("ix-dropdown-item[checked]");
          if (!selectedYearItem) {
            return;
          }
          requestAnimationFrameNoNgZone(() => {
            selectedYearItem.scrollIntoView({
              block: "center"
            });
          });
        });
      } else {
        this.intersectStart.disconnect();
        this.intersectEnd.disconnect();
      }
    } }, h("div", { key: "46cbf90e6981a8fd3a3a3a64c5ac693b5e894fe6", class: "infinite-scrolling-spacer" }, h("div", { key: "1acc2e41617fba54e109b003d63806657fb3019d", class: "sentinel", "data-sentinel": "top" })), h("ix-typography", { key: "53bbe3460d1aa59e52cfe91fbe4ab6e5bd74e432", bold: true, class: "capitalize", slot: "button-label" }, yearLabel), this.renderYears(), h("div", { key: "53850d9fa99f51cc5cafb93483cd4fece7046f21", class: "infinite-scrolling-spacer" }, h("div", { key: "3799102820e1c0c72da17812777df670d1698a88", class: "sentinel", "data-sentinel": "bottom" })))), h("ix-icon-button", { key: "e482815f0c5c7f542b4ea123ebb679240cf00aa4", onClick: () => this.changeCalendarView(1), icon: iconChevronRightSmall, variant: "tertiary", class: "arrows", "aria-label": this.ariaLabelNextMonthButton })), h("div", { key: "c5aaf36d6a0d62022be5b92b944cceb53ed46241", role: "grid", class: {
      grid: true,
      "grid--show-week-numbers": this.showWeekNumbers
    } }, h("div", { key: "745df8435d9d6138ba89626cf3c13b4109a56915", role: "row" }, this.showWeekNumbers && h("div", { key: "7425a007daef61d3dbe64c8244095ff8008454b2", class: "calendar-item week-day", role: "columnheader" }), this.dayNames.map((name) => h("div", { key: name, class: "calendar-item week-day", role: "columnheader" }, h("div", { class: "overflow" }, name.slice(0, 3))))), this.calendar.map((week) => {
      return h("div", { role: "row" }, this.showWeekNumbers && h("div", { class: "calendar-item week-number", role: "rowheader" }, week.weekNumber), week.dayNumbers.map((day) => {
        if (!day) {
          return h("div", { role: "gridcell" });
        }
        const util = this.getUtilitiesBasedOnDay(day);
        return h("div", { role: "gridcell", "aria-selected": util.isSelected() ? "true" : "false", key: day, id: `day-cell-${day}`, "data-calendar-day": day, "data-date-value": `${week.weekNumber}-${day}`, class: this.getDayClasses(day, util), onClick: (e) => {
          const target = e.currentTarget;
          this.selectDay(day, target);
        }, onKeyDown: (e) => {
          const target = e.currentTarget;
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            this.selectDay(day, target);
          }
        }, tabIndex: day === this.focusedDay ? 0 : -1, autofocus: util.isToday(), onFocus: () => this.onDayFocus(), onBlur: () => this.onDayBlur(), "aria-label": `${day} ${monthLabel} ${yearLabel}` }, day);
      }));
    })), h("div", { key: "c5ebe5580d23228e338e00178416759a8f7478af", class: {
      button: true,
      hidden: this.singleSelection || this.embedded
    } }, h("ix-button", { key: "aaee7386f1b7af650ea65b799eff1ab87c526eb0", hidden: this.singleSelection || this.embedded, onClick: () => this.onDone() }, this.i18nDone))));
  }
  static get delegatesFocus() {
    return true;
  }
  static get watchers() {
    return {
      "from": [{
        "watchFromPropHandler": 0
      }],
      "to": [{
        "watchToPropHandler": 0
      }],
      "format": [{
        "onDateBoundOrFormatChange": 0
      }],
      "minDate": [{
        "onDateBoundOrFormatChange": 0
      }],
      "maxDate": [{
        "onDateBoundOrFormatChange": 0
      }],
      "locale": [{
        "onLocaleChange": 0
      }],
      "selectedMonthDate": [{
        "onCalendarStateChange": 0
      }],
      "weekStartIndex": [{
        "onWeekStartIndexChange": 0
      }]
    };
  }
};
DatePicker.style = datePickerCss();
export {
  DatePicker as ix_date_picker
};
