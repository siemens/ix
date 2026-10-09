import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-CU4RCWGK.js";
import { A as iconHistory } from "./index-BeX6RWvV-CXzUIwMU.js";
import { D as DateTime } from "./datetime-D1WplX1z-grPSvmS5.js";
import { t as toISODate, p as parseWithLocale } from "./date-time-locale-z9QO_wsw-BUrPNoSy.js";
import { D as DefaultMixins, h as hasKeyboardMode } from "./component-BP5Ot-Ed-DlnqSJRp.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { r as requestAnimationFrameNoNgZone } from "./requestAnimationFrame-BEuV0Xpe-CBtvTq-Q.js";
import { B as BaseButton } from "./base-button-CE8k_1TC-BjtFnklQ.js";
import { c as a11yHostAttributes, a as a11yBoolean } from "./a11y-DD206pTM-BiwZPW5s.js";
import { T as TRAP_FOCUS_EXCLUDE_ATTRIBUTE } from "./focus-trap-UgUryLm8-DN5Sb8-s.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
import "./shadow-dom-C7UpA3Tm-CtINZypD.js";
import "./base-button.types-CAnyVyxc-CKNxtuf9.js";
const dateDropdownCss = () => `@charset "UTF-8";:host{--ix-button--outline-color--focus:var(--si-sys-color-effects-focus);--ix-button-danger-primary--background:var(--si-sys-color-background-danger);--ix-button-danger-primary--background--active:var(--si-sys-color-background-danger-active);--ix-button-danger-primary--background--disabled:var(--si-sys-color-background-1);--ix-button-danger-primary--background--hover:var(--si-sys-color-background-danger-hover);--ix-button-danger-primary--border-color:rgba(0, 0, 0, 0);--ix-button-danger-primary--border-color--active:rgba(0, 0, 0, 0);--ix-button-danger-primary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-danger-primary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-danger-primary--color:var(--si-sys-color-text-on-danger);--ix-button-danger-primary--color--active:var(--si-sys-color-text-on-danger);--ix-button-danger-primary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-danger-primary--color--hover:var(--si-sys-color-text-on-danger);--ix-button-danger-secondary--background:rgba(0, 0, 0, 0);--ix-button-danger-secondary--background--active:var(--si-sys-color-background-danger-active);--ix-button-danger-secondary--background--disabled:rgba(0, 0, 0, 0);--ix-button-danger-secondary--background--hover:var(--si-sys-color-background-danger-hover);--ix-button-danger-secondary--border-color:var(--si-sys-color-text-danger);--ix-button-danger-secondary--border-color--active:var(--si-sys-color-border-danger);--ix-button-danger-secondary--border-color--disabled:var(--si-sys-color-border-3);--ix-button-danger-secondary--border-color--hover:var(--si-sys-color-border-danger);--ix-button-danger-secondary--color:var(--si-sys-color-text-danger);--ix-button-danger-secondary--color--active:var(--si-sys-color-text-on-danger);--ix-button-danger-secondary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-danger-secondary--color--hover:var(--si-sys-color-text-on-danger);--ix-button-danger-tertiary--background:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--background--active:var(--si-sys-color-background-danger-active);--ix-button-danger-tertiary--background--disabled:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--background--hover:var(--si-sys-color-background-danger-hover);--ix-button-danger-tertiary--border-color:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--border-color--active:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--color:var(--si-sys-color-text-danger);--ix-button-danger-tertiary--color--active:var(--si-sys-color-text-on-danger);--ix-button-danger-tertiary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-danger-tertiary--color--hover:var(--si-sys-color-text-on-danger);--ix-button-primary--background:var(--si-sys-color-background-accent);--ix-button-primary--background--active:var(--si-sys-color-background-accent-active);--ix-button-primary--background--disabled:var(--si-sys-color-background-1);--ix-button-primary--background--hover:var(--si-sys-color-background-accent-hover);--ix-button-primary--background--pressed:var(--si-sys-color-background-accent-hover);--ix-button-primary--background--pressed-active:var(--si-sys-color-background-accent-active);--ix-button-primary--background--pressed-hover:var(--si-sys-color-background-accent-hover);--ix-button-primary--border-color:rgba(0, 0, 0, 0);--ix-button-primary--border-color--active:rgba(0, 0, 0, 0);--ix-button-primary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-primary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-primary--border-color--pressed:rgba(0, 0, 0, 0);--ix-button-primary--border-color--pressed-hover:rgba(0, 0, 0, 0);--ix-button-primary--border-color--pressed-hover-active:rgba(0, 0, 0, 0);--ix-button-primary--color:var(--si-sys-color-text-on-accent);--ix-button-primary--color--active:var(--si-sys-color-text-on-accent);--ix-button-primary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-primary--color--hover:var(--si-sys-color-text-on-accent);--ix-button-primary--color--pressed:var(--si-sys-color-text-on-accent);--ix-button-primary--color--pressed-active:var(--si-sys-color-text-on-accent);--ix-button-primary--color--pressed-hover:var(--si-sys-color-text-on-accent);--ix-button-secondary--background:var(--si-sys-color-background-accent-secondary);--ix-button-secondary--background--active:var(--si-sys-color-background-accent-secondary-active);--ix-button-secondary--background--disabled:rgba(0, 0, 0, 0);--ix-button-secondary--background--hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button-secondary--background--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button-secondary--background--pressed-active:var(--si-sys-color-background-accent-secondary-active);--ix-button-secondary--background--pressed-hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button-secondary--border-color:var(--si-sys-color-border-accent);--ix-button-secondary--border-color--active:var(--si-sys-color-border-accent-active);--ix-button-secondary--border-color--disabled:var(--si-sys-color-border-3);--ix-button-secondary--border-color--hover:var(--si-sys-color-border-accent-hover);--ix-button-secondary--border-color--pressed:var(--si-sys-color-border-accent-hover);--ix-button-secondary--border-color--pressed-active:var(--si-sys-color-border-accent-active);--ix-button-secondary--border-color--pressed-hover:var(--si-sys-color-border-accent-hover);--ix-button-secondary--color:var(--si-sys-color-text-accent);--ix-button-secondary--color--active:var(--si-sys-color-text-accent-active);--ix-button-secondary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-secondary--color--hover:var(--si-sys-color-text-accent-hover);--ix-button-secondary--color--pressed:var(--si-sys-color-text-accent-hover);--ix-button-secondary--color--pressed-active:var(--si-sys-color-text-accent-active);--ix-button-secondary--color--pressed-hover:var(--si-sys-color-text-accent-hover);--ix-button-subtle-primary--background:var(--si-sys-color-background-2);--ix-button-subtle-primary--background--active:var(--si-sys-color-background-selected);--ix-button-subtle-primary--background--disabled:var(--si-sys-color-background-1);--ix-button-subtle-primary--background--hover:var(--si-sys-color-background-hover);--ix-button-subtle-primary--background--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button-subtle-primary--background--pressed-active:var(--si-sys-color-background-accent-secondary-active);--ix-button-subtle-primary--background--pressed-hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button-subtle-primary--border-color:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--active:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--pressed:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--pressed-active:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--pressed-hover:rgba(0, 0, 0, 0);--ix-button-subtle-primary--color:var(--si-sys-color-text-primary);--ix-button-subtle-primary--color--active:var(--si-sys-color-text-primary);--ix-button-subtle-primary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-subtle-primary--color--hover:var(--si-sys-color-text-primary);--ix-button-subtle-primary--color--pressed:var(--si-sys-color-text-accent-hover);--ix-button-subtle-primary--color--pressed-active:var(--si-sys-color-text-accent-hover);--ix-button-subtle-primary--color--pressed-hover:var(--si-sys-color-text-accent-hover);--ix-button-subtle-secondary--background:rgba(0, 0, 0, 0);--ix-button-subtle-secondary--background--active:var(--si-sys-color-background-selected);--ix-button-subtle-secondary--background--disabled:rgba(0, 0, 0, 0);--ix-button-subtle-secondary--background--hover:var(--si-sys-color-background-hover);--ix-button-subtle-secondary--background--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button-subtle-secondary--background--pressed-active:var(--si-sys-color-background-accent-secondary-active);--ix-button-subtle-secondary--background--pressed-hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button-subtle-secondary--border-color:var(--si-sys-color-border-2);--ix-button-subtle-secondary--border-color--active:var(--si-sys-color-border-2);--ix-button-subtle-secondary--border-color--disabled:var(--si-sys-color-border-3);--ix-button-subtle-secondary--border-color--hover:var(--si-sys-color-border-2);--ix-button-subtle-secondary--border-color--pressed:var(--si-sys-color-border-2);--ix-button-subtle-secondary--border-color--pressed-active:var(--si-sys-color-border-2);--ix-button-subtle-secondary--border-color--pressed-hover:var(--si-sys-color-border-2);--ix-button-subtle-secondary--color:var(--si-sys-color-text-primary);--ix-button-subtle-secondary--color--active:var(--si-sys-color-text-primary);--ix-button-subtle-secondary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-subtle-secondary--color--hover:var(--si-sys-color-text-primary);--ix-button-subtle-secondary--color--pressed:var(--si-sys-color-text-accent-hover);--ix-button-subtle-secondary--color--pressed-active:var(--si-sys-color-text-accent-hover);--ix-button-subtle-secondary--color--pressed-hover:var(--si-sys-color-text-accent-hover);--ix-button-subtle-tertiary--background:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--background--active:var(--si-sys-color-background-selected);--ix-button-subtle-tertiary--background--disabled:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--background--hover:var(--si-sys-color-background-hover);--ix-button-subtle-tertiary--background--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button-subtle-tertiary--background--pressed-active:var(--si-sys-color-background-accent-secondary-active);--ix-button-subtle-tertiary--background--pressed-hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button-subtle-tertiary--border-color:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--active:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--pressed:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--pressed-active:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--pressed-hover:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--color:var(--si-sys-color-text-primary);--ix-button-subtle-tertiary--color--active:var(--si-sys-color-text-primary);--ix-button-subtle-tertiary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-subtle-tertiary--color--hover:var(--si-sys-color-text-primary);--ix-button-subtle-tertiary--color--pressed:var(--si-sys-color-text-accent-hover);--ix-button-subtle-tertiary--color--pressed-active:var(--si-sys-color-text-accent-hover);--ix-button-subtle-tertiary--color--pressed-hover:var(--si-sys-color-text-accent-hover);--ix-button-tertiary--background:rgba(0, 0, 0, 0);--ix-button-tertiary--background--active:var(--si-sys-color-background-accent-secondary-active);--ix-button-tertiary--background--disabled:rgba(0, 0, 0, 0);--ix-button-tertiary--background--hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button-tertiary--background--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button-tertiary--background--pressed-active:var(--si-sys-color-background-accent-secondary-active);--ix-button-tertiary--background--pressed-hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button-tertiary--border-color:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--active:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--pressed:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--pressed-active:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--pressed-hover:rgba(0, 0, 0, 0);--ix-button-tertiary--color:var(--si-sys-color-text-accent);--ix-button-tertiary--color--active:var(--si-sys-color-text-accent-active);--ix-button-tertiary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-tertiary--color--hover:var(--si-sys-color-text-accent-hover);--ix-button-tertiary--color--pressed:var(--si-sys-color-text-accent-hover);--ix-button-tertiary--color--pressed-active:var(--si-sys-color-text-accent-active);--ix-button-tertiary--color--pressed-hover:var(--si-sys-color-text-accent-hover)}:host{--ix-button--border-radius:var(--si-sys-sizing-border-radius-xs);--ix-button--border-width:var(--si-sys-sizing-border-width-default);--ix-button--outline-width--focus:var(--si-sys-sizing-border-width-default);--ix-button--focus--outline-offset:var(--si-sys-sizing-focus-ring-offset);--ix-button--padding:0 var(--si-sys-sizing-spacing-x-40);--ix-button--height:var(--si-sys-sizing-size-80);--ix-button--margin-right:var(--si-sys-sizing-spacing-x-20);--ix-button-icon--margin-right:var(--si-sys-sizing-spacing-x-20);--ix-button-icon-right--margin-left:var(--si-sys-sizing-spacing-x-20);--ix-button--min-width:var(--si-sys-sizing-size-120)}:host{--ix-date-dropdown-divider--border:var(--si-sys-sizing-border-width-default)     solid var(--si-sys-color-border-4);--ix-date-dropdown--outline-color--focus:var(--si-sys-color-effects-focus)}:host{--ix-date-dropdown--focus--outline-offset:var(--si-sys-sizing-focus-ring-offset);--ix-date-dropdown-pull-right--padding:var(--si-sys-sizing-spacing-y-60) var(--si-sys-sizing-spacing-x-60);--ix-date-dropdown-quick-selection--gap:var(--si-sys-sizing-spacing-y-20);--ix-date-dropdown-quick-selection--padding:var(--si-sys-sizing-spacing-y-40)     var(--si-sys-sizing-spacing-x-40);--ix-date-dropdown-button--min-width:calc(     var(--si-sys-sizing-size-140) + var(--si-sys-sizing-spacing-x-40)   );--ix-date-dropdown-button--min-height:var(--si-sys-sizing-size-80);--ix-date-dropdown-button--max-height:var(--si-sys-sizing-size-80);--ix-date-dropdown-container--height:calc(     var(--si-sys-sizing-size-90) * 10   );--ix-date-dropdown-container--max-height:calc(     var(--si-sys-sizing-size-90) * 10   );--ix-date-dropdown-picker-wrapper--height:calc(     var(--si-sys-sizing-size-170) + var(--si-sys-sizing-spacing-y-60)   );--ix-date-dropdown-quick-selection--max-height:calc(     var(--si-sys-sizing-size-150) + var(--si-sys-sizing-spacing-y-90)   );--ix-date-dropdown--outline-width--focus:var(--si-sys-sizing-border-width-default)}:host{display:inline-block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .pull-right{position:relative;float:right;padding:var(--ix-date-dropdown-pull-right--padding)}:host .quick-selection{display:inline-flex;flex-direction:column;gap:var(--ix-date-dropdown-quick-selection--gap);border-right:var(--ix-date-dropdown-divider--border);overflow:auto;padding:var(--ix-date-dropdown-quick-selection--padding)}:host .quick-selection *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host .quick-selection *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host .quick-selection *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host .quick-selection *{}:host .quick-selection *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host .quick-selection *{}:host .quick-selection *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host .quick-selection *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host .quick-selection *{}:host .quick-selection *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host .quick-selection *{}:host .quick-selection *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host .quick-selection *::-webkit-scrollbar-corner{display:none}:host .quick-selection .btn{all:unset;box-sizing:border-box;display:inline-flex;flex-direction:row;flex-wrap:nowrap;overflow:hidden;align-items:center;justify-content:center;width:100%;height:100%;padding:var(--ix-button-padding, var(--ix-button--padding));min-width:var(--ix-date-dropdown-button--min-width);min-height:var(--ix-date-dropdown-button--min-height);max-height:var(--ix-date-dropdown-button--max-height);justify-content:flex-start}:host .quick-selection .btn:focus-visible{outline:var(--ix-date-dropdown--outline-width--focus) solid var(--ix-date-dropdown--outline-color--focus);outline-offset:var(--ix-date-dropdown--focus--outline-offset)}:host .quick-selection .btn-subtle-tertiary{text-align:start;border-top-left-radius:var(--ix-button-border-radius-left);border-bottom-left-radius:var(--ix-button-border-radius-left);border-top-right-radius:var(--ix-button-border-radius-right);border-bottom-right-radius:var(--ix-button-border-radius-right)}:host .quick-selection .btn-subtle-tertiary{background-color:var(--ix-button-subtle-tertiary--background);color:var(--ix-button-subtle-tertiary--color);--ix-button-color:var(--ix-button-subtle-tertiary--color);border-width:var(--ix-button--border-width);border-color:var(--ix-button-subtle-tertiary--border-color);border-style:solid}:host .quick-selection .btn-subtle-tertiary.selected{background-color:var(--ix-button-subtle-tertiary--background--pressed);color:var(--ix-button-subtle-tertiary--color--pressed)}:host .quick-selection .btn-subtle-tertiary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .quick-selection .btn-subtle-tertiary.selected:not(.disabled):not(:disabled):hover,:host .quick-selection .btn-subtle-tertiary.selected:not(.disabled):not(:disabled).hover{background-color:var(--ix-button-subtle-tertiary--background--pressed-hover);color:var(--ix-button-subtle-tertiary--color--pressed-hover)}:host .quick-selection .btn-subtle-tertiary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .quick-selection .btn-subtle-tertiary.selected:not(.disabled):not(:disabled):active,:host .quick-selection .btn-subtle-tertiary.selected:not(.disabled):not(:disabled).active{background-color:var(--ix-button-subtle-tertiary--background--pressed-hover);color:var(--ix-button-subtle-tertiary--color--pressed-active)}:host .quick-selection .btn-subtle-tertiary:not(.disabled):not(:disabled){cursor:pointer}:host .quick-selection .btn-subtle-tertiary:not(.disabled):not(:disabled):hover,:host .quick-selection .btn-subtle-tertiary:not(.disabled):not(:disabled).hover{border-color:var(--ix-button-subtle-tertiary--border-color--hover);background-color:var(--ix-button-subtle-tertiary--background--hover);color:var(--ix-button-subtle-tertiary--color--hover)}:host .quick-selection .btn-subtle-tertiary:not(.disabled):not(:disabled){cursor:pointer}:host .quick-selection .btn-subtle-tertiary:not(.disabled):not(:disabled):active,:host .quick-selection .btn-subtle-tertiary:not(.disabled):not(:disabled).active{border-color:var(--ix-button-subtle-tertiary--border-color--active);background-color:var(--ix-button-subtle-tertiary--background--active);color:var(--ix-button-subtle-tertiary--color--active)}:host .container{display:flex;flex-direction:row;height:var(--ix-date-dropdown-container--height);max-height:var(--ix-date-dropdown-container--max-height);flex-wrap:nowrap}:host .picker-wrapper{display:flex;flex-direction:column;align-items:flex-end;justify-content:space-between}:host .picker-wrapper ix-date-picker{height:var(--ix-date-dropdown-picker-wrapper--height)}:host ix-dropdown{padding:0}@media only screen and (max-width: 48em){:host .container{flex-direction:column;max-height:unset;height:unset}:host .quick-selection{max-height:var(--ix-date-dropdown-quick-selection--max-height)}}`;
const DateDropdown = class extends Mixin(...DefaultMixins) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
    this.dateRangeChange = createEvent(this, "dateRangeChange", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Disable the button that opens the dropdown containing the date picker.
   */
  disabled = false;
  /**
   * Date format string.
   * See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
   */
  format = "yyyy/LL/dd";
  /**
   * If true disables date range selection (from/to).
   */
  singleSelection = false;
  /**
   * Picker date. If the picker is in range mode this property is the start date.
   * If set to `null` no default start date will be pre-selected.
   *
   * Format is based on `format`
   */
  from = "";
  /**
   * Picker date. If the picker is in range mode this property is the end date.
   * If the picker is not in range mode leave this value `null`
   *
   * Format is based on `format`
   */
  to = "";
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
   * Used to set the initial select date range as well as the button name,
   * if not set or no according date range label is found, nothing will be selected
   */
  dateRangeId = "custom";
  /**
   * Button variant
   */
  variant = "primary";
  /**
   * Loading button
   */
  loading = false;
  /**
   * Shows week numbers displayed on the left side of the date picker
   *
   * @since 3.0.0
   */
  showWeekNumbers = false;
  onDateRangeIdChange() {
    this.onRangeListSelect(this.dateRangeId);
    this.updateCurrentDate();
    this.setDateRangeSelection(this.dateRangeId);
    if (!this.currentRangeValue) {
      return;
    }
    this.onDateSelect({
      from: this.currentRangeValue.from,
      to: this.currentRangeValue.to,
      id: this.currentRangeValue.id
    });
  }
  /**
   * An array of predefined date range options for the date picker.
   * Each option is an object with a label describing the range and a function
   * that returns the start and end dates of the range as a DateRangeOption object.
   *
   * Example format:
   *   {
   *     id: 'some unique id',
   *     label: 'Name of the range',
   *     from: undefined, to: '2023/03/29'
   *   },
   *   // ... other predefined date range options ...
   */
  dateRangeOptions = [];
  onDateRangeOptionsChange() {
    this.initialize();
    this.onDateRangeIdChange();
  }
  /**
   * Locale identifier (e.g. 'en' or 'de').
   */
  locale;
  watchLocalePropHandler() {
    this.refreshIsoValues();
  }
  /**
   * The index of the day the week starts on, as a 0-based index into Luxon's
   * `Info.weekdays()` array. That array is always ordered Monday-first
   * regardless of locale, so 0 is Monday, 1 is Tuesday and 6 is Sunday.
   * E.g. weekStartIndex = 6 results in starting the week on Sunday.
   */
  weekStartIndex = 0;
  /**
   * Text for the done button. Will be used for translation.
   */
  i18nDone = "Done";
  /**
   * Text for the done button. Will be used for translation.
   */
  i18nNoRange = "No range set";
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
   * EventEmitter for date range change events.
   *
   * This event is emitted when the date range changes within the component.
   * The event payload contains information about the selected date range.
   */
  dateRangeChange;
  selectedDateRangeId = "";
  currentRangeValue;
  show = false;
  triggerRef = makeRef();
  onDisabledChange() {
    if (this.disabled) {
      this.closeDropdown();
    }
  }
  datePickerRef = makeRef();
  inheritAriaAttributes = {};
  componentWillLoad() {
    this.initialize();
    this.setDateRangeSelection(this.dateRangeId);
    this.inheritAriaAttributes = a11yHostAttributes(this.hostElement);
  }
  /**
   * Retrieves the currently selected date range from the component.
   * This method returns the selected date range as a `DateChangeEvent` object.
   */
  async getDateRange() {
    return { ...this.currentRangeValue ?? { id: "", from: "", to: "" } };
  }
  initialize() {
    const isCustomRange = this.dateRangeId === "custom" || !this.dateRangeId && !!this.from && !!this.to;
    if (isCustomRange) {
      this.selectedDateRangeId = "custom";
      this.updateCurrentDate();
      return;
    }
    const isValidConfiguration = !isCustomRange && !this.from;
    if (!isValidConfiguration) {
      console.warn('"from" and "range-date-id" is provided this is an invalid combination. Using "custom".');
      this.selectedDateRangeId = "custom";
      this.updateCurrentDate();
      return;
    }
  }
  updateCurrentDate() {
    this.currentRangeValue = {
      id: this.selectedDateRangeId,
      from: this.from,
      to: this.to,
      isoFrom: toISODate(parseWithLocale(this.from, this.format, this.locale)),
      isoTo: toISODate(parseWithLocale(this.to, this.format, this.locale))
    };
  }
  refreshIsoValues() {
    if (!this.currentRangeValue) {
      return;
    }
    this.currentRangeValue = {
      ...this.currentRangeValue,
      isoFrom: toISODate(parseWithLocale(this.currentRangeValue.from ?? "", this.format, this.locale)),
      isoTo: toISODate(parseWithLocale(this.currentRangeValue.to ?? "", this.format, this.locale))
    };
  }
  onDateSelect(rangeValue) {
    const isoFrom = toISODate(parseWithLocale(rangeValue.from ?? "", this.format, this.locale));
    const isoTo = toISODate(parseWithLocale(rangeValue.to ?? "", this.format, this.locale));
    if (this.currentRangeValue) {
      this.currentRangeValue = { ...this.currentRangeValue, isoFrom, isoTo };
    }
    this.dateRangeChange.emit({ ...rangeValue, isoFrom, isoTo });
  }
  onRangeListSelect(id) {
    if (this.setDateRangeSelection(id) && this.currentRangeValue) {
      this.onDateSelect(this.currentRangeValue);
    }
  }
  setDateRangeSelection(id) {
    this.selectedDateRangeId = id;
    const option = this.dateRangeOptions.find((range) => range.id === id);
    if (option) {
      if (option.from && option?.from === this.currentRangeValue?.from) {
        const formattedDate = parseWithLocale(option.from, this.format, this.locale);
        this.datePickerRef.current?.updateSelectedYearMonth(formattedDate);
      } else {
        this.currentRangeValue = {
          ...option,
          isoFrom: toISODate(parseWithLocale(option.from ?? "", this.format, this.locale)),
          isoTo: toISODate(parseWithLocale(option.to ?? "", this.format, this.locale))
        };
      }
    }
    return option;
  }
  closeDropdown() {
    const dropdown = this.hostElement.shadowRoot.querySelector("ix-dropdown");
    if (dropdown) {
      dropdown.show = false;
    }
  }
  getButtonLabel() {
    if (this.currentRangeValue?.from) {
      let range = this.currentRangeValue.from;
      if (this.currentRangeValue.to === this.currentRangeValue.from) {
        return range;
      }
      if (this.currentRangeValue.to) {
        range += ` - ${this.currentRangeValue.to}`;
      }
      return range;
    }
    return this.i18nNoRange;
  }
  render() {
    const ariaLabel = this.inheritAriaAttributes["aria-label"] || this.getButtonLabel();
    return h(Host, { key: "fb282eb0a5ec43a528dc432d436aafb35bd19bf1", onFocusout: (event) => {
      const relatedTarget = event.relatedTarget;
      if (!relatedTarget) {
        return;
      }
      this.closeDropdown();
    }, role: "presentation" }, h("ix-button", { key: "75c85128fd442ec2cfebe631a44af5a1577a9ec3", "data-testid": "date-dropdown-trigger", "data-date-dropdown-trigger": true, class: { active: this.show }, variant: this.variant, loading: this.loading, icon: iconHistory, ref: this.triggerRef, disabled: this.disabled, ...this.inheritAriaAttributes, "aria-haspopup": "true", "aria-expanded": a11yBoolean(this.show), "aria-controls": "date-dropdown", "aria-label": ariaLabel, [TRAP_FOCUS_EXCLUDE_ATTRIBUTE]: true }, this.getButtonLabel()), h("ix-dropdown", { key: "1abd5b44e2c784099cd22fa4b8be3f50e2c81965", focusTrapOptions: {
      excludeElements: true,
      trapFocusInShadowDom: true
    }, focusHost: this.hostElement, id: "date-dropdown", "data-testid": "date-dropdown", "data-date-dropdown": true, class: "min-width max-height", trigger: this.triggerRef.waitForCurrent(), closeBehavior: "outside", placement: "bottom-start", enableTopLayer: this.enableTopLayer, suppressOverflowBehavior: true, onShowChanged: async ({ detail: show }) => {
      this.show = show;
      if (!show && this.currentRangeValue) {
        this.onDateSelect(this.currentRangeValue);
      }
      if (show && hasKeyboardMode()) {
        requestAnimationFrameNoNgZone(() => {
          const datePicker = this.datePickerRef.current;
          datePicker?.focus();
        });
      }
    } }, h("div", { key: "aa9e9ed28722f462e921c4368609b7f6cce47e10", class: "container" }, this.dateRangeOptions?.length > 1 && h("div", { key: "45836ef22e62cee4e97fee8ef7e0917af70760f9", class: {
      "quick-selection": true,
      "border-right": this.selectedDateRangeId === "custom"
    } }, this.dateRangeOptions.map((dateRangeOption) => h(BaseButton, { disabled: false, iconOnly: false, iconOval: false, selected: false, loading: false, type: "button", variant: "subtle-tertiary", onClick: () => this.onRangeListSelect(dateRangeOption.id), ariaAttributes: {
      "aria-label": `${dateRangeOption.label}: ${dateRangeOption.from} to ${dateRangeOption.to}`
    } }, dateRangeOption.label))), h("div", { key: "d3190881a67cbc14eca934d41df9659fc7c49bb8", class: "picker-wrapper" }, h("ix-date-picker", { key: "1e83f4846e25bc277db7ab11a268dcc53f4d9eee", ref: this.datePickerRef, embedded: true, locale: this.locale, onDateChange: (e) => {
      e.stopPropagation();
      this.currentRangeValue = {
        ...e.detail,
        id: "custom"
      };
    }, onDateRangeChange: (e) => e.stopPropagation(), format: this.format, singleSelection: this.singleSelection, from: this.from || this.currentRangeValue?.from, to: this.to || this.currentRangeValue?.to, minDate: this.minDate, maxDate: this.maxDate, today: this.today, weekStartIndex: this.weekStartIndex, showWeekNumbers: this.showWeekNumbers }), h("div", { key: "21f65c922e0b070348f3c0dc7eb463aaa08c0ffd", class: "pull-right" }, h("ix-button", { key: "f98d17d1adf13cacdea5d0b1f58bd87f4636f5a3", onClick: () => {
      if (this.currentRangeValue) {
        this.onDateSelect(this.currentRangeValue);
        this.closeDropdown();
      }
    } }, this.i18nDone))))));
  }
  static get watchers() {
    return {
      "dateRangeId": [{
        "onDateRangeIdChange": 0
      }],
      "to": [{
        "onDateRangeIdChange": 0
      }],
      "from": [{
        "onDateRangeIdChange": 0
      }],
      "dateRangeOptions": [{
        "onDateRangeOptionsChange": 0
      }],
      "locale": [{
        "watchLocalePropHandler": 0
      }],
      "format": [{
        "watchLocalePropHandler": 0
      }],
      "disabled": [{
        "onDisabledChange": 0
      }]
    };
  }
};
DateDropdown.style = dateDropdownCss();
export {
  DateDropdown as ix_date_dropdown
};
