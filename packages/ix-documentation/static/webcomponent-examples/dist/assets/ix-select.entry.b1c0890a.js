import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global.7dd975c7.js";
import { a as a11yBoolean } from "./a11y-b10c12e0.27b6344e.js";
import { A as ArrowFocusController } from "./focus-664aef4f.9eed9d82.js";
import { H as HookValidationLifecycle } from "./validation-54137eaa.8ba4a3c5.js";
import { O as OnListener } from "./listener-18b29507.c347627d.js";
import { m as makeRef } from "./make-ref-4b76e9b5.1c81bb51.js";
import { c as createMutationObserver } from "./mutation-observer-db8757e6.4a24be36.js";
import "./disposable-event-listener-ff2cb862.2be8cd03.js";
const selectCss = ":host{display:inline-block;position:relative;min-height:2rem;height:auto;border-radius:var(--theme-input--border-radius)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .d-none{display:none}:host .select{position:relative;display:flex;align-items:center;width:100%;background-color:var(--theme-input--background);border:var(--theme-input--border-thickness) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);padding:0 0 0 0.5rem;box-shadow:var(--theme-inset-shadow-1) !important}:host .select:not(.disabled):not(:disabled){cursor:pointer}:host .select:not(.disabled):not(:disabled):hover{background-color:var(--theme-input--background--hover);border-color:var(--theme-input--border-color--hover)}:host .select:focus-within{background-color:var(--theme-input--background--focus);border-color:var(--theme-input--border-color--focus);outline:1px solid #119fff;outline-offset:var(--theme-input--focus--outline-offset)}:host .select.readonly,:host .select.disabled{box-shadow:none !important;border:none;border-radius:0;cursor:pointer}:host .select.readonly,:host .select.readonly:hover,:host .select.readonly:active,:host .select.disabled,:host .select.disabled:hover,:host .select.disabled:active{background-color:transparent !important}:host .select.readonly:focus,:host .select.readonly:focus-within,:host .select.readonly:focus-visible,:host .select.disabled:focus,:host .select.disabled:focus-within,:host .select.disabled:focus-visible{outline:none}:host .select.readonly input:focus,:host .select.readonly input:focus-visible,:host .select.disabled input:focus,:host .select.disabled input:focus-visible{outline:none}:host .select.disabled{border-bottom:var(--theme-input--border-thickness) solid var(--theme-color-weak-bdr)}:host .select.disabled input{color:var(--theme-color-weak-text)}:host .select.readonly{border-bottom:var(--theme-input--border-thickness) solid var(--theme-color-soft-bdr)}:host .select.readonly input{color:var(--theme-color-std-text)}:host .hidden{display:none !important}:host .trigger{display:flex;align-items:center;flex-grow:1;height:100%}:host .input-container{display:flex;position:relative;align-items:flex-start;width:100%;height:100%}:host .input-container .chips{position:relative;display:flex;align-items:center;flex-wrap:wrap;height:100%;max-height:3.5rem;flex-grow:1;overflow-y:auto}:host .input-container .chips>ix-filter-chip{margin:0.1rem}:host .input-container ix-icon-button{height:1.875rem;width:1.875rem;min-height:1.875rem;min-width:1.875rem}:host .input-container input{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);background:transparent;height:1.75rem;width:100%}:host .input-container input,:host .input-container input:hover,:host .input-container input:focus-visible{border:none;outline:none}:host .input-container input::-moz-placeholder{color:var(--theme-input-select-icon--color)}:host .input-container input::placeholder{color:var(--theme-input-select-icon--color)}:host .input-container input.hide-placeholder::-moz-placeholder{opacity:0}:host .input-container input.hide-placeholder::placeholder{opacity:0}:host ix-dropdown{max-width:100%}:host .dropdown-visible{--ix-icon-button-color:var(--theme-color-dynamic--hover)}:host .add-item{display:flex;justify-content:flex-start;align-items:center;position:relative;width:100%}:host .select-list-header{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;align-items:center;height:2rem;color:var(--theme-select-list-item-hint--color);margin:0 0.5rem 0 1rem}:host(.ix-info:not(.disabled):not(:disabled):not([disabled])) .select{border-color:var(--theme-input--border-color--info)}:host(.ix-info:not(.disabled):not(:disabled):not([disabled])) .select:hover{border-color:var(--theme-input--border-color--info--hover) !important}:host(.ix-info:not(.disabled):not(:disabled):not([disabled])) .select:active{border-color:var(--theme-input--border-color--info--active) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled])) .select{border-color:var(--theme-input--border-color--warning)}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled])) .select:hover{border-color:var(--theme-input--border-color--warning--hover) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled])) .select:active{border-color:var(--theme-input--border-color--warning--active) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled])) .select,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled])) .select{border-color:var(--theme-input--border-color--invalid);background-color:var(--theme-input--background--invalid);box-shadow:none}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled])) .select:hover,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled])) .select:hover{border-color:var(--theme-input--border-color--invalid--hover) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled])) .select:active,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled])) .select:active{border-color:var(--theme-input--border-color--invalid--active) !important}";
const IxSelectStyle0 = selectCss;
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const Select = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChange = createEvent(this, "valueChange", 7);
    this.itemSelectionChange = createEvent(this, "itemSelectionChange", 7);
    this.inputChange = createEvent(this, "inputChange", 7);
    this.addItem = createEvent(this, "addItem", 7);
    this.ixBlur = createEvent(this, "ixBlur", 7);
    if (hostRef.$hostElement$["s-ei"]) {
      this.formInternals = hostRef.$hostElement$["s-ei"];
    } else {
      this.formInternals = hostRef.$hostElement$.attachInternals();
      hostRef.$hostElement$["s-ei"] = this.formInternals;
    }
    this.dropdownWrapperRef = makeRef();
    this.dropdownAnchorRef = makeRef();
    this.inputRef = makeRef();
    this.itemObserver = createMutationObserver(() => {
      if (!this.arrowFocusController) {
        return;
      }
      this.arrowFocusController.items = this.visibleNonShadowItems;
    });
    this.focusControllerCallbackBind = this.focusDropdownItem.bind(this);
    this.name = void 0;
    this.required = false;
    this.label = void 0;
    this.warningText = void 0;
    this.infoText = void 0;
    this.invalidText = void 0;
    this.validText = void 0;
    this.helperText = void 0;
    this.showTextAsTooltip = void 0;
    this.selectedIndices = void 0;
    this.value = [];
    this.allowClear = false;
    this.mode = "single";
    this.editable = false;
    this.disabled = false;
    this.readonly = false;
    this.i18nPlaceholder = "Select an option";
    this.i18nPlaceholderEditable = "Type of select option";
    this.i18nSelectListHeader = "Select an option";
    this.i18nNoMatches = "No matches";
    this.hideListHeader = false;
    this.dropdownWidth = void 0;
    this.dropdownMaxWidth = void 0;
    this.dropdownShow = false;
    this.selectedLabels = [];
    this.isDropdownEmpty = false;
    this.navigationItem = void 0;
    this.inputFilterText = "";
    this.inputValue = "";
    this.isInvalid = false;
    this.isValid = false;
    this.isInfo = false;
    this.isWarning = false;
  }
  get nonShadowItems() {
    return Array.from(this.hostElement.querySelectorAll("ix-select-item"));
  }
  get visibleNonShadowItems() {
    return this.nonShadowItems.filter((item) => !item.classList.contains("d-none"));
  }
  get shadowItems() {
    return Array.from(this.hostElement.shadowRoot.querySelectorAll("ix-select-item"));
  }
  get visibleShadowItems() {
    return this.shadowItems.filter((item) => !item.classList.contains("d-none"));
  }
  get items() {
    return [...this.nonShadowItems, ...this.shadowItems];
  }
  get visibleItems() {
    return this.items.filter((item) => !item.classList.contains("d-none"));
  }
  get selectedItems() {
    return this.items.filter((item) => item.selected);
  }
  get addItemButton() {
    return this.hostElement.shadowRoot.querySelector(".add-item");
  }
  get isSingleMode() {
    return this.mode === "single";
  }
  get isMultipleMode() {
    return this.mode === "multiple";
  }
  get isEveryDropdownItemHidden() {
    return this.items.every((item) => item.classList.contains("d-none"));
  }
  watchSelectedIndices(value) {
    this.value = value;
    this.updateSelection();
  }
  watchValue(value) {
    this.selectedIndices = value;
    this.updateSelection();
  }
  watchDropdownShow(show) {
    if (show && this.dropdownElement) {
      this.itemObserver.observe(this.dropdownElement, {
        childList: true,
        subtree: true
      });
    } else {
      this.cleanupResources();
    }
  }
  cleanupResources() {
    var _a, _b;
    (_a = this.arrowFocusController) === null || _a === void 0 ? void 0 : _a.disconnect();
    this.arrowFocusController = void 0;
    (_b = this.itemObserver) === null || _b === void 0 ? void 0 : _b.disconnect();
  }
  onItemClicked(event) {
    const newId = event.detail;
    this.itemClick(newId);
  }
  async updateFormInternalValue(value) {
    if (Array.isArray(value)) {
      this.formInternals.setFormValue(value.join(","));
      return;
    }
    this.formInternals.setFormValue(value);
  }
  async hasValidValue() {
    return this.required && !!this.hasValue();
  }
  hasValue() {
    if (Array.isArray(this.value)) {
      return !!this.value.length;
    }
    return !!this.value;
  }
  focusDropdownItem(index) {
    var _a, _b;
    this.navigationItem = void 0;
    if (index < this.visibleNonShadowItems.length) {
      const nestedDropdownItem = (_b = (_a = this.visibleNonShadowItems[index]) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector("ix-dropdown-item");
      if (!nestedDropdownItem) {
        return;
      }
      requestAnimationFrame(() => {
        var _a2, _b2;
        (_b2 = (_a2 = nestedDropdownItem === null || nestedDropdownItem === void 0 ? void 0 : nestedDropdownItem.shadowRoot) === null || _a2 === void 0 ? void 0 : _a2.querySelector("button")) === null || _b2 === void 0 ? void 0 : _b2.focus();
      });
    }
  }
  itemClick(newId) {
    const oldValue = this.value;
    const value = this.toggleValue(newId);
    this.value = value;
    const defaultPrevented = this.emitValueChange(value);
    if (defaultPrevented) {
      this.value = oldValue;
      return;
    }
    this.updateSelection();
  }
  emitAddItem(value) {
    var _a;
    if (value === void 0 || value.trim() === "") {
      return false;
    }
    const { defaultPrevented } = this.addItem.emit(value);
    if (defaultPrevented) {
      return true;
    }
    const newItem = document.createElement("ix-select-item");
    newItem.value = value;
    newItem.label = value;
    (_a = this.customItemsContainerElement) === null || _a === void 0 ? void 0 : _a.appendChild(newItem);
    this.clearInput();
    this.itemClick(value);
    return false;
  }
  toggleValue(itemValue) {
    if (!this.isMultipleMode) {
      return itemValue;
    }
    if (!this.value) {
      return [itemValue];
    }
    let value = this.value;
    if (!Array.isArray(value)) {
      value = [value];
    }
    if (value.includes(itemValue)) {
      return value.filter((value2) => value2 !== itemValue);
    } else {
      return [...value, itemValue];
    }
  }
  updateSelection() {
    var _a, _b;
    let ids = [];
    if (this.value) {
      ids = Array.isArray(this.value) ? [...this.value] : [this.value];
    }
    this.items.forEach((item) => {
      item.selected = ids.some((i) => {
        if (typeof i !== typeof item.value) {
          return i.toString() === item.value.toString();
        } else {
          return i === item.value;
        }
      });
    });
    this.selectedLabels = this.selectedItems.map((item) => item.label);
    if (((_a = this.selectedLabels) === null || _a === void 0 ? void 0 : _a.length) && this.isSingleMode) {
      this.inputValue = (_b = this.selectedLabels[0]) !== null && _b !== void 0 ? _b : "";
    } else {
      this.inputValue = "";
    }
    this.inputElement && (this.inputElement.value = this.inputValue);
  }
  emitValueChange(value) {
    const { defaultPrevented } = this.valueChange.emit(value);
    if (defaultPrevented) {
      return true;
    }
    if (!value) {
      this.itemSelectionChange.emit([]);
    } else {
      this.itemSelectionChange.emit(Array.isArray(value) ? value : [value]);
    }
    this.updateFormInternalValue(value);
    return false;
  }
  componentDidLoad() {
    var _a;
    (_a = this.inputElement) === null || _a === void 0 ? void 0 : _a.addEventListener("input", () => {
      var _a2;
      this.dropdownShow = true;
      this.inputChange.emit((_a2 = this.inputElement) === null || _a2 === void 0 ? void 0 : _a2.value);
    });
  }
  componentWillLoad() {
    if (this.selectedIndices && !this.value) {
      this.value = this.selectedIndices;
    }
    this.updateSelection();
    this.updateFormInternalValue(this.value);
  }
  componentDidRender() {
    if (!this.dropdownShow || this.arrowFocusController || !this.dropdownElement) {
      return;
    }
    this.arrowFocusController = new ArrowFocusController(this.visibleNonShadowItems, this.dropdownElement, this.focusControllerCallbackBind);
    this.arrowFocusController.wrap = !this.isAddItemVisible() && !this.visibleShadowItems.length;
  }
  onLabelChange(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.updateSelection();
  }
  disconnectedCallback() {
    this.cleanupResources();
  }
  itemExists(item) {
    return this.items.find((i) => i.label === item);
  }
  dropdownVisibilityChanged(event) {
    var _a, _b;
    this.dropdownShow = event.detail;
    if (event.detail) {
      (_a = this.inputElement) === null || _a === void 0 ? void 0 : _a.focus();
      (_b = this.inputElement) === null || _b === void 0 ? void 0 : _b.select();
      this.removeHiddenFromItems();
      this.isDropdownEmpty = this.isEveryDropdownItemHidden;
    } else {
      this.navigationItem = void 0;
      this.updateSelection();
      this.inputFilterText = "";
    }
  }
  async onKeyDown(event) {
    if (event.code === "ArrowDown" || event.code === "ArrowUp") {
      await this.onArrowNavigation(event, event.code);
    }
    if (!this.dropdownShow) {
      return;
    }
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      await this.onEnterNavigation(event.target);
    }
    if (event.code === "Escape") {
      this.dropdownShow = false;
    }
  }
  async onEnterNavigation(el) {
    if (this.isMultipleMode) {
      return;
    }
    const trimmedInput = this.inputFilterText.trim();
    const itemLabel = el === null || el === void 0 ? void 0 : el.label;
    const item = this.itemExists(trimmedInput);
    if (item) {
      this.itemClick(item.value);
    } else if (this.editable && !this.itemExists(itemLabel)) {
      const defaultPrevented = this.emitAddItem(trimmedInput);
      if (defaultPrevented) {
        return;
      }
    }
    this.dropdownShow = false;
    this.updateSelection();
  }
  async onArrowNavigation(event, key) {
    var _a;
    if (event.defaultPrevented) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    this.dropdownShow = true;
    if (!this.navigationItem && document.activeElement === this.hostElement) {
      if (this.visibleItems.length) {
        this.applyFocusTo(this.visibleItems.shift());
      } else if (this.isAddItemVisible()) {
        this.focusAddItemButton();
      }
      return;
    }
    const moveUp = key === "ArrowUp";
    const indexNonShadow = document.activeElement ? this.visibleNonShadowItems.indexOf(document.activeElement) : -1;
    if (indexNonShadow === 0) {
      if (!this.visibleShadowItems.length && this.isAddItemVisible()) {
        this.focusAddItemButton();
      } else {
        this.applyFocusTo(this.visibleShadowItems.pop());
      }
      return;
    } else if (indexNonShadow !== -1 && indexNonShadow === this.visibleNonShadowItems.length - 1) {
      if (this.visibleShadowItems.length) {
        this.applyFocusTo(this.visibleShadowItems.shift());
      } else if (this.isAddItemVisible()) {
        this.focusAddItemButton();
      }
      return;
    }
    if (!this.navigationItem) {
      return;
    }
    if (this.isAddItemVisible() && ((_a = this.addItemElement) === null || _a === void 0 ? void 0 : _a.contains(await this.navigationItem.getDropdownItemElement()))) {
      if (moveUp) {
        this.applyFocusTo(this.visibleItems.pop());
      } else if (this.visibleItems.length) {
        this.applyFocusTo(this.visibleItems.shift());
      }
      return;
    }
    const indexShadow = this.visibleShadowItems.indexOf(this.navigationItem);
    if (moveUp) {
      if (indexShadow === 0) {
        if (this.visibleNonShadowItems.length) {
          this.applyFocusTo(this.visibleNonShadowItems.pop());
        } else if (this.isAddItemVisible()) {
          this.focusAddItemButton();
        }
      } else {
        this.applyFocusTo(this.visibleShadowItems[indexShadow - 1]);
      }
    } else {
      if (indexShadow === this.visibleShadowItems.length - 1) {
        if (this.isAddItemVisible()) {
          this.focusAddItemButton();
        } else {
          this.applyFocusTo(this.visibleItems.shift());
        }
      } else {
        this.applyFocusTo(this.visibleShadowItems[indexShadow + 1]);
      }
    }
  }
  applyFocusTo(element) {
    if (!element) {
      return;
    }
    this.navigationItem = element;
    setTimeout(() => {
      var _a, _b, _c, _d;
      (_d = (_c = (_b = (_a = element.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("ix-dropdown-item")) === null || _b === void 0 ? void 0 : _b.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector("button")) === null || _d === void 0 ? void 0 : _d.focus();
    });
  }
  focusAddItemButton() {
    var _a, _b;
    if (this.addItemButton) {
      (_b = (_a = this.addItemButton.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("button")) === null || _b === void 0 ? void 0 : _b.focus();
      this.navigationItem = this.addItemElement;
    }
  }
  filterItemsWithTypeahead() {
    var _a, _b;
    this.inputFilterText = (_b = (_a = this.inputElement) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : "";
    if (this.isSingleMode && this.inputFilterText === this.selectedLabels[0]) {
      return;
    }
    if (this.inputFilterText) {
      this.items.forEach((item) => {
        var _a2;
        item.classList.remove("d-none");
        if (!((_a2 = item.label) === null || _a2 === void 0 ? void 0 : _a2.toLowerCase().includes(this.inputFilterText.toLowerCase()))) {
          item.classList.add("d-none");
        }
      });
    } else {
      this.removeHiddenFromItems();
    }
    if (this.arrowFocusController) {
      this.arrowFocusController.items = this.visibleNonShadowItems;
    }
    this.isDropdownEmpty = this.isEveryDropdownItemHidden;
  }
  removeHiddenFromItems() {
    this.items.forEach((item) => {
      item.classList.remove("d-none");
    });
  }
  clearInput() {
    if (this.inputElement) {
      this.inputElement.value = "";
    }
    this.inputFilterText = "";
  }
  clear() {
    this.clearInput();
    this.selectedLabels = [];
    this.value = [];
    this.emitValueChange([]);
    this.dropdownShow = false;
  }
  onInputBlur(event) {
    this.ixBlur.emit();
    if (this.editable) {
      return;
    }
    if (this.isSingleMode) {
      return;
    }
    const target = event.target;
    if (!this.dropdownShow && this.mode !== "multiple") {
      target.value = this.selectedLabels.toString();
    }
  }
  placeholderValue() {
    if (this.disabled) {
      return "";
    }
    if (this.readonly) {
      return "";
    }
    if (this.editable) {
      return this.i18nPlaceholderEditable;
    }
    return this.i18nPlaceholder;
  }
  isAddItemVisible() {
    return !this.itemExists(this.inputFilterText) && this.editable && this.inputFilterText;
  }
  onValidationChange({ isInvalid, isInvalidByRequired, isValid, isInfo, isWarning }) {
    this.isInvalid = isInvalid || isInvalidByRequired;
    this.isValid = isValid;
    this.isWarning = isWarning;
    this.isInfo = isInfo;
  }
  async getAssociatedFormElement() {
    return this.formInternals.form;
  }
  getNativeInputElement() {
    if (this.inputElement) {
      return Promise.resolve(this.inputElement);
    } else {
      return Promise.reject(new Error("Input element not found"));
    }
  }
  async focusInput() {
    const inputElement = await this.getNativeInputElement();
    if (inputElement) {
      inputElement.focus();
    }
  }
  render() {
    var _a, _b, _c, _d;
    return h(Host, { key: "d75b237d63401907045c1ef0ff8a95ad690af8e3", "aria-disabled": a11yBoolean(this.disabled), class: {
      disabled: this.disabled
    } }, h("ix-field-wrapper", { key: "6014f22207384f636935362faffa83c4a8026ff8", required: this.required, label: this.label, helperText: this.helperText, invalidText: this.invalidText, infoText: this.infoText, warningText: this.warningText, validText: this.validText, showTextAsTooltip: this.showTextAsTooltip, isInvalid: this.isInvalid, isValid: this.isValid, isInfo: this.isInfo, isWarning: this.isWarning, controlRef: this.inputRef }, h("div", { key: "0bb6d6626b6da3cf0444738ad38d5f4c3bc8af2e", class: {
      select: true,
      disabled: this.disabled,
      readonly: this.readonly
    }, ref: (ref) => {
      this.dropdownAnchorRef(ref);
      if (!this.editable)
        this.dropdownWrapperRef(ref);
    } }, h("div", { key: "00f38bf5536460b2633860b806bf77cadcc9c2a7", class: "input-container" }, h("div", { key: "50481103d88830a7c7143dff36855c5ec2431475", class: "chips" }, this.isMultipleMode ? (_a = this.selectedItems) === null || _a === void 0 ? void 0 : _a.map((item) => h("ix-filter-chip", { disabled: this.disabled || this.readonly, key: item.value, onCloseClick: (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.itemClick(item.value);
    } }, item.label)) : "", h("div", { key: "820c8db4efe7b1f0424536c94261fda57e87c219", class: "trigger" }, h("input", { key: "9d979641d1fc28b48c3c64d6b165b5c4cd91d9af", autocomplete: "off", "data-testid": "input", disabled: this.disabled, readOnly: this.readonly, required: this.required, type: "text", class: {
      "allow-clear": this.allowClear && !!((_b = this.selectedLabels) === null || _b === void 0 ? void 0 : _b.length)
    }, placeholder: this.placeholderValue(), value: (_c = this.inputValue) !== null && _c !== void 0 ? _c : "", ref: (ref) => {
      this.inputElement = ref;
      this.inputRef(ref);
    }, onBlur: (e) => this.onInputBlur(e), onFocus: () => {
      this.navigationItem = void 0;
    }, onInput: () => this.filterItemsWithTypeahead(), onKeyDown: (e) => this.onKeyDown(e) }), this.allowClear && !this.disabled && !this.readonly && (((_d = this.selectedLabels) === null || _d === void 0 ? void 0 : _d.length) || this.inputFilterText) ? h("ix-icon-button", { class: "clear", icon: "clear", ghost: true, oval: true, size: "16", onClick: (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.clear();
    } }) : null, this.disabled || this.readonly ? null : h("ix-icon-button", { "data-select-dropdown": true, class: { "dropdown-visible": this.dropdownShow }, icon: "chevron-down-small", ghost: true, ref: (ref) => {
      if (this.editable)
        this.dropdownWrapperRef(ref);
    } })))))), h("ix-dropdown", { key: "ea685854ac93811ad5218777d809c9b765460dfe", ref: (ref) => this.dropdownElement = ref, show: this.dropdownShow, closeBehavior: this.isMultipleMode ? "outside" : "both", class: {
      "d-none": this.disabled || this.readonly
    }, anchor: this.dropdownAnchorRef.waitForCurrent(), trigger: this.dropdownWrapperRef.waitForCurrent(), onShowChanged: (e) => this.dropdownVisibilityChanged(e), placement: "bottom-start", overwriteDropdownStyle: async () => {
      var _a2, _b2;
      const styleOverwrites = {};
      const minWidth = (_b2 = (_a2 = this.hostElement.shadowRoot) === null || _a2 === void 0 ? void 0 : _a2.querySelector(".select")) === null || _b2 === void 0 ? void 0 : _b2.getBoundingClientRect().width;
      if (minWidth) {
        styleOverwrites.minWidth = `${minWidth}px`;
      }
      if (this.dropdownWidth) {
        styleOverwrites.width = `min(${this.dropdownWidth}, 100%)`;
      }
      if (this.dropdownMaxWidth) {
        styleOverwrites.maxWidth = `min(${this.dropdownMaxWidth}, 100%)`;
      }
      return styleOverwrites;
    } }, h("div", { key: "f6a528bab147937ccbcc833637c9e1d63558ac60", class: {
      "select-list-header": true,
      hidden: this.hideListHeader || this.isDropdownEmpty
    }, title: this.i18nSelectListHeader, onClick: (e) => e.preventDefault() }, this.i18nSelectListHeader), h("slot", { key: "2689e9ef17c90a099b476658dc5219aac22f6b22", onSlotchange: () => {
      this.updateSelection();
    } }), h("div", { key: "632344ae80f829a40678b4a08ee2325438c799b1", ref: (ref) => this.customItemsContainerElement = ref, class: "d-contents" }), this.isAddItemVisible() ? h("ix-dropdown-item", { "data-testid": "add-item", icon: "plus", class: {
      "add-item": true
    }, label: this.inputFilterText, onItemClick: (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.emitAddItem(this.inputFilterText);
    }, onFocus: () => this.navigationItem = this.addItemElement, ref: (ref) => {
      this.addItemElement = ref;
    } }) : null, this.isDropdownEmpty && !this.editable ? h("div", { class: "select-list-header" }, this.i18nNoMatches) : ""));
  }
  static get formAssociated() {
    return true;
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "selectedIndices": ["watchSelectedIndices"],
      "value": ["watchValue"],
      "dropdownShow": ["watchDropdownShow"]
    };
  }
};
__decorate([
  OnListener("keydown", (self) => self.dropdownShow)
], Select.prototype, "onKeyDown", null);
__decorate([
  HookValidationLifecycle()
], Select.prototype, "onValidationChange", null);
Select.style = IxSelectStyle0;
export {
  Select as ix_select
};
