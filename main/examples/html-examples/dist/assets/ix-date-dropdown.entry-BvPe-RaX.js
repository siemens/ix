import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, f as forceUpdate, h, H as Host } from "./index-CgUi6DzV-P-1aad6e.js";
import { s as iconHistory } from "./index-CZ_u3Y0s-B1dE3kOK.js";
import { D as DateTime, p as parseWithLocale, c as convertDateFormat, t as toISODate } from "./date-time-locale-C13R3CVg-B8iN9_Qn.js";
import { D as DefaultMixins, h as hasKeyboardMode } from "./component-CxWIPGez-55aCZ0ep.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { r as requestAnimationFrameNoNgZone } from "./requestAnimationFrame-BEuV0Xpe-CBtvTq-Q.js";
import { b as isSameStringOrUnset } from "./condition-checks-B3dDrNFs-BiqvZF_l.js";
import { P as PendingSelection, C as ConfirmationFooter } from "./confirmation-footer.fc-BpuNWVD8-WQbDf7k6.js";
import { B as BaseButton } from "./base-button-DQT_06rD-C-xIlcZA.js";
import { b as a11yHostAttributes, a as a11yBoolean } from "./a11y-BjBGvZyE-CRtX0AHd.js";
import { T as TRAP_FOCUS_EXCLUDE_ATTRIBUTE } from "./focus-trap-wdvfXiKy-B0gJlu0v.js";
import { i as isPartialRange } from "./calendar.util-DVt77zOK-CwuRtJQA.js";
import "./preload-helper-UZRgTS1n.js";
import "./focus-utilities-6ZxKp7Jn-DqvT-65C.js";
import "./shadow-dom-cGv1zHOb-DvI9lJZX.js";
const dateDropdownCss = () => `@charset "UTF-8";:host{--ix-button--outline-color--focus:var(--si-sys-color-effects-focus);--ix-button--background--danger-primary:var(--si-sys-color-background-danger);--ix-button--background--danger-primary--active:var(--si-sys-color-background-danger-active);--ix-button--background--danger-primary--disabled:var(--si-sys-color-background-1);--ix-button--background--danger-primary--hover:var(--si-sys-color-background-danger-hover);--ix-button--border-color--danger-primary:rgba(0, 0, 0, 0);--ix-button--border-color--danger-primary--active:rgba(0, 0, 0, 0);--ix-button--border-color--danger-primary--disabled:rgba(0, 0, 0, 0);--ix-button--border-color--danger-primary--hover:rgba(0, 0, 0, 0);--ix-button--color--danger-primary:var(--si-sys-color-text-on-danger);--ix-button--color--danger-primary--active:var(--si-sys-color-text-on-danger);--ix-button--color--danger-primary--disabled:var(--si-sys-color-text-disabled);--ix-button--color--danger-primary--hover:var(--si-sys-color-text-on-danger);--ix-button--background--danger-secondary:rgba(0, 0, 0, 0);--ix-button--background--danger-secondary--active:var(--si-sys-color-background-danger-active);--ix-button--background--danger-secondary--disabled:rgba(0, 0, 0, 0);--ix-button--background--danger-secondary--hover:var(--si-sys-color-background-danger-hover);--ix-button--border-color--danger-secondary:var(--si-sys-color-text-danger);--ix-button--border-color--danger-secondary--active:var(--si-sys-color-border-danger);--ix-button--border-color--danger-secondary--disabled:var(--si-sys-color-border-3);--ix-button--border-color--danger-secondary--hover:var(--si-sys-color-border-danger);--ix-button--color--danger-secondary:var(--si-sys-color-text-danger);--ix-button--color--danger-secondary--active:var(--si-sys-color-text-on-danger);--ix-button--color--danger-secondary--disabled:var(--si-sys-color-text-disabled);--ix-button--color--danger-secondary--hover:var(--si-sys-color-text-on-danger);--ix-button--background--danger-tertiary:rgba(0, 0, 0, 0);--ix-button--background--danger-tertiary--active:var(--si-sys-color-background-danger-active);--ix-button--background--danger-tertiary--disabled:rgba(0, 0, 0, 0);--ix-button--background--danger-tertiary--hover:var(--si-sys-color-background-danger-hover);--ix-button--border-color--danger-tertiary:rgba(0, 0, 0, 0);--ix-button--border-color--danger-tertiary--active:rgba(0, 0, 0, 0);--ix-button--border-color--danger-tertiary--disabled:rgba(0, 0, 0, 0);--ix-button--border-color--danger-tertiary--hover:rgba(0, 0, 0, 0);--ix-button--color--danger-tertiary:var(--si-sys-color-text-danger);--ix-button--color--danger-tertiary--active:var(--si-sys-color-text-on-danger);--ix-button--color--danger-tertiary--disabled:var(--si-sys-color-text-disabled);--ix-button--color--danger-tertiary--hover:var(--si-sys-color-text-on-danger);--ix-button--background--primary:var(--si-sys-color-background-accent);--ix-button--background--primary--active:var(--si-sys-color-background-accent-active);--ix-button--background--primary--disabled:var(--si-sys-color-background-1);--ix-button--background--primary--hover:var(--si-sys-color-background-accent-hover);--ix-button--background--primary--pressed:var(--si-sys-color-background-accent-hover);--ix-button--background--primary--pressed--hover:var(--si-sys-color-background-accent-hover);--ix-button--border-color--primary:rgba(0, 0, 0, 0);--ix-button--border-color--primary--active:rgba(0, 0, 0, 0);--ix-button--border-color--primary--disabled:rgba(0, 0, 0, 0);--ix-button--border-color--primary--hover:rgba(0, 0, 0, 0);--ix-button--color--primary:var(--si-sys-color-text-on-accent);--ix-button--color--primary--active:var(--si-sys-color-text-on-accent);--ix-button--color--primary--disabled:var(--si-sys-color-text-disabled);--ix-button--color--primary--hover:var(--si-sys-color-text-on-accent);--ix-button--color--primary--pressed:var(--si-sys-color-text-on-accent);--ix-button--color--primary--pressed--active:var(--si-sys-color-text-on-accent);--ix-button--color--primary--pressed--hover:var(--si-sys-color-text-on-accent);--ix-button--background--secondary:var(--si-sys-color-background-accent-secondary);--ix-button--background--secondary--active:var(--si-sys-color-background-accent-secondary-active);--ix-button--background--secondary--disabled:rgba(0, 0, 0, 0);--ix-button--background--secondary--hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button--background--secondary--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button--background--secondary--pressed--hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button--border-color--secondary:var(--si-sys-color-border-accent);--ix-button--border-color--secondary--active:var(--si-sys-color-border-accent-active);--ix-button--border-color--secondary--disabled:var(--si-sys-color-border-3);--ix-button--border-color--secondary--hover:var(--si-sys-color-border-accent-hover);--ix-button--color--secondary:var(--si-sys-color-text-accent);--ix-button--color--secondary--active:var(--si-sys-color-text-accent-active);--ix-button--color--secondary--disabled:var(--si-sys-color-text-disabled);--ix-button--color--secondary--hover:var(--si-sys-color-text-accent-hover);--ix-button--color--secondary--pressed:var(--si-sys-color-text-accent-hover);--ix-button--color--secondary--pressed--active:var(--si-sys-color-text-accent-active);--ix-button--color--secondary--pressed--hover:var(--si-sys-color-text-accent-hover);--ix-button--background--subtle-primary:var(--si-sys-color-background-2);--ix-button--background--subtle-primary--active:var(--si-sys-color-background-selected);--ix-button--background--subtle-primary--disabled:var(--si-sys-color-background-1);--ix-button--background--subtle-primary--hover:var(--si-sys-color-background-hover);--ix-button--background--subtle-primary--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button--background--subtle-primary--pressed--hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button--border-color--subtle-primary:rgba(0, 0, 0, 0);--ix-button--border-color--subtle-primary--active:rgba(0, 0, 0, 0);--ix-button--border-color--subtle-primary--disabled:rgba(0, 0, 0, 0);--ix-button--border-color--subtle-primary--hover:rgba(0, 0, 0, 0);--ix-button--color--subtle-primary:var(--si-sys-color-text-primary);--ix-button--color--subtle-primary--active:var(--si-sys-color-text-primary);--ix-button--color--subtle-primary--disabled:var(--si-sys-color-text-disabled);--ix-button--color--subtle-primary--hover:var(--si-sys-color-text-primary);--ix-button--color--subtle-primary--pressed:var(--si-sys-color-text-accent-hover);--ix-button--color--subtle-primary--pressed--active:var(--si-sys-color-text-accent-hover);--ix-button--color--subtle-primary--pressed--hover:var(--si-sys-color-text-accent-hover);--ix-button--background--subtle-secondary:rgba(0, 0, 0, 0);--ix-button--background--subtle-secondary--active:var(--si-sys-color-background-selected);--ix-button--background--subtle-secondary--disabled:rgba(0, 0, 0, 0);--ix-button--background--subtle-secondary--hover:var(--si-sys-color-background-hover);--ix-button--background--subtle-secondary--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button--background--subtle-secondary--pressed--hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button--border-color--subtle-secondary:var(--si-sys-color-border-2);--ix-button--border-color--subtle-secondary--active:var(--si-sys-color-border-2);--ix-button--border-color--subtle-secondary--disabled:var(--si-sys-color-border-3);--ix-button--border-color--subtle-secondary--hover:var(--si-sys-color-border-2);--ix-button--color--subtle-secondary:var(--si-sys-color-text-primary);--ix-button--color--subtle-secondary--active:var(--si-sys-color-text-primary);--ix-button--color--subtle-secondary--disabled:var(--si-sys-color-text-disabled);--ix-button--color--subtle-secondary--hover:var(--si-sys-color-text-primary);--ix-button--color--subtle-secondary--pressed:var(--si-sys-color-text-accent-hover);--ix-button--color--subtle-secondary--pressed--active:var(--si-sys-color-text-accent-hover);--ix-button--color--subtle-secondary--pressed--hover:var(--si-sys-color-text-accent-hover);--ix-button--background--subtle-tertiary:rgba(0, 0, 0, 0);--ix-button--background--subtle-tertiary--active:var(--si-sys-color-background-selected);--ix-button--background--subtle-tertiary--disabled:rgba(0, 0, 0, 0);--ix-button--background--subtle-tertiary--hover:var(--si-sys-color-background-hover);--ix-button--background--subtle-tertiary--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button--background--subtle-tertiary--pressed--hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button--border-color--subtle-tertiary:rgba(0, 0, 0, 0);--ix-button--border-color--subtle-tertiary--active:rgba(0, 0, 0, 0);--ix-button--border-color--subtle-tertiary--disabled:rgba(0, 0, 0, 0);--ix-button--border-color--subtle-tertiary--hover:rgba(0, 0, 0, 0);--ix-button--color--subtle-tertiary:var(--si-sys-color-text-primary);--ix-button--color--subtle-tertiary--active:var(--si-sys-color-text-primary);--ix-button--color--subtle-tertiary--disabled:var(--si-sys-color-text-disabled);--ix-button--color--subtle-tertiary--hover:var(--si-sys-color-text-primary);--ix-button--color--subtle-tertiary--pressed:var(--si-sys-color-text-accent-hover);--ix-button--color--subtle-tertiary--pressed--active:var(--si-sys-color-text-accent-hover);--ix-button--color--subtle-tertiary--pressed--hover:var(--si-sys-color-text-accent-hover);--ix-button--background--tertiary:rgba(0, 0, 0, 0);--ix-button--background--tertiary--active:var(--si-sys-color-background-accent-secondary-active);--ix-button--background--tertiary--disabled:rgba(0, 0, 0, 0);--ix-button--background--tertiary--hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button--background--tertiary--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button--background--tertiary--pressed--hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button--border-color--tertiary:rgba(0, 0, 0, 0);--ix-button--border-color--tertiary--active:rgba(0, 0, 0, 0);--ix-button--border-color--tertiary--disabled:rgba(0, 0, 0, 0);--ix-button--border-color--tertiary--hover:rgba(0, 0, 0, 0);--ix-button--color--tertiary:var(--si-sys-color-text-accent);--ix-button--color--tertiary--active:var(--si-sys-color-text-accent-active);--ix-button--color--tertiary--disabled:var(--si-sys-color-text-disabled);--ix-button--color--tertiary--hover:var(--si-sys-color-text-accent-hover);--ix-button--color--tertiary--pressed:var(--si-sys-color-text-accent-hover);--ix-button--color--tertiary--pressed--active:var(--si-sys-color-text-accent-active);--ix-button--color--tertiary--pressed--hover:var(--si-sys-color-text-accent-hover)}:host{--ix-button--border-radius:var(--si-sys-sizing-border-radius-xs);--ix-button--border-width:var(--si-sys-sizing-border-width-default);--ix-button--outline-width--focus:var(--si-sys-sizing-focus-ring-width);--ix-button--outline-offset--focus:var(--si-sys-sizing-focus-ring-offset);--ix-button--padding:0 var(--si-sys-sizing-spacing-x-40);--ix-button--height:var(--si-sys-sizing-size-80);--ix-button--margin-right:var(--si-sys-sizing-spacing-x-20);--ix-button-icon--margin-right:var(--si-sys-sizing-spacing-x-20);--ix-button-icon-right--margin-left:var(--si-sys-sizing-spacing-x-20);--ix-button--min-width:var(--si-sys-sizing-size-120)}:host{--ix-date-dropdown-divider--border:var(--si-sys-sizing-border-width-default) solid var(--si-sys-color-border-4);--ix-date-dropdown--outline-color--focus:var(--si-sys-color-effects-focus)}:host{--ix-date-dropdown--outline-offset--focus:var(--si-sys-sizing-focus-ring-offset);--ix-date-dropdown-pull-right--padding:var(--si-sys-sizing-spacing-y-60) var(--si-sys-sizing-spacing-x-60);--ix-date-dropdown-quick-selection--gap:var(--si-sys-sizing-spacing-y-20);--ix-date-dropdown-quick-selection--padding:var(--si-sys-sizing-spacing-y-40) var(--si-sys-sizing-spacing-x-40);--ix-date-dropdown-button--min-width:var(--si-sys-sizing-size-140);--ix-date-dropdown-button--min-height:var(--si-sys-sizing-size-80);--ix-date-dropdown-button--max-height:var(--si-sys-sizing-size-80);--ix-date-dropdown-container--height:calc(var(--si-sys-sizing-size-90) * 10);--ix-date-dropdown-container--max-height:calc(var(--si-sys-sizing-size-90) * 10);--ix-date-dropdown-picker-wrapper--height:calc(var(--si-sys-sizing-size-170) + var(--si-sys-sizing-spacing-y-60));--ix-date-dropdown-quick-selection--max-height:calc(var(--si-sys-sizing-size-150) + var(--si-sys-sizing-spacing-y-90));--ix-date-dropdown--outline-width--focus:var(--si-sys-sizing-focus-ring-width)}:host{display:inline-block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .confirmation-footer{--ix-confirmation-footer--gap:var(--si-sys-sizing-spacing-x-40);display:flex;justify-content:flex-end;flex-wrap:wrap;gap:var(--ix-confirmation-footer--gap)}:host .confirmation-footer.layout-center{flex-direction:column;align-items:center}:host .confirmation-footer.layout-full-width{width:100%}:host .confirmation-footer.layout-full-width ix-button{flex:1 1 0}@media (max-width: 576px){:host .confirmation-footer.layout-responsive{width:100%}:host .confirmation-footer.layout-responsive ix-button{flex:1 1 0}}:host .pull-right{position:relative;float:right;padding:var(--ix-date-dropdown-pull-right--padding)}:host .quick-selection{display:inline-flex;flex-direction:column;gap:var(--ix-date-dropdown-quick-selection--gap);border-right:var(--ix-date-dropdown-divider--border);overflow:auto;padding:var(--ix-date-dropdown-quick-selection--padding)}:host .quick-selection *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host .quick-selection *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host .quick-selection *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host .quick-selection *{}:host .quick-selection *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host .quick-selection *{}:host .quick-selection *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host .quick-selection *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host .quick-selection *{}:host .quick-selection *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host .quick-selection *{}:host .quick-selection *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host .quick-selection *::-webkit-scrollbar-corner{display:none}:host .quick-selection .btn{all:unset;box-sizing:border-box;display:inline-flex;flex-direction:row;flex-wrap:nowrap;overflow:hidden;align-items:center;justify-content:center;width:100%;height:100%;padding:var(--ix-button--padding);min-width:var(--ix-date-dropdown-button--min-width);min-height:var(--ix-date-dropdown-button--min-height);max-height:var(--ix-date-dropdown-button--max-height);justify-content:flex-start}:host .quick-selection .btn:focus-visible{outline:var(--ix-date-dropdown--outline-width--focus) solid var(--ix-date-dropdown--outline-color--focus);outline-offset:var(--ix-date-dropdown--outline-offset--focus)}:host .quick-selection .btn-subtle-tertiary{text-align:start;border-top-left-radius:var(--ix-button--border-radius-left);border-bottom-left-radius:var(--ix-button--border-radius-left);border-top-right-radius:var(--ix-button--border-radius-right);border-bottom-right-radius:var(--ix-button--border-radius-right)}:host .quick-selection .btn-subtle-tertiary{background-color:var(--ix-button--background--subtle-tertiary);color:var(--ix-button--color--subtle-tertiary);--ix-button--color:var(--ix-button--color--subtle-tertiary);border-width:var(--ix-button--border-width);border-color:var(--ix-button--border-color--subtle-tertiary);border-style:solid}:host .quick-selection .btn-subtle-tertiary.selected{background-color:var(--ix-button--background--subtle-tertiary--pressed);color:var(--ix-button--color--subtle-tertiary--pressed)}:host .quick-selection .btn-subtle-tertiary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .quick-selection .btn-subtle-tertiary.selected:not(.disabled):not(:disabled):hover,:host .quick-selection .btn-subtle-tertiary.selected:not(.disabled):not(:disabled).hover{background-color:var(--ix-button--background--subtle-tertiary--pressed--hover);color:var(--ix-button--color--subtle-tertiary--pressed--hover)}:host .quick-selection .btn-subtle-tertiary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .quick-selection .btn-subtle-tertiary.selected:not(.disabled):not(:disabled):active,:host .quick-selection .btn-subtle-tertiary.selected:not(.disabled):not(:disabled).active{background-color:var(--ix-button--background--subtle-tertiary--pressed--hover);color:var(--ix-button--color--subtle-tertiary--pressed--active)}:host .quick-selection .btn-subtle-tertiary:not(.disabled):not(:disabled){cursor:pointer}:host .quick-selection .btn-subtle-tertiary:not(.disabled):not(:disabled):hover,:host .quick-selection .btn-subtle-tertiary:not(.disabled):not(:disabled).hover{border-color:var(--ix-button--border-color--subtle-tertiary--hover);background-color:var(--ix-button--background--subtle-tertiary--hover);color:var(--ix-button--color--subtle-tertiary--hover)}:host .quick-selection .btn-subtle-tertiary:not(.disabled):not(:disabled){cursor:pointer}:host .quick-selection .btn-subtle-tertiary:not(.disabled):not(:disabled):active,:host .quick-selection .btn-subtle-tertiary:not(.disabled):not(:disabled).active{border-color:var(--ix-button--border-color--subtle-tertiary--active);background-color:var(--ix-button--background--subtle-tertiary--active);color:var(--ix-button--color--subtle-tertiary--active)}:host .container{display:flex;flex-direction:row;max-height:var(--ix-date-dropdown-container--max-height);flex-wrap:nowrap}:host .container.has-footer{height:var(--ix-date-dropdown-container--height)}:host .container.has-footer ix-date-picker{height:var(--ix-date-dropdown-picker-wrapper--height)}:host .picker-wrapper{display:flex;flex-direction:column;align-items:flex-end;justify-content:space-between}:host ix-dropdown{padding:0}@media only screen and (max-width: 48em){:host .container,:host .container.has-footer{flex-direction:column;max-height:unset;height:unset}:host .quick-selection{max-height:var(--ix-date-dropdown-quick-selection--max-height)}}`;
const DateDropdown = class extends Mixin(...DefaultMixins) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
    this.dateRangeChange = createEvent(this, "dateRangeChange", 7);
    this.dateSelect = createEvent(this, "dateSelect", 7);
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
   * Date format used to display the selected dates in the dropdown button.
   * `from`, `to`, `minDate`, `maxDate` and emitted values keep using `format`.
   * Defaults to `format`.
   * See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
   *
   * @since 6.0.0
   */
  displayFormat;
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
   */
  showWeekNumbers = false;
  onDateRangeIdChange(id) {
    if (this.selection.isEcho("id", id)) {
      return;
    }
    this.applyPropChange(this.selection.reset(this.rangeFromProps()));
  }
  onFromChange(from) {
    this.onDatePropChange("from", from);
  }
  onToChange(to) {
    this.onDatePropChange("to", to);
  }
  /** Dates set by props no longer match a predefined range. */
  onDatePropChange(key, value) {
    const selection = this.selection.withPropChange(key, value);
    if (selection === this.selection) {
      return;
    }
    this.applyPropChange(selection.reset({ ...selection.committed, id: "custom" }));
  }
  /**
   * Applies a prop change unless it echoes the displayed range back (e.g.
   * two-way binding to `dateRangeChange`), so a pending range stays pending.
   */
  applyPropChange(selection) {
    if (selection === this.selection) {
      return;
    }
    this.selection = selection;
    this.showMonthOf(selection.committed);
    this.emitRangeChange(selection.committed);
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
    this.warnOnInvalidConfiguration();
    this.applyPropChange(this.selection.reset(this.rangeFromProps()));
  }
  /**
   * Locale identifier (e.g. 'en' or 'de').
   */
  locale;
  /**
   * The index of the day the week starts on, as a 0-based index into Luxon's
   * `Info.weekdays()` array. That array is always ordered Monday-first
   * regardless of locale, so 0 is Monday, 1 is Tuesday and 6 is Sunday.
   * E.g. weekStartIndex = 6 results in starting the week on Sunday.
   */
  weekStartIndex = 0;
  /**
   * Text for the done button. Will be used for translation.
   *
   * @deprecated The done button was removed. Without `requireConfirmation`
   * the dropdown closes once a complete date or range is selected.
   * @breaking-change 6.0.0 The done button was removed, the property has no effect
   */
  i18nDone = "Done";
  /**
   * Text for the done button. Will be used for translation.
   */
  i18nNoRange = "No range set";
  /**
   * If true, a date range picked in the dropdown is only applied after the
   * user confirms it with the confirm button, which emits `dateSelect`. The
   * trigger label keeps the applied range until then, while `dateRangeChange`
   * still reports every pick. The cancel button, pressing Escape or clicking
   * outside the dropdown discards the pending selection.
   *
   * @since 6.0.0
   */
  requireConfirmation = false;
  /**
   * Text of the confirm button shown when `requireConfirmation` is enabled.
   *
   * @since 6.0.0
   */
  i18nConfirm = "Confirm";
  /**
   * Text of the cancel button shown when `requireConfirmation` is enabled.
   *
   * @since 6.0.0
   */
  i18nCancel = "Cancel";
  /** @internal */
  today = DateTime.now().toISO();
  /**
   * Enable Popover API rendering for dropdown.
   *
   * @default false
   */
  enableTopLayer = false;
  /**
   * EventEmitter for date range change events.
   *
   * This event is emitted when the date range changes within the component.
   * The event payload contains information about the selected date range.
   * When a pending selection is discarded, it is emitted with the applied
   * range again.
   *
   * Use `dateSelect` to only receive applied ranges.
   *
   * @breaking-change 6.0.0 Emitted for every pick instead of on close, `from` and `to` are localized (use `isoFrom` and `isoTo`)
   */
  dateRangeChange;
  /**
   * Emitted when the user applies a changed range: on confirm with
   * `requireConfirmation`, otherwise when a complete range or a predefined
   * range is picked.
   * It is not emitted for programmatic prop input changes.
   *
   * @since 6.0.0
   */
  dateSelect;
  /**
   * The applied range and a range that is not applied yet: any unconfirmed
   * range with `requireConfirmation`, otherwise a range with only a start
   * date.
   */
  selection = PendingSelection.create({ id: "custom" }, (a, b) => a.id === b.id && isSameStringOrUnset(a.from, b.from) && isSameStringOrUnset(a.to, b.to));
  show = false;
  /** Month the date picker is moved to after the next render. */
  monthToShow;
  triggerRef = makeRef();
  onDisabledChange() {
    if (this.disabled) {
      this.closeDropdown();
    }
  }
  datePickerRef = makeRef();
  inheritAriaAttributes = {};
  componentWillLoad() {
    this.warnOnInvalidConfiguration();
    this.selection = this.selection.reset(this.rangeFromProps());
    this.inheritAriaAttributes = a11yHostAttributes(this.hostElement);
  }
  componentDidRender() {
    if (this.monthToShow) {
      this.datePickerRef.current?.updateSelectedYearMonth(this.monthToShow);
      this.monthToShow = void 0;
    }
  }
  /**
   * Retrieves the applied date range from the component.
   * This method returns the applied date range as a `DateChangeEvent` object.
   *
   * With `requireConfirmation`, a pending selection is not returned until it is
   * confirmed. Listen to `dateRangeChange` to get every pick.
   */
  async getDateRange() {
    return this.toEvent(this.selection.committed);
  }
  warnOnInvalidConfiguration() {
    if (this.from && this.dateRangeId && this.dateRangeId !== "custom") {
      console.warn('"from" and "range-date-id" is provided this is an invalid combination. Using "custom".');
    }
  }
  /** The range set by props: a predefined range, else `from` and `to`. */
  rangeFromProps() {
    const option = this.findRangeOption(this.dateRangeId);
    if (option) {
      return this.toRange(option);
    }
    return { id: "custom", from: this.from, to: this.to };
  }
  /**
   * The event payload for `range`, with `isoFrom` and `isoTo` derived from
   * its `from` and `to`, and the label of a predefined range.
   */
  toEvent(range) {
    const toIso = (value) => toISODate(parseWithLocale(value ?? "", this.format, this.locale));
    return {
      ...this.findRangeOption(range.id),
      ...range,
      isoFrom: toIso(range.from),
      isoTo: toIso(range.to)
    };
  }
  /** Reports a picked or restored range that is not necessarily applied. */
  emitRangeChange(range) {
    this.dateRangeChange.emit(this.toEvent(range));
  }
  onRangeOptionClick(id) {
    const option = this.findRangeOption(id);
    if (!option) {
      return;
    }
    this.showMonthOf(option);
    this.pick(this.toRange(option));
  }
  /**
   * Picks `range` and reports it. Without `requireConfirmation`, a complete
   * range is applied and the dropdown closes.
   */
  pick(range) {
    this.selection = this.selection.select(range);
    this.emitRangeChange(range);
    if (this.requireConfirmation || this.isIncomplete(range)) {
      return;
    }
    this.commitSelection();
    this.closeDropdown();
  }
  findRangeOption(id) {
    return this.dateRangeOptions.find((range) => range.id === id);
  }
  toRange({ id, from, to }) {
    return { id, from, to };
  }
  isIncomplete(range) {
    return !this.singleSelection && isPartialRange(range);
  }
  isConfirmDisabled() {
    const { pending } = this.selection;
    return pending === void 0 || this.isIncomplete(pending);
  }
  /**
   * Shows the month `range` starts in once the date picker has applied the
   * new `from`/`to`, which would otherwise show the month of `to`.
   */
  showMonthOf(range) {
    if (!range.from) {
      return;
    }
    this.monthToShow = parseWithLocale(range.from, this.format, this.locale);
    forceUpdate(this);
  }
  onConfirm() {
    this.commitSelection();
    this.closeDropdown();
  }
  /**
   * Applies the pending range and emits `dateSelect`. The range was already
   * reported with `dateRangeChange` when it was picked.
   */
  commitSelection() {
    if (!this.selection.hasPending) {
      return;
    }
    this.selection = this.selection.commit();
    this.dateSelect.emit(this.toEvent(this.selection.committed));
  }
  onPickerDateChange({ from, to }) {
    this.pick({ id: "custom", from, to });
  }
  onDropdownShowChanged(show) {
    this.show = show;
    const hadPendingSelection = this.selection.hasPending;
    this.selection = this.selection.discard();
    if (!show && hadPendingSelection) {
      this.emitRangeChange(this.selection.committed);
    }
    if (show && hasKeyboardMode()) {
      requestAnimationFrameNoNgZone(() => {
        const datePicker = this.datePickerRef.current;
        datePicker?.focus();
      });
    }
  }
  closeDropdown() {
    const dropdown = this.hostElement.shadowRoot.querySelector("ix-dropdown");
    if (dropdown) {
      dropdown.show = false;
    }
  }
  toDisplayDate(value) {
    return convertDateFormat(value, this.format, this.displayFormat ?? this.format, this.locale);
  }
  getButtonLabel() {
    const rangeValue = this.requireConfirmation ? this.selection.committed : this.selection.displayed;
    if (rangeValue?.from) {
      let range = this.toDisplayDate(rangeValue.from);
      if (rangeValue.to === rangeValue.from) {
        return range;
      }
      if (rangeValue.to) {
        range += ` - ${this.toDisplayDate(rangeValue.to)}`;
      } else if (rangeValue === this.selection.pending && this.isIncomplete(rangeValue)) {
        range += " - ";
      }
      return range;
    }
    return this.i18nNoRange;
  }
  render() {
    const ariaLabel = this.inheritAriaAttributes["aria-label"] || this.getButtonLabel();
    return h(Host, { key: "6fe0e6ec8add4757c0565c14ba8cb418c259107d", onFocusout: (event) => {
      const relatedTarget = event.relatedTarget;
      if (!relatedTarget) {
        return;
      }
      this.closeDropdown();
    }, role: "presentation" }, h("ix-button", { key: "3d590a20e91bfa03a57f018fd7dea9dc0bc50038", "data-testid": "date-dropdown-trigger", "data-date-dropdown-trigger": true, class: { active: this.show }, variant: this.variant, loading: this.loading, icon: iconHistory, ref: this.triggerRef, disabled: this.disabled, ...this.inheritAriaAttributes, "aria-haspopup": "true", "aria-expanded": a11yBoolean(this.show), "aria-controls": "date-dropdown", "aria-label": ariaLabel, [TRAP_FOCUS_EXCLUDE_ATTRIBUTE]: true }, this.getButtonLabel()), h("ix-dropdown", { key: "ab03e91de0cf5b9df35a117161f111cc402d36d6", focusTrapOptions: {
      excludeElements: true,
      trapFocusInShadowDom: true
    }, focusHost: this.hostElement, id: "date-dropdown", "data-testid": "date-dropdown", "data-date-dropdown": true, class: "min-width max-height", trigger: this.triggerRef.waitForCurrent(), closeBehavior: "outside", placement: "bottom-start", enableTopLayer: this.enableTopLayer, suppressOverflowBehavior: true, onShowChanged: ({ detail: show }) => this.onDropdownShowChanged(show) }, h("div", { key: "f6b212eaf7bf9d87276eddf774468e03a712cd1f", class: {
      container: true,
      "has-footer": this.requireConfirmation
    } }, this.dateRangeOptions?.length > 1 && h("div", { key: "5e7488047501fd27b5263f9e9d1802b9260ff878", class: {
      "quick-selection": true,
      "border-right": this.selection.displayed.id === "custom"
    } }, this.dateRangeOptions.map((dateRangeOption) => h(BaseButton, { disabled: false, iconOnly: false, iconOval: false, selected: false, loading: false, type: "button", variant: "subtle-tertiary", onClick: () => this.onRangeOptionClick(dateRangeOption.id), ariaAttributes: {
      "aria-label": `${dateRangeOption.label}: ${dateRangeOption.from} to ${dateRangeOption.to}`
    } }, dateRangeOption.label))), h("div", { key: "5a8046e4645bd2e636d7225c708366706e185b3d", class: "picker-wrapper" }, h("ix-date-picker", { key: "cf01141bbc1d2841ec7128fa616e09ec1bf3de01", ref: this.datePickerRef, embedded: true, locale: this.locale, onDateChange: (e) => {
      e.stopPropagation();
      this.onPickerDateChange(e.detail);
    }, onDateRangeChange: (e) => e.stopPropagation(), format: this.format, singleSelection: this.singleSelection, from: this.selection.displayed.from, to: this.selection.displayed.to, minDate: this.minDate, maxDate: this.maxDate, today: this.today, weekStartIndex: this.weekStartIndex, showWeekNumbers: this.showWeekNumbers }), this.requireConfirmation && h(ConfirmationFooter, { key: "997f18d3899f43bbddb8a2b99b548db36c6862bd", class: "pull-right", requireConfirmation: true, i18nConfirm: this.i18nConfirm, i18nCancel: this.i18nCancel, primaryActionDisabled: this.isConfirmDisabled(), onConfirm: () => this.onConfirm(), onCancel: () => this.closeDropdown() })))));
  }
  static get watchers() {
    return {
      "dateRangeId": [{
        "onDateRangeIdChange": 0
      }],
      "from": [{
        "onFromChange": 0
      }],
      "to": [{
        "onToChange": 0
      }],
      "dateRangeOptions": [{
        "onDateRangeOptionsChange": 0
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
