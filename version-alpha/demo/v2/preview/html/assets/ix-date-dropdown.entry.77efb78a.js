import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host, g as getElement } from "./global.23f98c2e.js";
import { D as DateTime } from "./datetime-bDicGJUN.ac1e7094.js";
import { m as makeRef } from "./make-ref-bcj7UEIC.8e199155.js";
import { j as iconHistory } from "./index-CrTP-icT.451e0ae2.js";
const dateDropdownCss = ":host{display:inline-block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}@media (max-width: 48em){:host .min-width{width:-moz-min-content;width:min-content}}@media (min-width: 48em){:host .border-right{border-right:var(--theme-x-weak-bdr-2)}}:host ix-button{width:100%}:host .max-height{max-height:-moz-max-content;max-height:max-content}:host .no-margin{margin:0;padding:0}:host .pull-right{float:right;padding:0 1rem 0.75rem 1rem}";
const DateDropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dateRangeChange = createEvent(this, "dateRangeChange", 7);
    this.disabled = false;
    this.format = "yyyy/LL/dd";
    this.range = true;
    this.from = "";
    this.to = "";
    this.minDate = "";
    this.maxDate = "";
    this.dateRangeId = "custom";
    this.variant = "primary";
    this.outline = false;
    this.ghost = false;
    this.loading = false;
    this.showWeekNumbers = false;
    this.customRangeAllowed = true;
    this.dateRangeOptions = [];
    this.weekStartIndex = 0;
    this.i18nCustomItem = "Custom...";
    this.i18nDone = "Done";
    this.i18nNoRange = "No range set";
    this.today = DateTime.now().toISO();
    this.selectedDateRangeId = "";
    this.triggerRef = makeRef();
    this.datePickerTouched = false;
  }
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
  onDateRangeOptionsChange() {
    this.initialize();
    this.onDateRangeIdChange();
  }
  onDisabledChange() {
    if (this.disabled) {
      this.closeDropdown();
    }
  }
  componentWillLoad() {
    this.initialize();
    this.setDateRangeSelection(this.dateRangeId);
  }
  async getDateRange() {
    return this.currentRangeValue || { id: "", from: "", to: "" };
  }
  initialize() {
    const isCustomRange = this.dateRangeId === "custom" || !this.dateRangeId && !!this.from && !!this.to;
    if (isCustomRange && this.customRangeAllowed) {
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
  onDateSelect(rangeValue, preserveDropdown = true) {
    this.dateRangeChange.emit(rangeValue);
    if (preserveDropdown) {
      this.closeDropdown();
    }
    this.datePickerTouched = false;
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
      this.currentRangeValue = option;
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
    var _a, _b, _c;
    return h(Host, { key: "fb251840a006c5efa804f444e52dd938fc7e6eda" }, h("ix-button", { key: "7e7e4c12a2eb502564baaa5679969917aa40403c", "data-testid": "date-dropdown-trigger", "data-date-dropdown-trigger": true, variant: this.variant, ghost: this.ghost, outline: this.outline, loading: this.loading, icon: iconHistory, ref: this.triggerRef, disabled: this.disabled }, this.getButtonLabel()), h("ix-dropdown", { key: "a80a5f47757956fe5340acbe28a2634bcc46f30e", "data-testid": "date-dropdown", "data-date-dropdown": true, class: "min-width max-height", trigger: this.triggerRef.waitForCurrent(), closeBehavior: "outside", placement: "bottom-start", onShowChanged: ({ detail: show }) => {
      if (!show && this.selectedDateRangeId === "custom" && this.datePickerTouched && this.currentRangeValue) {
        this.onDateSelect(this.currentRangeValue);
      }
    } }, h("ix-layout-grid", { key: "d7cba7d46b7c7dfd545e41c5895842f5cbcd8f5a", noMargin: true }, h("ix-row", { key: "ad8958836b662def55cc51d52864639a25718ece" }, ((_a = this.dateRangeOptions) === null || _a === void 0 ? void 0 : _a.length) > 1 && h("ix-col", { key: "a830a5768c0e72f5710440c9a4199a794ff4667e", class: {
      "no-margin": true,
      "border-right": this.selectedDateRangeId === "custom"
    } }, this.dateRangeOptions.map((dateRangeOption) => h("ix-dropdown-item", { label: dateRangeOption.label, onClick: () => this.onRangeListSelect(dateRangeOption.id), checked: this.selectedDateRangeId === dateRangeOption.id })), h("div", { key: "4d1899c246bc6995852e25078a33bf297e7bdd6b", hidden: !this.customRangeAllowed }, h("ix-dropdown-item", { key: "5e61b21055860fc54d84cf14a1678b773e7a3ba2", label: this.i18nCustomItem, checked: this.selectedDateRangeId === "custom", onClick: () => this.onRangeListSelect("custom") }))), h("ix-col", { key: "5d33b5d8f022fa59492c5ddd1eb71bb5afd2af67", class: "no-margin" }, this.selectedDateRangeId === "custom" && h(Fragment, { key: "46229de1218d9b719fa8f5af3b784cac99e57b82" }, h("ix-date-picker", { key: "87f3f37847b277dc0220b0a6a9769a332a39e59b", standaloneAppearance: false, locale: this.locale, onDateChange: (e) => {
      e.stopPropagation();
      this.currentRangeValue = Object.assign(Object.assign({}, e.detail), { id: "custom" });
      this.datePickerTouched = true;
    }, onDateRangeChange: (e) => e.stopPropagation(), format: this.format, range: this.range, from: this.from || ((_b = this.currentRangeValue) === null || _b === void 0 ? void 0 : _b.from), to: this.to || ((_c = this.currentRangeValue) === null || _c === void 0 ? void 0 : _c.to), minDate: this.minDate, maxDate: this.maxDate, today: this.today, weekStartIndex: this.weekStartIndex, showWeekNumbers: this.showWeekNumbers }), h("div", { key: "dac27dc2ebbf00321384691bdf1c0badb8d2df6a", class: "pull-right" }, h("ix-button", { key: "44668c59a0dfe7c428dc28fe518f6ca6012f37a0", onClick: () => {
      if (this.currentRangeValue) {
        this.onDateSelect(this.currentRangeValue);
      }
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
      "dateRangeOptions": ["onDateRangeOptionsChange"],
      "disabled": ["onDisabledChange"]
    };
  }
};
DateDropdown.style = dateDropdownCss;
export {
  DateDropdown as ix_date_dropdown
};
