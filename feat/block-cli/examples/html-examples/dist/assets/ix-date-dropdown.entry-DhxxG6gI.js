import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-C_dy4gBz.js";
import { p as iconHistory } from "./index-DFdo1y_u-D_8X33yw.js";
import { D as DateTime } from "./datetime-D1WplX1z-grPSvmS5.js";
import { D as DefaultMixins, h as hasKeyboardMode } from "./component-YJmg0LbX-Cdi_gd8D.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { r as requestAnimationFrameNoNgZone } from "./requestAnimationFrame-BEuV0Xpe-CBtvTq-Q.js";
import { B as BaseButton } from "./base-button-Blr8QCqk-DKoBlT2G.js";
import { b as a11yHostAttributes, a as a11yBoolean } from "./a11y-B5k8YVR0-BOSd6BQK.js";
import { T as TRAP_FOCUS_EXCLUDE_ATTRIBUTE } from "./focus-trap-0-e7_EJl-C_W0MO97.js";
import "./focus-utilities-Cft9zvbS-CmL7xuFI.js";
import "./shadow-dom-T30VMB2R-DtdN3xF2.js";
const dateDropdownCss = () => `:host{display:inline-block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .pull-right{position:relative;float:right;padding:1rem}:host .quick-selection{display:inline-flex;flex-direction:column;gap:0.25rem;border-right:var(--theme-x-weak-bdr-1);overflow:auto;padding:0.5rem}:host .quick-selection ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host .quick-selection *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host .quick-selection{}:host .quick-selection ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host .quick-selection{}:host .quick-selection ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host .quick-selection ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host .quick-selection{}:host .quick-selection ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host .quick-selection{}:host .quick-selection ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host .quick-selection ::-webkit-scrollbar-corner{display:none}:host .quick-selection .btn{all:unset;box-sizing:border-box;display:inline-flex;flex-direction:row;flex-wrap:nowrap;overflow:hidden;align-items:center;justify-content:center;width:100%;height:100%;padding:0 0.5rem;min-width:8rem;min-height:2rem;max-height:2rem;justify-content:flex-start}:host .quick-selection .btn:focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .quick-selection .btn-subtle-tertiary{text-align:start;border-top-left-radius:var(--ix-button-border-radius-left);border-bottom-left-radius:var(--ix-button-border-radius-left);border-top-right-radius:var(--ix-button-border-radius-right);border-bottom-right-radius:var(--ix-button-border-radius-right)}:host .quick-selection .btn-subtle-tertiary{background-color:var(--theme-btn-subtle-tertiary--background);color:var(--theme-btn-subtle-tertiary--color);--ix-button-color:var(--theme-btn-subtle-tertiary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-subtle-tertiary--border-color);border-style:solid}:host .quick-selection .btn-subtle-tertiary.selected{background-color:var(--theme-btn-subtle-tertiary--background--pressed);color:var(--theme-btn-subtle-tertiary--color--pressed)}:host .quick-selection .btn-subtle-tertiary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .quick-selection .btn-subtle-tertiary.selected:not(.disabled):not(:disabled):hover,:host .quick-selection .btn-subtle-tertiary.selected:not(.disabled):not(:disabled).hover{background-color:var(--theme-btn-subtle-tertiary--background--pressed-hover);color:var(--theme-btn-subtle-tertiary--color--pressed-hover)}:host .quick-selection .btn-subtle-tertiary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .quick-selection .btn-subtle-tertiary.selected:not(.disabled):not(:disabled):active,:host .quick-selection .btn-subtle-tertiary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-subtle-tertiary--background--pressed-hover);color:var(--theme-btn-subtle-tertiary--color--pressed-active)}:host .quick-selection .btn-subtle-tertiary:not(.disabled):not(:disabled){cursor:pointer}:host .quick-selection .btn-subtle-tertiary:not(.disabled):not(:disabled):hover,:host .quick-selection .btn-subtle-tertiary:not(.disabled):not(:disabled).hover{border-color:var(--theme-btn-subtle-tertiary--border-color--hover);background-color:var(--theme-btn-subtle-tertiary--background--hover);color:var(--theme-btn-subtle-tertiary--color--hover)}:host .quick-selection .btn-subtle-tertiary:not(.disabled):not(:disabled){cursor:pointer}:host .quick-selection .btn-subtle-tertiary:not(.disabled):not(:disabled):active,:host .quick-selection .btn-subtle-tertiary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-subtle-tertiary--border-color--active);background-color:var(--theme-btn-subtle-tertiary--background--active);color:var(--theme-btn-subtle-tertiary--color--active)}:host .container{display:flex;flex-direction:row;height:25rem;max-height:25rem;flex-wrap:nowrap}:host .picker-wrapper{display:flex;flex-direction:column;align-items:flex-end;justify-content:space-between}:host .picker-wrapper ix-date-picker{height:21rem}:host ix-dropdown{padding:0px}@media only screen and (max-width: 48em){:host .container{flex-direction:column;max-height:unset;height:unset}:host .quick-selection{max-height:12rem}}`;
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
  /**
   * The index of which day to start the week on, based on the Locale#weekdays array.
   * E.g. if the locale is en-us, weekStartIndex = 1 results in starting the week on monday.
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
    return this.currentRangeValue || { id: "", from: "", to: "" };
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
      to: this.to
    };
  }
  onDateSelect(rangeValue) {
    this.dateRangeChange.emit(rangeValue);
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
        const formattedDate = DateTime.fromFormat(option.from, this.format);
        this.datePickerRef.current?.updateSelectedYearMonth(formattedDate);
      } else {
        this.currentRangeValue = option;
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
    return h(Host, { key: "5c6fafed6eff956a8d8ee18f942694824d0d671f", onFocusout: (event) => {
      const relatedTarget = event.relatedTarget;
      if (!relatedTarget) {
        return;
      }
      this.closeDropdown();
    }, role: "presentation" }, h("ix-button", { key: "2478cbc0406e2138db34254b7763ef2c89b9f098", "data-testid": "date-dropdown-trigger", "data-date-dropdown-trigger": true, variant: this.variant, loading: this.loading, icon: iconHistory, ref: this.triggerRef, disabled: this.disabled, ...this.inheritAriaAttributes, "aria-haspopup": "true", "aria-expanded": a11yBoolean(this.show), "aria-controls": "date-dropdown", "aria-label": ariaLabel, [TRAP_FOCUS_EXCLUDE_ATTRIBUTE]: true }, this.getButtonLabel()), h("ix-dropdown", { key: "d4a2be9886eb7148e54ceee14f1d063dcd166f40", focusTrapOptions: {
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
    } }, h("div", { key: "4a2057b59fda6275d9830970c28957d0d0dabdb5", class: "container" }, this.dateRangeOptions?.length > 1 && h("div", { key: "b406724da3faafdc6fbdf3f384b4a0d89c4c8b1d", class: {
      "quick-selection": true,
      "border-right": this.selectedDateRangeId === "custom"
    } }, this.dateRangeOptions.map((dateRangeOption) => h(BaseButton, { disabled: false, iconOnly: false, iconOval: false, selected: false, loading: false, type: "button", variant: "subtle-tertiary", onClick: () => this.onRangeListSelect(dateRangeOption.id), ariaAttributes: {
      "aria-label": `${dateRangeOption.label}: ${dateRangeOption.from} to ${dateRangeOption.to}`
    } }, dateRangeOption.label))), h("div", { key: "ae6eea38d81dc130a6321420fbc31a94e2af21f3", class: "picker-wrapper" }, h("ix-date-picker", { key: "47343189d9044056a84ee50ad35720d9a6a2c4fc", ref: this.datePickerRef, embedded: true, locale: this.locale, onDateChange: (e) => {
      e.stopPropagation();
      this.currentRangeValue = {
        ...e.detail,
        id: "custom"
      };
    }, onDateRangeChange: (e) => e.stopPropagation(), format: this.format, singleSelection: this.singleSelection, from: this.from || this.currentRangeValue?.from, to: this.to || this.currentRangeValue?.to, minDate: this.minDate, maxDate: this.maxDate, today: this.today, weekStartIndex: this.weekStartIndex, showWeekNumbers: this.showWeekNumbers }), h("div", { key: "b3fc8d04f63800a81f34e71ad967e8b07e546fb5", class: "pull-right" }, h("ix-button", { key: "352791e8ac8bcbb4765232134ed35ebcbbf71a6b", onClick: () => {
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
