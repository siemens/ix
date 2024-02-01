import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host, g as getElement } from "./index.45e13eee.js";
import { D as DateTime_1 } from "./luxon-761b9b2d.e4dd57df.js";
const dateDropdownCss = ":host{display:inline-block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}@media (max-width: 48em){:host .min-width{width:-moz-min-content;width:min-content}}@media (min-width: 48em){:host .border-right{border-right:var(--theme-x-weak-bdr-2)}}:host .max-height{max-height:-moz-max-content;max-height:max-content}:host .no-margin{margin:0;padding:0}:host .pull-right{float:right;padding:0.25rem 1rem}";
const IxDateDropdownStyle0 = dateDropdownCss;
const DateDropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dateRangeChange = createEvent(this, "dateRangeChange", 7);
    this.datePickerTouched = false;
    this.format = "yyyy/LL/dd";
    this.range = true;
    this.from = void 0;
    this.to = void 0;
    this.minDate = void 0;
    this.maxDate = void 0;
    this.dateRangeId = "custom";
    this.customRangeAllowed = true;
    this.dateRangeOptions = [];
    this.i18nCustomItem = "Custom...";
    this.i18nDone = "Done";
    this.i18nNoRange = "No range set";
    this.today = DateTime_1.now().toISO();
    this.selectedDateRangeId = void 0;
    this.currentRangeValue = void 0;
    this.triggerRef = void 0;
  }
  onDateRangeIdChange() {
    this.onRangeListSelect(this.dateRangeId);
    this.onDateSelect({
      from: this.currentRangeValue.from,
      to: this.currentRangeValue.to,
      id: this.currentRangeValue.id
    });
  }
  onDateRangeOptionsChange() {
    this.initialize();
    this.onDateRangeIdChange();
  }
  componentWillLoad() {
    this.initialize();
    this.setDateRangeSelection(this.dateRangeId);
  }
  async getDateRange() {
    return this.currentRangeValue;
  }
  initialize() {
    const isCustomRange = this.dateRangeId === "custom" || !this.dateRangeId && !!this.from && !!this.to;
    if (isCustomRange && this.customRangeAllowed) {
      this.selectedDateRangeId = "custom";
      this.currentRangeValue = {
        id: this.selectedDateRangeId,
        from: this.from,
        to: this.to
      };
      return;
    }
    const isValidConfiguration = !isCustomRange && !this.from;
    if (!isValidConfiguration) {
      console.warn('"from" and "range-date-id" is provided this is an invalid combination. Using "custom".');
      this.selectedDateRangeId = "custom";
      this.currentRangeValue = {
        id: this.selectedDateRangeId,
        from: this.from,
        to: this.to
      };
      return;
    }
  }
  onDateSelect(rangeValue, preserveDropdown = true) {
    this.dateRangeChange.emit(rangeValue);
    if (preserveDropdown) {
      this.closeDropdown();
    }
    this.datePickerTouched = false;
  }
  onRangeListSelect(id) {
    if (this.setDateRangeSelection(id)) {
      this.onDateSelect(this.currentRangeValue);
    }
  }
  setDateRangeSelection(id) {
    this.selectedDateRangeId = id;
    const option = this.dateRangeOptions.find((range) => range.id === id);
    if (option) {
      this.currentRangeValue = option;
    }
    return option;
  }
  closeDropdown() {
    this.hostElement.shadowRoot.querySelector("ix-dropdown").show = false;
  }
  getButtonLabel() {
    var _a, _b;
    if (this.selectedDateRangeId === "custom" && ((_a = this.currentRangeValue) === null || _a === void 0 ? void 0 : _a.from)) {
      let range = this.currentRangeValue.from;
      if (this.currentRangeValue.to) {
        range += ` - ${this.currentRangeValue.to}`;
      }
      return range;
    }
    if (!this.selectedDateRangeId) {
      return this.i18nNoRange;
    }
    if (!this.dateRangeOptions || ((_b = this.dateRangeOptions) === null || _b === void 0 ? void 0 : _b.length) === 0) {
      return this.i18nNoRange;
    }
    const option = this.dateRangeOptions.find((option2) => option2.id === this.selectedDateRangeId);
    if (!option) {
      console.error(`Cannot find range option with id ${this.selectedDateRangeId}`);
      return this.i18nNoRange;
    }
    return option.label;
  }
  render() {
    var _a, _b;
    return h(Host, null, h("ix-button", { "data-date-dropdown-trigger": true, variant: "primary", icon: "history", ref: (ref) => this.triggerRef = ref, class: "button-width" }, this.getButtonLabel()), h("ix-dropdown", { "data-date-dropdown": true, class: "min-width max-height", trigger: this.triggerRef, "close-behavior": "outside", placement: "bottom-start", onShowChanged: ({ detail: show }) => {
      if (!show && this.selectedDateRangeId === "custom" && this.datePickerTouched) {
        this.onDateSelect(this.currentRangeValue);
      }
    } }, h("ix-layout-grid", { "no-margin": "true" }, h("ix-row", null, h("ix-col", { class: {
      "no-margin": true,
      "border-right": this.selectedDateRangeId === "custom"
    } }, this.dateRangeOptions.map((dateRangeOption) => h("ix-dropdown-item", { label: dateRangeOption.label, onClick: () => this.onRangeListSelect(dateRangeOption.id), checked: this.selectedDateRangeId === dateRangeOption.id })), h("div", { hidden: !this.customRangeAllowed }, h("ix-dropdown-item", { label: this.i18nCustomItem, checked: this.selectedDateRangeId === "custom", onClick: () => this.onRangeListSelect("custom") }))), h("ix-col", { class: "no-margin" }, this.selectedDateRangeId === "custom" && h(Fragment, null, h("ix-date-picker", { standaloneAppearance: false, onDateChange: (e) => {
      e.stopPropagation();
      this.currentRangeValue = Object.assign(Object.assign({}, e.detail), { id: "custom" });
      this.datePickerTouched = true;
    }, onDateRangeChange: (e) => e.stopPropagation(), format: this.format, range: this.range, from: this.from || ((_a = this.currentRangeValue) === null || _a === void 0 ? void 0 : _a.from), to: this.to || ((_b = this.currentRangeValue) === null || _b === void 0 ? void 0 : _b.to), minDate: this.minDate, maxDate: this.maxDate, today: this.today }), h("div", { class: "pull-right" }, h("ix-button", { onClick: () => {
      this.onDateSelect(this.currentRangeValue);
    } }, this.i18nDone))))))));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "dateRangeId": ["onDateRangeIdChange"],
      "to": ["onDateRangeIdChange"],
      "from": ["onDateRangeIdChange"],
      "dateRangeOptions": ["onDateRangeOptionsChange"]
    };
  }
};
DateDropdown.style = IxDateDropdownStyle0;
export {
  DateDropdown as ix_date_dropdown
};
