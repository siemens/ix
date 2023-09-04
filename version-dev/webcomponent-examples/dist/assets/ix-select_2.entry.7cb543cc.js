import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.8f02b398.js";
const selectCss = ":host{display:inline-block;position:relative;height:auto;border-radius:var(--theme-input--border-radius)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host .d-none{display:none}:host .select{position:relative;display:flex;align-items:center;height:auto;background-color:var(--theme-input--background);border:var(--theme-input--border-thickness) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);padding:0 0 0 0.5rem;box-shadow:var(--theme-inset-shadow-1) !important}:host .select:not(.disabled):not(:disabled){cursor:pointer}:host .select:not(.disabled):not(:disabled):hover{background-color:var(--theme-input--background--hover);border-color:var(--theme-input--border-color--hover)}:host .select:focus-within{background-color:var(--theme-input--background--focus);border-color:var(--theme-input--border-color--focus);outline:1px solid #119fff;outline-offset:var(--theme-input--focus--outline-offset)}:host .select.readonly{box-shadow:none !important;border:none;border-radius:0px;border-bottom:var(--theme-input--border-thickness) solid var(--theme-color-weak-bdr)}:host .select.readonly,:host .select.readonly:hover,:host .select.readonly:active{background-color:transparent !important}:host .select.readonly:focus,:host .select.readonly:focus-within,:host .select.readonly:focus-visible{outline:none}:host .select.readonly input{color:var(--theme-color-weak-text)}:host .select.readonly input:focus,:host .select.readonly input:focus-visible{outline:none}:host .hidden{display:none !important}:host .trigger{display:flex;align-items:center;flex-grow:1;height:100%}:host .input-container{display:flex;position:relative;align-items:flex-start;width:100%}:host .input-container .chips{position:relative;display:flex;align-items:center;flex-wrap:wrap;height:100%;max-height:3.5rem;flex-grow:1;overflow-y:auto}:host .input-container .chips>ix-filter-chip{margin:0.1rem}:host .input-container input{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);background:transparent;height:1.75rem;width:100%}:host .input-container input,:host .input-container input:hover,:host .input-container input:focus-visible{border:none;outline:none}:host .input-container input::-moz-placeholder{color:var(--theme-input-select-icon--color)}:host .input-container input::placeholder{color:var(--theme-input-select-icon--color)}:host .input-container input.hide-placeholder::-moz-placeholder{opacity:0}:host .input-container input.hide-placeholder::placeholder{opacity:0}:host .chevron-down-container{display:flex;align-items:center;justify-content:center;width:2rem;min-width:2rem;height:2rem}:host .chevron-down-container:not(.disabled):not(:disabled){cursor:pointer}:host .chevron-down-container:not(.disabled):not(:disabled):hover{color:var(--theme-color-dynamic--hover)}:host .chevron-down-container:not(.disabled):not(:disabled){cursor:pointer}:host .chevron-down-container:not(.disabled):not(:disabled):active,:host .chevron-down-container:not(.disabled):not(:disabled).active{color:var(--theme-color-dynamic--hover)}:host .editable .chevron-down-container:not(.disabled):not(:disabled){cursor:pointer}:host .editable .chevron-down-container:not(.disabled):not(:disabled):hover{color:var(--theme-color-std-text);background-color:var(--theme-btn-invisible-secondary--background--hover)}:host .editable .chevron-down-container:not(.disabled):not(:disabled){cursor:pointer}:host .editable .chevron-down-container:not(.disabled):not(:disabled):active,:host .editable .chevron-down-container:not(.disabled):not(:disabled).active{color:var(--theme-color-std-text);background-color:var(--theme-btn-invisible-secondary--background--active)}:host .add-item{display:flex;justify-content:flex-start;align-items:center;position:relative;width:100%}:host .select-list-header{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;align-items:center;height:2rem;color:var(--theme-select-list-item-hint--color);margin:0 0.5rem 0 1rem}";
const Select = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.itemSelectionChange = createEvent(this, "itemSelectionChange", 7);
    this.inputChange = createEvent(this, "inputChange", 7);
    this.addItem = createEvent(this, "addItem", 7);
    this.selectedIndices = [];
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
    this.value = void 0;
    this.dropdownWrapperRef = void 0;
    this.dropdownAnchor = void 0;
    this.isDropdownEmpty = false;
    this.hasFocus = false;
    this.navigationItem = void 0;
    this.inputFilterText = void 0;
    this.inputValue = void 0;
  }
  get items() {
    return Array.from(this.hostElement.querySelectorAll("ix-select-item"));
  }
  get selectedItems() {
    return this.items.filter((item) => item.selected);
  }
  get addItemButton() {
    return this.hostElement.querySelector(".add-item");
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
  watchSelectedIndices(newId) {
    if (!newId) {
      this.selectValue([]);
      return;
    }
    if (Array.isArray(newId)) {
      this.selectValue([...newId]);
      return;
    }
    this.selectValue([newId]);
  }
  onItemClicked(event) {
    const newId = event.detail;
    this.emitItemClick(newId);
  }
  emitItemClick(newId) {
    if (this.isMultipleMode && Array.isArray(this.selectedIndices)) {
      if (this.selectedIndices.includes(newId)) {
        this.selectedIndices = this.selectedIndices.filter((i) => i !== newId);
      } else {
        this.selectedIndices = [...this.selectedIndices, newId];
      }
    } else {
      this.selectedIndices = [newId];
    }
    this.selectValue(this.selectedIndices);
    this.itemSelectionChange.emit(this.selectedIndices);
  }
  emitAddItem(value) {
    if (value.trim() === "") {
      return;
    }
    const newItem = document.createElement("ix-select-item");
    newItem.value = value;
    newItem.label = value;
    this.addItemRef.appendChild(newItem);
    this.clearInput();
    this.emitItemClick(value);
    this.addItem.emit(value);
  }
  selectValue(ids) {
    var _a;
    this.items.forEach((item) => {
      item.selected = ids.some((i) => i === item.value);
    });
    this.value = this.selectedItems.map((item) => item.label);
    if (this.isSingleMode) {
      this.inputValue = ((_a = this.value) === null || _a === void 0 ? void 0 : _a.length) ? this.value[0] : null;
      return;
    }
    this.inputValue = null;
  }
  componentDidLoad() {
    this.inputRef.addEventListener("input", () => {
      this.inputChange.emit(this.inputRef.value);
    });
  }
  componentWillLoad() {
    if (this.selectedIndices) {
      this.selectValue(Array.isArray(this.selectedIndices) ? this.selectedIndices : [this.selectedIndices]);
    }
  }
  onLabelChange(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.selectValue(Array.isArray(this.selectedIndices) ? this.selectedIndices : [this.selectedIndices]);
  }
  disconnectedCallback() {
    if (this.labelMutationObserver) {
      this.labelMutationObserver.disconnect();
    }
  }
  itemExists(item) {
    return this.items.find((i) => i.label === item);
  }
  dropdownVisibilityChanged(event) {
    this.dropdownShow = event.detail;
    this.hasFocus = event.detail;
    if (event.detail) {
      this.inputRef.focus();
      this.inputRef.select();
      this.removeHiddenFromItems();
      this.isDropdownEmpty = this.isEveryDropdownItemHidden;
    } else {
      this.navigationItem = void 0;
    }
  }
  async onKeyDown(event) {
    if (!this.dropdownShow) {
      return;
    }
    if (event.code === "ArrowDown" || event.code === "ArrowUp") {
      this.onArrowNavigation(event);
    }
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      await this.onEnterNavigation();
    }
    if (event.code === "Escape") {
      this.dropdownShow = false;
    }
  }
  async onEnterNavigation() {
    var _a, _b;
    if (this.isMultipleMode) {
      return;
    }
    if (this.editable && !this.itemExists(this.inputFilterText)) {
      this.emitAddItem(this.inputFilterText);
      this.navigationItem = this.items[this.items.length - 1];
    }
    (_a = this.navigationItem) === null || _a === void 0 ? void 0 : _a.onItemClick();
    await ((_b = this.dropdownRef) === null || _b === void 0 ? void 0 : _b.updatePosition());
    if (this.isSingleMode && !this.editable) {
      this.dropdownShow = false;
    }
  }
  onArrowNavigation(event) {
    event.stopPropagation();
    event.preventDefault();
    const focusItem = this.items.find((item) => document.activeElement === item.querySelector("button"));
    this.navigationItem = focusItem;
    const selectItems = this.items.filter((i) => !i.classList.contains("d-none"));
    const index = selectItems.indexOf(this.navigationItem);
    if (event.code === "ArrowDown" && index < selectItems.length - 1) {
      this.navigationItem = selectItems[index + 1];
    } else if (event.code === "ArrowUp" && index > 0) {
      this.navigationItem = selectItems[index - 1];
    }
    this.setHoverEffectForNavigatedSelectItem();
  }
  setHoverEffectForNavigatedSelectItem() {
    var _a;
    (_a = this.navigationItem) === null || _a === void 0 ? void 0 : _a.querySelector("button").focus();
  }
  filterItemsWithTypeahead() {
    this.inputFilterText = this.inputRef.value;
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
    this.value = [];
    this.selectedIndices = [];
    this.itemSelectionChange.emit(null);
    this.dropdownShow = false;
  }
  onInputBlur(e) {
    if (this.editable) {
      return;
    }
    if (this.isSingleMode) {
      if (this.dropdownShow && this.isDropdownEmpty) {
        this.dropdownShow = false;
      }
    }
    if (!this.dropdownShow && this.mode !== "multiple") {
      e.target["value"] = this.value;
    }
  }
  placeholderValue() {
    if (this.editable) {
      return this.i18nPlaceholderEditable;
    }
    if (this.readonly) {
      return "";
    }
    return this.i18nPlaceholder;
  }
  isAddItemVisible() {
    return !this.itemExists(this.inputFilterText) && this.editable && this.inputFilterText;
  }
  render() {
    var _a, _b, _c;
    return h(Host, null, h("div", { class: {
      select: true,
      focus: this.hasFocus,
      editable: this.editable,
      disabled: this.disabled,
      readonly: this.readonly
    }, ref: (ref) => {
      this.dropdownAnchor = ref;
      if (!this.editable)
        this.dropdownWrapperRef = ref;
    } }, h("div", { class: "input-container" }, h("div", { class: "chips" }, this.isMultipleMode ? (_a = this.selectedItems) === null || _a === void 0 ? void 0 : _a.map((item) => h("ix-filter-chip", { disabled: this.disabled || this.readonly, key: item.value, onCloseClick: (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.emitItemClick(item.value);
    } }, item.label)) : "", h("div", { class: "trigger" }, h("input", { "data-testid": "input", disabled: this.disabled, readOnly: this.readonly, type: "text", class: {
      "allow-clear": this.allowClear && !!((_b = this.value) === null || _b === void 0 ? void 0 : _b.length)
    }, placeholder: this.placeholderValue(), value: this.inputValue, ref: (ref) => this.inputRef = ref, onBlur: (e) => this.onInputBlur(e), onInput: () => this.filterItemsWithTypeahead() }), this.allowClear && (((_c = this.value) === null || _c === void 0 ? void 0 : _c.length) || this.inputFilterText) ? h("ix-icon-button", { class: "clear", icon: "clear", ghost: true, oval: true, size: "16", onClick: (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.clear();
    } }) : null, this.disabled || this.readonly ? null : h("div", { class: "chevron-down-container", ref: (ref) => {
      if (this.editable)
        this.dropdownWrapperRef = ref;
    } }, h("ix-icon", { class: "chevron", name: "chevron-down-small" })))))), h("ix-dropdown", { ref: (ref) => this.dropdownRef = ref, show: this.dropdownShow, closeBehavior: this.isMultipleMode ? "outside" : "both", class: {
      "d-none": this.disabled || this.readonly
    }, anchor: this.dropdownAnchor, trigger: this.dropdownWrapperRef, onShowChanged: (e) => this.dropdownVisibilityChanged(e), placement: "bottom-start", overwriteDropdownStyle: async () => {
      return {
        minWidth: `${this.hostElement.clientWidth}px`
      };
    } }, h("div", { class: {
      "select-list-header": true,
      hidden: this.hideListHeader || this.isDropdownEmpty
    }, title: this.i18nSelectListHeader }, this.i18nSelectListHeader), h("slot", null), h("div", { ref: (ref) => this.addItemRef = ref, class: "d-contents" }), this.isAddItemVisible() ? h("ix-dropdown-item", { "data-testid": "add-item", icon: "plus", class: {
      "add-item": true
    }, label: this.inputFilterText, onItemClick: (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.emitAddItem(this.inputFilterText);
    } }) : null, this.isDropdownEmpty && !this.editable ? h("div", { class: "select-list-header" }, this.i18nNoMatches) : ""));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "selectedIndices": ["watchSelectedIndices"]
    };
  }
};
Select.style = selectCss;
class IxSelectItemLabelChangeEvent extends CustomEvent {
  constructor(detail) {
    super("ix-select-item:labelChange", {
      bubbles: true,
      detail
    });
  }
}
const selectItemCss = ":host{display:block;position:relative}:host>ix-dropdown-item{width:100%}:host .select-item-checked{background-color:var(--theme-select-list-item--background--selected);--ix-dropdown-item-checked-color:var(--theme-color-std-text)}:host(.d-none){display:none}";
const SelectItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.itemClick = createEvent(this, "itemClick", 7);
    this.label = void 0;
    this.value = void 0;
    this.selected = false;
    this.hover = false;
  }
  async onItemClick(event) {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    this.itemClick.emit(this.value);
  }
  componentDidRender() {
    if (!this.value) {
      throw Error("ix-select-item must have a `value` property");
    }
  }
  labelChange(newValue, oldValue) {
    this.hostElement.dispatchEvent(new IxSelectItemLabelChangeEvent({
      newValue,
      oldValue
    }));
  }
  render() {
    return h(Host, null, h("ix-dropdown-item", { class: {
      "select-item-checked": this.selected
    }, checked: this.selected, label: this.label ? this.label : this.value, onItemClick: (e) => this.onItemClick(e) }));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "label": ["labelChange"]
    };
  }
};
SelectItem.style = selectItemCss;
export {
  Select as ix_select,
  SelectItem as ix_select_item
};
