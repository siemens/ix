import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-Do6maBom.js";
import { Q as iconChevronLeftSmall, u as iconChevronRightSmall } from "./index-BeX6RWvV-CXzUIwMU.js";
import { D as DateTime, I as Info } from "./datetime-D1WplX1z-grPSvmS5.js";
import { q as queryElements } from "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
import { D as DefaultMixins, h as hasKeyboardMode } from "./component-DqJSHc3A-D5InBSMm.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { r as requestAnimationFrameNoNgZone } from "./requestAnimationFrame-BEuV0Xpe-CBtvTq-Q.js";
import "./shadow-dom-BClJdFQP-DyvnXMi-.js";
const datePickerCss = () => `@charset "UTF-8";:host{--ix-button--outline-color--focus:var(--si-sys-effects-focus);--ix-button--border-radius:var(--theme-small-border-radius);--ix-button--border-width:var(--theme-border-width-default);--ix-button--focus--outline-offset:var(--theme-focus-outline-offset);--ix-button-danger-primary--background:var(--si-sys-background-danger);--ix-button-danger-primary--background--active:var(--si-sys-background-danger-active);--ix-button-danger-primary--background--disabled:var(--si-sys-background-1);--ix-button-danger-primary--background--hover:var(--si-sys-background-danger-hover);--ix-button-danger-primary--border-color:rgba(0, 0, 0, 0);--ix-button-danger-primary--border-color--active:rgba(0, 0, 0, 0);--ix-button-danger-primary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-danger-primary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-danger-primary--color:var(--si-sys-text-on-danger);--ix-button-danger-primary--color--active:var(--si-sys-text-on-danger);--ix-button-danger-primary--color--disabled:var(--si-sys-text-disabled);--ix-button-danger-primary--color--hover:var(--si-sys-text-on-danger);--ix-button-danger-secondary--background:rgba(0, 0, 0, 0);--ix-button-danger-secondary--background--active:var(--si-sys-background-danger-active);--ix-button-danger-secondary--background--disabled:rgba(0, 0, 0, 0);--ix-button-danger-secondary--background--hover:var(--si-sys-background-danger-hover);--ix-button-danger-secondary--border-color:var(--si-sys-text-danger);--ix-button-danger-secondary--border-color--active:var(--si-sys-background-danger-active);--ix-button-danger-secondary--border-color--disabled:var(--si-sys-border-3);--ix-button-danger-secondary--border-color--hover:var(--si-sys-background-danger-hover);--ix-button-danger-secondary--color:var(--si-sys-text-danger);--ix-button-danger-secondary--color--active:var(--si-sys-text-on-danger);--ix-button-danger-secondary--color--disabled:var(--si-sys-text-disabled);--ix-button-danger-secondary--color--hover:var(--si-sys-text-on-danger);--ix-button-danger-tertiary--background:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--background--active:var(--si-sys-background-danger-active);--ix-button-danger-tertiary--background--disabled:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--background--hover:var(--si-sys-background-danger-hover);--ix-button-danger-tertiary--border-color:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--border-color--active:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--color:var(--si-sys-text-danger);--ix-button-danger-tertiary--color--active:var(--si-sys-text-on-danger);--ix-button-danger-tertiary--color--disabled:var(--si-sys-text-disabled);--ix-button-danger-tertiary--color--hover:var(--si-sys-text-on-danger);--ix-button-primary--background:var(--si-sys-background-accent);--ix-button-primary--background--active:var(--si-sys-background-accent-active);--ix-button-primary--background--disabled:var(--si-sys-background-1);--ix-button-primary--background--hover:var(--si-sys-background-accent-hover);--ix-button-primary--background--pressed:var(--si-sys-background-accent-hover);--ix-button-primary--background--pressed-active:var(--si-sys-background-accent-active);--ix-button-primary--background--pressed-hover:var(--si-sys-background-accent-hover);--ix-button-primary--border-color:rgba(0, 0, 0, 0);--ix-button-primary--border-color--active:rgba(0, 0, 0, 0);--ix-button-primary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-primary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-primary--border-color--pressed:rgba(0, 0, 0, 0);--ix-button-primary--border-color--pressed-hover:rgba(0, 0, 0, 0);--ix-button-primary--border-color--pressed-hover-active:rgba(0, 0, 0, 0);--ix-button-primary--color:var(--si-sys-text-on-accent);--ix-button-primary--color--active:var(--si-sys-text-on-accent);--ix-button-primary--color--disabled:var(--si-sys-text-disabled);--ix-button-primary--color--hover:var(--si-sys-text-on-accent);--ix-button-primary--color--pressed:var(--si-sys-text-on-accent);--ix-button-primary--color--pressed-active:var(--si-sys-text-on-accent);--ix-button-primary--color--pressed-hover:var(--si-sys-text-on-accent);--ix-button-secondary--background:var(--si-sys-background-accent-secondary);--ix-button-secondary--background--active:var(--si-sys-background-accent-secondary-active);--ix-button-secondary--background--disabled:rgba(0, 0, 0, 0);--ix-button-secondary--background--hover:var(--si-sys-background-accent-secondary-hover);--ix-button-secondary--background--pressed:var(--si-sys-background-accent-secondary-active);--ix-button-secondary--background--pressed-active:var(--si-sys-background-accent-secondary-active);--ix-button-secondary--background--pressed-hover:var(--si-sys-background-accent-secondary-hover);--ix-button-secondary--border-color:var(--si-sys-border-accent);--ix-button-secondary--border-color--active:var(--si-sys-border-accent-active);--ix-button-secondary--border-color--disabled:var(--si-sys-border-3);--ix-button-secondary--border-color--hover:var(--si-sys-border-accent-hover);--ix-button-secondary--border-color--pressed:var(--si-sys-border-accent-hover);--ix-button-secondary--border-color--pressed-active:var(--si-sys-border-accent-active);--ix-button-secondary--border-color--pressed-hover:var(--si-sys-border-accent-hover);--ix-button-secondary--color:var(--si-sys-text-accent);--ix-button-secondary--color--active:var(--si-sys-text-accent-active);--ix-button-secondary--color--disabled:var(--si-sys-text-disabled);--ix-button-secondary--color--hover:var(--si-sys-text-accent-hover);--ix-button-secondary--color--pressed:var(--si-sys-text-accent-hover);--ix-button-secondary--color--pressed-active:var(--si-sys-text-accent-active);--ix-button-secondary--color--pressed-hover:var(--si-sys-text-accent-hover);--ix-button-subtle-primary--background:var(--si-sys-background-2);--ix-button-subtle-primary--background--active:var(--si-sys-background-active);--ix-button-subtle-primary--background--disabled:var(--si-sys-background-1);--ix-button-subtle-primary--background--hover:var(--si-sys-background-hover);--ix-button-subtle-primary--background--pressed:var(--si-sys-background-accent-secondary-active);--ix-button-subtle-primary--background--pressed-active:var(--si-sys-background-accent-secondary-active);--ix-button-subtle-primary--background--pressed-hover:var(--si-sys-background-accent-secondary-hover);--ix-button-subtle-primary--border-color:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--active:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--pressed:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--pressed-active:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--pressed-hover:rgba(0, 0, 0, 0);--ix-button-subtle-primary--color:var(--si-sys-text-primary);--ix-button-subtle-primary--color--active:var(--si-sys-text-primary);--ix-button-subtle-primary--color--disabled:var(--si-sys-text-disabled);--ix-button-subtle-primary--color--hover:var(--si-sys-text-primary);--ix-button-subtle-primary--color--pressed:var(--si-sys-text-accent-hover);--ix-button-subtle-primary--color--pressed-active:var(--si-sys-text-accent-hover);--ix-button-subtle-primary--color--pressed-hover:var(--si-sys-text-accent-hover);--ix-button-subtle-secondary--background:rgba(0, 0, 0, 0);--ix-button-subtle-secondary--background--active:var(--si-sys-background-active);--ix-button-subtle-secondary--background--disabled:rgba(0, 0, 0, 0);--ix-button-subtle-secondary--background--hover:var(--si-sys-background-hover);--ix-button-subtle-secondary--background--pressed:var(--si-sys-background-accent-secondary-active);--ix-button-subtle-secondary--background--pressed-active:var(--si-sys-background-accent-secondary-active);--ix-button-subtle-secondary--background--pressed-hover:var(--si-sys-background-accent-secondary-hover);--ix-button-subtle-secondary--border-color:var(--si-sys-border-2);--ix-button-subtle-secondary--border-color--active:var(--si-sys-border-2);--ix-button-subtle-secondary--border-color--disabled:var(--si-sys-border-3);--ix-button-subtle-secondary--border-color--hover:var(--si-sys-border-2);--ix-button-subtle-secondary--border-color--pressed:var(--si-sys-border-2);--ix-button-subtle-secondary--border-color--pressed-active:var(--si-sys-border-2);--ix-button-subtle-secondary--border-color--pressed-hover:var(--si-sys-border-2);--ix-button-subtle-secondary--color:var(--si-sys-text-primary);--ix-button-subtle-secondary--color--active:var(--si-sys-text-primary);--ix-button-subtle-secondary--color--disabled:var(--si-sys-text-disabled);--ix-button-subtle-secondary--color--hover:var(--si-sys-text-primary);--ix-button-subtle-secondary--color--pressed:var(--si-sys-text-accent-hover);--ix-button-subtle-secondary--color--pressed-active:var(--si-sys-text-accent-hover);--ix-button-subtle-secondary--color--pressed-hover:var(--si-sys-text-accent-hover);--ix-button-subtle-tertiary--background:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--background--active:var(--si-sys-background-active);--ix-button-subtle-tertiary--background--disabled:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--background--hover:var(--si-sys-background-hover);--ix-button-subtle-tertiary--background--pressed:var(--si-sys-background-accent-secondary-active);--ix-button-subtle-tertiary--background--pressed-active:var(--si-sys-background-accent-secondary-active);--ix-button-subtle-tertiary--background--pressed-hover:var(--si-sys-background-accent-secondary-hover);--ix-button-subtle-tertiary--border-color:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--active:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--pressed:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--pressed-active:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--pressed-hover:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--color:var(--si-sys-text-primary);--ix-button-subtle-tertiary--color--active:var(--si-sys-text-primary);--ix-button-subtle-tertiary--color--disabled:var(--si-sys-text-disabled);--ix-button-subtle-tertiary--color--hover:var(--si-sys-text-primary);--ix-button-subtle-tertiary--color--pressed:var(--si-sys-text-accent-hover);--ix-button-subtle-tertiary--color--pressed-active:var(--si-sys-text-accent-hover);--ix-button-subtle-tertiary--color--pressed-hover:var(--si-sys-text-accent-hover);--ix-button-tertiary--background:rgba(0, 0, 0, 0);--ix-button-tertiary--background--active:var(--si-sys-background-accent-secondary-active);--ix-button-tertiary--background--disabled:rgba(0, 0, 0, 0);--ix-button-tertiary--background--hover:var(--si-sys-background-accent-secondary-hover);--ix-button-tertiary--background--pressed:var(--si-sys-background-accent-secondary-active);--ix-button-tertiary--background--pressed-active:var(--si-sys-background-accent-secondary-active);--ix-button-tertiary--background--pressed-hover:var(--si-sys-background-accent-secondary-hover);--ix-button-tertiary--border-color:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--active:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--pressed:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--pressed-active:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--pressed-hover:rgba(0, 0, 0, 0);--ix-button-tertiary--color:var(--si-sys-text-accent);--ix-button-tertiary--color--active:var(--si-sys-text-accent-active);--ix-button-tertiary--color--disabled:var(--si-sys-text-disabled);--ix-button-tertiary--color--hover:var(--si-sys-text-accent-hover);--ix-button-tertiary--color--pressed:var(--si-sys-text-accent-hover);--ix-button-tertiary--color--pressed-active:var(--si-sys-text-accent-active);--ix-button-tertiary--color--pressed-hover:var(--si-sys-text-accent-hover)}:host{--ix-date-picker-day--outline-color--focus:var(--si-sys-effects-focus);--ix-date-picker-day--font-weight--selected:var(--theme-font-weight-bold);--ix-date-picker-weekday--font-size:var(--theme-ms-0);--ix-date-picker--focus--outline-offset:var(--theme-focus-outline-offset);--ix-date-picker-day--background:rgba(0, 0, 0, 0);--ix-date-picker-day--background--active:var(--si-sys-background-active);--ix-date-picker-day--background--disabled:rgba(0, 0, 0, 0);--ix-date-picker-day--background--hover:var(--si-sys-background-hover);--ix-date-picker-day--background--range:var(--si-sys-background-active);--ix-date-picker-day--background--range-active:var(--si-sys-background-accent-secondary-active);--ix-date-picker-day--background--range-disabled:var(--si-sys-background-1);--ix-date-picker-day--background--range-hover:var(--si-sys-background-accent-secondary-hover);--ix-date-picker-day--background--selected:var(--si-sys-background-accent);--ix-date-picker-day--background--selected-active:var(--si-sys-background-accent-active);--ix-date-picker-day--background--selected-disabled:var(--si-sys-background-1);--ix-date-picker-day--background--selected-hover:var(--si-sys-background-accent-hover);--ix-date-picker-day--color:var(--si-sys-text-accent);--ix-date-picker-day--color--disabled:var(--si-sys-text-disabled);--ix-date-picker-day--color--range:var(--si-sys-text-primary);--ix-date-picker-day--color--range-disabled:var(--si-sys-text-disabled);--ix-date-picker-day--color--selected:var(--si-sys-text-on-accent);--ix-date-picker-day--color--selected-disabled:var(--si-sys-text-disabled);--ix-date-picker-today--border-color:var(--si-sys-border-accent);--ix-date-picker-today--contrast-ring-color:var(--si-sys-background-0);--ix-date-picker-today--border-color--range-disabled:var(--si-sys-background-1);--ix-date-picker-weekday--color:var(--si-sys-text-secondary);--ix-date-picker-menu-item--color:var(--si-sys-text-primary);--ix-date-picker-list-item--background--hover:var(--si-sys-background-hover);--ix-date-picker-list-item--background--selected:var(--si-sys-background-active)}:host{display:block;position:relative;max-width:21rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .header{display:flex;align-items:center;justify-content:space-between}:host .disabled-item{pointer-events:none;background-color:var(--ix-date-picker-day--background--disabled);color:var(--ix-date-picker-day--color--disabled);cursor:default}:host .selector{flex-basis:100%;display:flex;align-items:center;justify-content:center;padding:0 1rem}:host .selector .dropdown{color:var(--ix-date-picker-menu-item--color);font-size:14px;line-height:20px}:host .selector .arrowYear{display:flex;position:relative;padding:0.75rem 2rem;align-items:center;cursor:pointer}:host .selector .arrowYear:hover{background-color:var(--ix-date-picker-list-item--background--hover)}:host .selector .arrowYear.selected{background-color:var(--ix-date-picker-list-item--background--selected)}:host .selector .arrowYear .arrowPosition{position:absolute;left:calc(1rem - 6px);top:calc(50% - 6px)}:host .selector .arrowYear .checkPosition{position:absolute;left:calc(1rem - 6px);top:calc(50% - 8px)}:host .selector .arrowYear .monthMargin{margin-left:10px}:host .grid{display:grid;grid-template-columns:repeat(7, 40px);grid-template-rows:repeat(7, 40px);align-items:center;justify-items:center;justify-content:center}:host .grid--show-week-numbers{grid-template-columns:24px repeat(7, 40px)}:host .grid [role=row]{display:grid;grid-column:1/-1;grid-template-columns:subgrid}:host .grid .calendar-item{position:relative;display:flex;justify-content:center;align-items:center;background-color:var(--ix-date-picker-day--background);border:1px solid var(--ix-date-picker-day--background);color:var(--ix-date-picker-day--color);width:40px;height:40px;cursor:pointer}:host .grid .calendar-item:focus-visible{outline:1px solid var(--ix-date-picker-day--outline-color--focus);outline-offset:var(--ix-date-picker--focus--outline-offset);z-index:1}:host .grid .calendar-item.today{border:1px solid var(--ix-date-picker-today--border-color);box-shadow:inset 0 0 0 1px var(--ix-date-picker-today--contrast-ring-color)}:host .grid .calendar-item.today.selected.disabled{border:1px solid var(--ix-date-picker-day--background--selected-disabled)}:host .grid .calendar-item.today.range.disabled{border:1px solid var(--ix-date-picker-today--border-color--range-disabled)}:host .grid .calendar-item.today.disabled{cursor:default}:host .grid .calendar-item:hover{background-color:var(--ix-date-picker-day--background--hover)}:host .grid .calendar-item:active{background-color:var(--ix-date-picker-day--background--active)}:host .grid .calendar-item.selected{background-color:var(--ix-date-picker-day--background--selected);color:var(--ix-date-picker-day--color--selected);border:1px solid var(--ix-date-picker-day--background--selected);font-weight:var(--ix-date-picker-day--font-weight--selected)}:host .grid .calendar-item.selected:hover{background-color:var(--ix-date-picker-day--background--selected-hover)}:host .grid .calendar-item.selected:active{background-color:var(--ix-date-picker-day--background--selected-active)}:host .grid .calendar-item.selected.disabled{pointer-events:none;background-color:var(--ix-date-picker-day--background--selected-disabled);color:var(--ix-date-picker-day--color--selected-disabled)}:host .grid .calendar-item.range{background-color:var(--ix-date-picker-day--background--range);color:var(--ix-date-picker-day--color--range)}:host .grid .calendar-item.range:hover{background-color:var(--ix-date-picker-day--background--range-hover)}:host .grid .calendar-item.range:active{background-color:var(--ix-date-picker-day--background--range-active)}:host .grid .calendar-item.range.disabled{pointer-events:none;background-color:var(--ix-date-picker-day--background--range-disabled);color:var(--ix-date-picker-day--color--range-disabled)}:host .grid .calendar-item.disabled{pointer-events:none;background-color:var(--ix-date-picker-day--background--disabled);color:var(--ix-date-picker-day--color--disabled)}:host .grid .calendar-item.week-day{color:var(--ix-date-picker-weekday--color);font-size:var(--ix-date-picker-weekday--font-size);line-height:143%;border:none;background:none;cursor:initial}:host .grid .calendar-item.week-day .overflow{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .grid .calendar-item.empty-day{border:none;background:none;cursor:initial}:host .grid .calendar-item.week-number{font-size:10px;line-height:14px;color:var(--ix-date-picker-weekday--color);border:none;background:none;cursor:initial;width:1.5rem}:host .button{display:flex;justify-content:flex-end;margin-top:1rem}:host .hidden{display:none}:host .infinite-scrolling-spacer:first-of-type{position:relative;padding-bottom:4rem}:host .infinite-scrolling-spacer:first-of-type .sentinel{position:absolute;bottom:0;height:1px;width:50px}:host .infinite-scrolling-spacer:last-of-type{position:relative;padding-top:4rem}:host .infinite-scrolling-spacer:last-of-type .sentinel{position:absolute;top:0;height:1px;width:50px}:host .month-selector,:host .year-selector{--ix-button-padding:0 0.25rem}`;
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
    const date = this.parseDateString(newValue);
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
    const date = this.parseDateString(newValue);
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
   * The index of which day to start the week on, based on the Locale#weekdays array.
   * E.g. if the locale is en-us, weekStartIndex = 1 results in starting the week on Monday.
   */
  weekStartIndex = 0;
  /**
   * Locale identifier (e.g. 'en' or 'de').
   * The locale is used to translate the labels for weekdays and months.
   * It also determines the default order of weekdays based on the locale's conventions.
   * When the locale changes, the weekday labels are rotated according to the `weekStartIndex`.
   * It does not affect the values returned by methods and events.
   */
  locale;
  onLocaleChange() {
    this.setTranslations();
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
   * Emitted when the date selection changes. The `DateChangeEvent` contains `from` and `to` properties.
   * The property strings are formatted according to the `format` property and not affected by the `locale` property.
   * The locale applied is always `en-US`.
   * Note: Since 2.0.0 `dateChange` does not dispatch detail property as `string`
   */
  dateChange;
  /**
   * Date range change event. Emitted when the date range selection changes and the component is in range mode. The `DateChangeEvent` contains `from` and `to` properties.
   * The property strings are formatted according to the `format` property and not affected by the `locale` property.
   * The locale applied is always `en-US`.
   */
  dateRangeChange;
  /**
   * Date selection event. Emitted when the selection is confirmed via the date select button. The `DateChangeEvent` contains `from` and `to` properties.
   * The property strings are formatted according to the `format` property and not affected by the `locale` property.
   * The locale applied is always `en-US`.
   */
  dateSelect;
  /**
   * Get the currently selected date or range. The object returned contains `from` and `to` properties.
   * The property strings are formatted according to the `format` property and not affected by the `locale` property.
   * The locale applied is always `en-US`.
   */
  async getCurrentDate() {
    const _from = this.currFromDate?.isValid ? this.currFromDate?.toFormat(this.format) : void 0;
    const _to = this.currToDate?.isValid ? this.currToDate?.toFormat(this.format) : void 0;
    if (!this.singleSelection) {
      return {
        from: _from,
        to: _to
      };
    }
    return {
      from: _from,
      to: void 0
    };
  }
  currFromDate;
  currToDate;
  selectedYear = 0;
  tempYear = 0;
  startYear = 0;
  endYear = 0;
  selectedMonth = 0;
  tempMonth = 0;
  yearDropdownButtonRef = makeRef();
  yearMonthSelectionDropdownRef = makeRef();
  dayNames = [];
  monthNames = [];
  focusedDay = 1;
  isDayFocus = false;
  monthChangedFromFocus = false;
  DAYS_IN_WEEK = 7;
  calendar = [];
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
    return DateTime.utc(this.selectedYear, this.selectedMonth + 1).daysInMonth || 0;
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
  parseDateString(dateString) {
    const date = DateTime.fromFormat(dateString, this.format);
    if (!date.isValid) {
      console.error(date.invalidExplanation);
      return void 0;
    }
    return date;
  }
  /**
   * @internal
   */
  async updateSelectedYearMonth(date) {
    this.selectedYear = date.year;
    this.selectedMonth = date.month - 1;
  }
  onDayBlur() {
    this.isDayFocus = false;
  }
  onDayFocus() {
    this.isDayFocus = true;
  }
  componentWillLoad() {
    this.setTranslations();
    this.currFromDate = this.from ? DateTime.fromFormat(this.from, this.format) : void 0;
    this.currToDate = this.to ? DateTime.fromFormat(this.to, this.format) : void 0;
    const year = this.currFromDate?.year ?? this.getDateTimeNow().year;
    this.startYear = year - 101;
    this.endYear = year + 101;
    this.selectedMonth = (this.currFromDate?.month ?? this.getDateTimeNow().month) - 1;
    this.selectedYear = year;
    this.tempMonth = this.selectedMonth;
    this.tempYear = this.selectedYear;
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
    this.calculateCalendar();
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
    this.dayNames = this.rotateWeekDayNames(Info.weekdays("long", {
      locale: this.locale
    }), this.weekStartIndex);
    this.monthNames = Info.months("long", {
      locale: this.locale
    });
  }
  /**
   * Rotate the WeekdayNames array.
   * Based on the position that should be the new 0-index.
   */
  rotateWeekDayNames(weekdays, index) {
    const clone = [...weekdays];
    if (index === 0) {
      return clone;
    }
    index = -index;
    const len = weekdays.length;
    clone.push(...clone.splice(0, (-index % len + len) % len));
    return clone;
  }
  async onDone() {
    const date = await this.getCurrentDate();
    this.dateSelect.emit(date);
  }
  calculateCalendar() {
    const calendar = [];
    const month = DateTime.utc(this.selectedYear, this.selectedMonth + 1);
    const monthStart = month.startOf("month");
    const monthEnd = month.endOf("month");
    let startWeek = monthStart.weekNumber;
    let endWeek = monthEnd.weekNumber;
    let monthStartWeekDayIndex = monthStart.weekday - 1;
    let monthEndWeekDayIndex = monthEnd.weekday - 1;
    if (this.weekStartIndex !== 0) {
      const weekdays = Info.weekdays();
      const monthStartWeekDayName = weekdays[monthStart.weekday];
      monthStartWeekDayIndex = this.dayNames.findIndex((d) => d === monthStartWeekDayName);
      const monthEndWeekDayName = weekdays[monthEnd.weekday];
      monthEndWeekDayIndex = this.dayNames.findIndex((d) => d === monthEndWeekDayName);
    }
    let correctLastWeek = false;
    if (endWeek === 1) {
      endWeek = monthEnd.weeksInWeekYear + 1;
      correctLastWeek = true;
    }
    let correctFirstWeek = false;
    if (startWeek === monthStart.weeksInWeekYear) {
      startWeek = 1;
      endWeek++;
      correctFirstWeek = true;
    }
    let currDayNumber = 1;
    for (let weekIndex = startWeek; weekIndex <= endWeek && currDayNumber <= 31; weekIndex++) {
      const daysArr = [];
      for (let j = 0; j < this.DAYS_IN_WEEK && currDayNumber <= 31; j++) {
        if (weekIndex === startWeek && j < monthStartWeekDayIndex || weekIndex === endWeek && j > monthEndWeekDayIndex) {
          daysArr.push(void 0);
        } else {
          daysArr.push(currDayNumber++);
        }
      }
      if (correctFirstWeek || correctLastWeek) {
        if (weekIndex === 1) {
          calendar.push({
            weekNumber: monthStart.weeksInWeekYear,
            dayNumbers: daysArr
          });
        } else if (weekIndex === monthEnd.weekNumber) {
          calendar.push({
            weekNumber: 1,
            dayNumbers: daysArr
          });
        } else {
          calendar.push({
            weekNumber: weekIndex - 1,
            dayNumbers: daysArr
          });
        }
        continue;
      }
      calendar.push({
        weekNumber: weekIndex,
        dayNumbers: daysArr
      });
    }
    this.calendar = calendar;
  }
  selectMonth(month) {
    this.selectedMonth = month;
    this.selectedYear = this.tempYear;
    this.tempMonth = month;
  }
  changeCalendarView(number) {
    if (this.selectedMonth + number < 0) {
      this.selectedYear--;
      this.selectedMonth = 11;
    } else if (this.selectedMonth + number > 11) {
      this.selectedYear++;
      this.selectedMonth = 0;
    } else {
      this.selectedMonth += number;
    }
    this.tempMonth = this.selectedMonth;
    this.tempYear = this.selectedYear;
  }
  navigateByMonthOrYear(unit, direction) {
    let targetYear = this.selectedYear;
    let targetMonth = this.selectedMonth;
    if (unit === "year") {
      targetYear += direction;
    } else {
      targetMonth += direction;
      if (targetMonth < 0) {
        targetMonth = 11;
        targetYear--;
      } else if (targetMonth > 11) {
        targetMonth = 0;
        targetYear++;
      }
    }
    const daysInTargetMonth = DateTime.utc(targetYear, targetMonth + 1).daysInMonth || 0;
    this.focusedDay = Math.min(this.focusedDay, daysInTargetMonth);
    this.selectedYear = targetYear;
    this.selectedMonth = targetMonth;
    this.tempYear = targetYear;
    this.tempMonth = targetMonth;
    this.monthChangedFromFocus = true;
  }
  selectDay(selectedDay, target) {
    if (target.classList.contains("disabled")) {
      return;
    }
    const date = DateTime.fromJSDate(new Date(this.selectedYear, this.selectedMonth, selectedDay));
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
    const selectedDayObj = DateTime.fromJSDate(new Date(this.selectedYear, this.selectedMonth, day));
    return {
      isFirstDay: () => day === 1,
      isToday: () => todayObj.hasSame(selectedDayObj, "day"),
      isSelected: () => !!(this.currFromDate?.hasSame(selectedDayObj, "day") || this.currToDate?.hasSame(selectedDayObj, "day")),
      isRange: () => !!(this.currFromDate && selectedDayObj.startOf("day") > this.currFromDate.startOf("day") && this.currToDate !== void 0 && selectedDayObj.startOf("day") < this.currToDate?.startOf("day"))
    };
  }
  getDayClasses(day) {
    const selectedDayObj = DateTime.fromJSDate(new Date(this.selectedYear, this.selectedMonth, day));
    const util = this.getUtilitiesBasedOnDay(day);
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
    const minDateYear = this.minDate ? DateTime.fromFormat(this.minDate, this.format).year : void 0;
    const maxDateYear = this.maxDate ? DateTime.fromFormat(this.maxDate, this.format).year : void 0;
    const isBefore = minDateYear ? year < minDateYear : false;
    const isAfter = maxDateYear ? year > maxDateYear : false;
    return !isBefore && !isAfter;
  }
  isWithinMinMaxMonth(month) {
    const minDateObj = this.minDate ? DateTime.fromFormat(this.minDate, this.format) : void 0;
    const maxDateObj = this.maxDate ? DateTime.fromFormat(this.maxDate, this.format) : void 0;
    const minDateMonth = minDateObj?.month;
    const maxDateMonth = maxDateObj?.month;
    const isBefore = minDateMonth ? this.tempYear === minDateObj.year && month < minDateMonth : false;
    const isAfter = maxDateMonth ? this.tempYear === maxDateObj.year && month > maxDateMonth : false;
    return !isBefore && !isAfter;
  }
  isWithinMinMaxDate(date) {
    const _minDate = this.minDate ? DateTime.fromFormat(this.minDate, this.format) : void 0;
    const _maxDate = this.maxDate ? DateTime.fromFormat(this.maxDate, this.format) : void 0;
    const isBefore = _minDate ? date.startOf("day") < _minDate.startOf("day") : false;
    const isAfter = _maxDate ? date.startOf("day") > _maxDate.startOf("day") : false;
    return !isBefore && !isAfter;
  }
  renderMonths() {
    return this.monthNames.map((month, index) => {
      const selected = this.tempYear === this.selectedYear && this.tempMonth === index;
      return h("ix-dropdown-item", { checked: selected, key: month, class: {
        "month-dropdown-item": true,
        "disabled-item": !this.isWithinMinMaxMonth(index)
      }, onClick: () => {
        this.selectMonth(index);
      } }, h("span", { class: "capitalize monthMargin" }, `${month}`));
    });
  }
  renderYears() {
    const rows = [];
    for (let year = this.startYear; year <= this.endYear; year++) {
      const selected = this.tempYear === year;
      rows.push(h("ix-dropdown-item", { key: year, checked: selected, class: {
        "month-dropdown-item": true,
        "disabled-item": !this.isWithinMinMaxYear(year)
      }, onClick: () => {
        this.tempYear = year;
        this.selectedYear = this.tempYear;
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
    return h(Host, { key: "3458c4bea7ef80ab2c616f77348c63eaece00581", onKeyDown: (event) => this.onKeyDown(event), onFocusin: () => {
      if (hasKeyboardMode()) {
        this.changeFocusedDay();
      }
    } }, h("ix-date-time-card", { key: "9c73282fed880aab968986c332ca62481ed5b730", corners: this.corners, embedded: this.embedded }, h("div", { key: "c814b92b43cda8bdf5e73f3e7e30f7385b0ffe10", class: "header", slot: "header" }, h("ix-icon-button", { key: "044bef1dd85d813831ef8fa47c437ca25c899624", onClick: () => this.changeCalendarView(-1), icon: iconChevronLeftSmall, variant: "tertiary", class: "arrows", "aria-label": this.ariaLabelPreviousMonthButton }), h("div", { key: "be634858a1b8b0622721eb5aa160e2a8ed52032a", class: "selector" }, h("ix-dropdown-button", { key: "fa8d3728981865aea36e4e378484fcf1c6f72711", class: "month-selector", focusCheckedItem: true, "aria-label": this.ariaLabelMonthSelection, variant: "tertiary", label: null, onShowChanged: (event) => {
      event.stopPropagation();
    } }, h("ix-typography", { key: "1a5ae480260fc0c170aa5f4d546d14e14ceacd74", bold: true, class: "capitalize", slot: "button-label" }, this.monthNames[this.selectedMonth]), this.renderMonths()), h("ix-dropdown-button", { key: "32d1eee78134a12303631d9de0ec70ebb4f2e4b3", class: "year-selector", focusCheckedItem: true, "aria-label": this.ariaLabelYearSelection, ref: this.yearDropdownButtonRef, variant: "tertiary", label: null, onShowChanged: (event) => {
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
    } }, h("div", { key: "28846f6acda129972963577128df16b02c516346", class: "infinite-scrolling-spacer" }, h("div", { key: "98f4a1829b3a3df58f1b21d4c89f87d5798bb0c3", class: "sentinel", "data-sentinel": "top" })), h("ix-typography", { key: "54c644741612e700727fc7d4ef04dfeedf34bb23", bold: true, class: "capitalize", slot: "button-label" }, this.selectedYear), this.renderYears(), h("div", { key: "834cf2650c526a80769b937ad380b00b735cb1ed", class: "infinite-scrolling-spacer" }, h("div", { key: "9a34aae402117c35708717c54e486ed08ed78689", class: "sentinel", "data-sentinel": "bottom" })))), h("ix-icon-button", { key: "b00d0dfa90c9187941700bf5e02512486c9b82e2", onClick: () => this.changeCalendarView(1), icon: iconChevronRightSmall, variant: "tertiary", class: "arrows", "aria-label": this.ariaLabelNextMonthButton })), h("div", { key: "5956956318bdbbab0003cb6e78c76932baf09285", role: "grid", class: {
      grid: true,
      "grid--show-week-numbers": this.showWeekNumbers
    } }, h("div", { key: "2eaf43cebdbfca20d9cfec63415b788be225099b", role: "row" }, this.showWeekNumbers && h("div", { key: "8f33dc5bd657a93b984b937df8315b3d09d5acf0", class: "calendar-item week-day", role: "columnheader" }), this.dayNames.map((name) => h("div", { key: name, class: "calendar-item week-day", role: "columnheader" }, h("div", { class: "overflow" }, name.slice(0, 3))))), this.calendar.map((week) => {
      return h("div", { role: "row" }, this.showWeekNumbers && h("div", { class: "calendar-item week-number", role: "rowheader" }, week.weekNumber), week.dayNumbers.map((day) => {
        return day ? h("div", { role: "gridcell", "aria-selected": this.getUtilitiesBasedOnDay(day).isSelected() ? "true" : "false", key: day, id: `day-cell-${day}`, "data-calendar-day": day, "data-date-value": `${week.weekNumber}-${day}`, class: this.getDayClasses(day), onClick: (e) => {
          const target = e.currentTarget;
          this.selectDay(day, target);
        }, onKeyDown: (e) => {
          const target = e.currentTarget;
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            this.selectDay(day, target);
          }
        }, tabIndex: day === this.focusedDay ? 0 : -1, autofocus: this.getUtilitiesBasedOnDay(day).isToday(), onFocus: () => this.onDayFocus(), onBlur: () => this.onDayBlur(), "aria-label": `${day} ${Info.months()[this.selectedMonth]} ${this.selectedYear}` }, day) : h("div", { role: "gridcell" });
      }));
    })), h("div", { key: "c59ac30613df6b27ced9126dab5081ed6a8112eb", class: {
      button: true,
      hidden: this.singleSelection || this.embedded
    } }, h("ix-button", { key: "793b5888c0749afd1d1d1e6a1398051160e3e4a9", hidden: this.singleSelection || this.embedded, onClick: () => this.onDone() }, this.i18nDone))));
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
      "locale": [{
        "onLocaleChange": 0
      }]
    };
  }
};
DatePicker.style = datePickerCss();
export {
  DatePicker as ix_date_picker
};
