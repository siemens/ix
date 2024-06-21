import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global.8b5b8f81.js";
import { A as ArrowFocusController } from "./focus-d4d3abaf.e4140cbf.js";
import { O as OnListener } from "./listener-2d09646e.b9f986e6.js";
import { c as createMutationObserver } from "./mutation-observer-db8757e6.4a24be36.js";
const selectCss = ":host{display:inline-block;position:relative;min-height:2rem;height:auto;border-radius:var(--theme-input--border-radius)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .d-none{display:none}:host .select{position:relative;display:flex;align-items:center;background-color:var(--theme-input--background);border:var(--theme-input--border-thickness) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);padding:0 0 0 0.5rem;box-shadow:var(--theme-inset-shadow-1) !important}:host .select:not(.disabled):not(:disabled){cursor:pointer}:host .select:not(.disabled):not(:disabled):hover{background-color:var(--theme-input--background--hover);border-color:var(--theme-input--border-color--hover)}:host .select:focus-within{background-color:var(--theme-input--background--focus);border-color:var(--theme-input--border-color--focus);outline:1px solid #119fff;outline-offset:var(--theme-input--focus--outline-offset)}:host .select.readonly,:host .select.disabled{box-shadow:none !important;border:none;border-radius:0;cursor:pointer}:host .select.readonly,:host .select.readonly:hover,:host .select.readonly:active,:host .select.disabled,:host .select.disabled:hover,:host .select.disabled:active{background-color:transparent !important}:host .select.readonly:focus,:host .select.readonly:focus-within,:host .select.readonly:focus-visible,:host .select.disabled:focus,:host .select.disabled:focus-within,:host .select.disabled:focus-visible{outline:none}:host .select.readonly input:focus,:host .select.readonly input:focus-visible,:host .select.disabled input:focus,:host .select.disabled input:focus-visible{outline:none}:host .select.disabled{border-bottom:var(--theme-input--border-thickness) solid var(--theme-color-weak-bdr)}:host .select.disabled input{color:var(--theme-color-weak-text)}:host .select.readonly{border-bottom:var(--theme-input--border-thickness) solid var(--theme-color-soft-bdr)}:host .select.readonly input{color:var(--theme-color-std-text)}:host .hidden{display:none !important}:host .trigger{display:flex;align-items:center;flex-grow:1;height:100%}:host .input-container{display:flex;position:relative;align-items:flex-start;width:100%;height:100%}:host .input-container .chips{position:relative;display:flex;align-items:center;flex-wrap:wrap;height:100%;max-height:3.5rem;flex-grow:1;overflow-y:auto}:host .input-container .chips>ix-filter-chip{margin:0.1rem}:host .input-container input{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);background:transparent;height:1.75rem;width:100%}:host .input-container input,:host .input-container input:hover,:host .input-container input:focus-visible{border:none;outline:none}:host .input-container input::-moz-placeholder{color:var(--theme-input-select-icon--color)}:host .input-container input::placeholder{color:var(--theme-input-select-icon--color)}:host .input-container input.hide-placeholder::-moz-placeholder{opacity:0}:host .input-container input.hide-placeholder::placeholder{opacity:0}:host .dropdown-visible{--ix-icon-button-color:var(--theme-color-dynamic--hover)}:host .add-item{display:flex;justify-content:flex-start;align-items:center;position:relative;width:100%}:host .select-list-header{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;align-items:center;height:2rem;color:var(--theme-select-list-item-hint--color);margin:0 0.5rem 0 1rem}";
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
    this.focusControllerCallbackBind = this.focusDropdownItem.bind(this);
    this.itemObserver = createMutationObserver(() => {
      this.arrowFocusController.items = this.visibleNonShadowItems;
    });
    this.selectedIndices = void 0;
    this.value = void 0;
    this.allowClear = false;
    this.mode = "single";
    this.editable = false;
    this.disabled = false;
    this.readonly = false;
    this.i18nPlaceholder = "Select an option";
    this.i18nPlaceholderEditable = "Type of select option";
    this.i18nSelectListHeader = "Please select an option";
    this.i18nNoMatches = "No matches";
    this.hideListHeader = false;
    this.dropdownShow = false;
    this.selectedLabels = void 0;
    this.dropdownWrapperRef = void 0;
    this.dropdownAnchor = void 0;
    this.isDropdownEmpty = false;
    this.navigationItem = void 0;
    this.inputFilterText = void 0;
    this.inputValue = void 0;
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
    if (show) {
      this.arrowFocusController = new ArrowFocusController(this.visibleNonShadowItems, this.dropdownRef, this.focusControllerCallbackBind);
      this.arrowFocusController.wrap = !this.editable;
      this.itemObserver.observe(this.dropdownRef, {
        childList: true,
        subtree: true
      });
    } else {
      this.arrowFocusController.disconnect();
      this.arrowFocusController = void 0;
      this.itemObserver.disconnect();
    }
  }
  onItemClicked(event) {
    const newId = event.detail;
    this.itemClick(newId);
  }
  focusDropdownItem(index) {
    var _a;
    this.navigationItem = void 0;
    if (index < this.visibleNonShadowItems.length) {
      const nestedDropdownItem = (_a = this.visibleNonShadowItems[index]) === null || _a === void 0 ? void 0 : _a.shadowRoot.querySelector("ix-dropdown-item");
      requestAnimationFrame(() => {
        nestedDropdownItem.shadowRoot.querySelector("button").focus();
      });
    }
  }
  itemClick(newId) {
    this.value = this.toggleValue(newId);
    this.updateSelection();
    this.emitValueChange();
  }
  emitAddItem(value) {
    if (value === void 0 || value.trim() === "") {
      return;
    }
    const newItem = document.createElement("ix-select-item");
    newItem.value = value;
    newItem.label = value;
    this.customItemsContainerRef.appendChild(newItem);
    this.clearInput();
    this.itemClick(value);
    this.addItem.emit(value);
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
    var _a;
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
    if (this.isSingleMode && ((_a = this.selectedLabels) === null || _a === void 0 ? void 0 : _a.length)) {
      this.inputValue = this.selectedLabels[0];
      this.inputRef && (this.inputRef.value = this.inputValue);
      return;
    }
    this.inputValue = null;
  }
  emitValueChange() {
    this.valueChange.emit(this.value);
    if (!this.value) {
      this.itemSelectionChange.emit(null);
    } else {
      this.itemSelectionChange.emit(Array.isArray(this.value) ? this.value : [this.value]);
    }
  }
  componentDidLoad() {
    this.inputRef.addEventListener("input", () => {
      this.dropdownShow = true;
      this.inputChange.emit(this.inputRef.value);
    });
  }
  componentWillLoad() {
    if (this.selectedIndices && !this.value) {
      this.value = this.selectedIndices;
    }
    this.updateSelection();
  }
  onLabelChange(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.updateSelection();
  }
  disconnectedCallback() {
    if (this.itemMutationObserver) {
      this.itemMutationObserver.disconnect();
    }
  }
  itemExists(item) {
    return this.items.find((i) => i.label === item);
  }
  dropdownVisibilityChanged(event) {
    this.dropdownShow = event.detail;
    if (event.detail) {
      this.inputRef.focus();
      this.inputRef.select();
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
      await this.onEnterNavigation();
    }
    if (event.code === "Escape") {
      this.dropdownShow = false;
    }
  }
  async onEnterNavigation() {
    var _a;
    if (this.isMultipleMode) {
      return;
    }
    let item;
    if (this.editable && !this.itemExists(this.inputFilterText)) {
      this.emitAddItem(this.inputFilterText);
      item = this.items[this.items.length - 1];
    }
    if (item) {
      item.onItemClick();
    }
    await ((_a = this.dropdownRef) === null || _a === void 0 ? void 0 : _a.updatePosition());
    if (this.isSingleMode && !this.editable) {
      this.dropdownShow = false;
    }
  }
  async onArrowNavigation(event, key) {
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
    const indexNonShadow = this.visibleNonShadowItems.indexOf(document.activeElement);
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
    if (this.isAddItemVisible() && this.addItemRef.contains(await this.navigationItem.getDropdownItemElement())) {
      if (moveUp) {
        this.applyFocusTo(this.visibleItems.pop());
      } else {
        if (this.visibleItems.length) {
          this.applyFocusTo(this.visibleItems.shift());
        }
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
      element.shadowRoot.querySelector("ix-dropdown-item").shadowRoot.querySelector("button").focus();
    });
  }
  focusAddItemButton() {
    if (this.addItemButton) {
      this.addItemButton.shadowRoot.querySelector("button").focus();
      this.navigationItem = this.addItemRef;
    }
  }
  filterItemsWithTypeahead() {
    this.inputFilterText = this.inputRef.value;
    if (this.isSingleMode && this.inputFilterText === this.selectedLabels[0]) {
      return;
    }
    if (this.inputFilterText) {
      this.items.forEach((item) => {
        item.classList.remove("d-none");
        if (!item.label.toLowerCase().includes(this.inputFilterText.toLowerCase())) {
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
    this.inputRef.value = "";
    this.inputFilterText = "";
  }
  clear() {
    this.clearInput();
    this.selectedLabels = [];
    this.value = [];
    this.valueChange.emit(null);
    this.dropdownShow = false;
  }
  onInputBlur(e) {
    if (this.editable) {
      return;
    }
    if (this.isSingleMode) {
      return;
    }
    if (!this.dropdownShow && this.mode !== "multiple") {
      e.target["value"] = this.selectedLabels;
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
  render() {
    var _a, _b, _c;
    return h(Host, { key: "4626c1e1caacb41eaebfba7a2dcb438684487212" }, h("div", { key: "d5d9be9ecfa4ee6b4903c0c3af2efadbf3c43bbf", class: {
      select: true,
      disabled: this.disabled,
      readonly: this.readonly
    }, ref: (ref) => {
      this.dropdownAnchor = ref;
      if (!this.editable)
        this.dropdownWrapperRef = ref;
    } }, h("div", { key: "8f6b456b62facaab2b359cb1f2c178395550db8d", class: "input-container" }, h("div", { key: "85148876ea0e9216610397c9279d8a602dcd27e1", class: "chips" }, this.isMultipleMode ? (_a = this.selectedItems) === null || _a === void 0 ? void 0 : _a.map((item) => h("ix-filter-chip", { disabled: this.disabled || this.readonly, key: item.value, onCloseClick: (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.itemClick(item.value);
    } }, item.label)) : "", h("div", { key: "990d5c1c006e28921d6e116770ade6cadb02fdf7", class: "trigger" }, h("input", { key: "a408fe31c5911ff700b3aa9359aa73fed640d327", autocomplete: "off", "data-testid": "input", disabled: this.disabled, readOnly: this.readonly, type: "text", class: {
      "allow-clear": this.allowClear && !!((_b = this.selectedLabels) === null || _b === void 0 ? void 0 : _b.length)
    }, placeholder: this.placeholderValue(), value: this.inputValue, ref: (ref) => this.inputRef = ref, onBlur: (e) => this.onInputBlur(e), onFocus: () => {
      this.navigationItem = void 0;
    }, onInput: () => this.filterItemsWithTypeahead(), onKeyDown: (e) => this.onKeyDown(e) }), this.allowClear && (((_c = this.selectedLabels) === null || _c === void 0 ? void 0 : _c.length) || this.inputFilterText) ? h("ix-icon-button", { class: "clear", icon: "clear", ghost: true, oval: true, size: "16", onClick: (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.clear();
    } }) : null, this.disabled || this.readonly ? null : h("ix-icon-button", { "data-select-dropdown": true, class: { "dropdown-visible": this.dropdownShow }, icon: "chevron-down-small", ghost: true, ref: (ref) => {
      if (this.editable)
        this.dropdownWrapperRef = ref;
    } }))))), h("ix-dropdown", { key: "584c25a81fff55aa9855cd7c93119507023b769f", ref: (ref) => this.dropdownRef = ref, show: this.dropdownShow, closeBehavior: this.isMultipleMode ? "outside" : "both", class: {
      "d-none": this.disabled || this.readonly
    }, anchor: this.dropdownAnchor, trigger: this.dropdownWrapperRef, onShowChanged: (e) => this.dropdownVisibilityChanged(e), placement: "bottom-start", overwriteDropdownStyle: async () => {
      return {
        minWidth: `${this.hostElement.clientWidth}px`
      };
    } }, h("div", { key: "551f36e908883a074e81d5269e32f1260e0b0abe", class: {
      "select-list-header": true,
      hidden: this.hideListHeader || this.isDropdownEmpty
    }, title: this.i18nSelectListHeader, onClick: (e) => e.preventDefault() }, this.i18nSelectListHeader), h("slot", { key: "c2b10c1b09dd64eb0ab0a6bc51d43f98e876031a" }), h("div", { key: "a7076d2f894af20584a45109b397b0362ea6f6a5", ref: (ref) => this.customItemsContainerRef = ref, class: "d-contents" }), this.isAddItemVisible() ? h("ix-dropdown-item", { "data-testid": "add-item", icon: "plus", class: {
      "add-item": true
    }, label: this.inputFilterText, onItemClick: (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.emitAddItem(this.inputFilterText);
    }, onFocus: () => this.navigationItem = this.addItemRef, ref: (ref) => {
      this.addItemRef = ref;
    } }) : null, this.isDropdownEmpty && !this.editable ? h("div", { class: "select-list-header" }, this.i18nNoMatches) : ""));
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
Select.style = IxSelectStyle0;
export {
  Select as ix_select
};
