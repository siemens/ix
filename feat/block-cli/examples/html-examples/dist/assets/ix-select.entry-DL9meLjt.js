import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-C_dy4gBz.js";
import { m as iconClear, u as iconChevronUpSmall, h as iconChevronDownSmall, C as iconPlus } from "./index-DFdo1y_u-D_8X33yw.js";
import { a as a11yBoolean } from "./a11y-B5k8YVR0-BOSd6BQK.js";
import { q as queryElements, I as IX_FOCUS_VISIBLE_ACTIVE } from "./focus-utilities-Cft9zvbS-CmL7xuFI.js";
import { H as HookValidationLifecycle } from "./validation-YeAaQqsK-CQfTnaKj.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { r as requestAnimationFrameNoNgZone } from "./requestAnimationFrame-BEuV0Xpe-CBtvTq-Q.js";
import { D as DefaultMixins } from "./component-YJmg0LbX-Cdi_gd8D.js";
import { A as AriaActiveDescendantMixin } from "./aria-activedescendant.mixin-CM-NUHTW-CwKLvkpN.js";
import { C as ComponentIdMixin } from "./id.mixin-CUbYLenp-DR0VgaO1.js";
import { P as PROXY_LISTITEM_ID_SUFFIX, a as PROXY_LIST_ID_SUFFIX, u as updateFocusProxyList, F as FocusProxy } from "./focus-proxy-CcbkfXUH-B7UnXfX9.js";
import "./shadow-dom-T30VMB2R-DtdN3xF2.js";
const selectCss = () => `:host{display:inline-block;position:relative;min-height:2rem;height:auto;border-radius:var(--theme-input--border-radius)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .select{position:relative;display:flex;align-items:center;width:100%;background-color:var(--theme-input--background);border:var(--theme-input--border-thickness) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);padding:0 0 0 0.5rem;box-shadow:var(--theme-inset-shadow-1) !important}:host .select:hover:not(.readonly):not(.disabled){background-color:var(--theme-input--background--hover);border-color:var(--theme-input--border-color--hover)}:host .select.readonly,:host .select.disabled{box-shadow:none !important}:host .select.readonly,:host .select.readonly:hover,:host .select.readonly:active,:host .select.disabled,:host .select.disabled:hover,:host .select.disabled:active{background-color:transparent !important}:host .select.readonly:focus,:host .select.readonly:focus-within,:host .select.readonly:focus-visible,:host .select.disabled:focus,:host .select.disabled:focus-within,:host .select.disabled:focus-visible{outline:none}:host .select.readonly input:focus,:host .select.readonly input:focus-visible,:host .select.disabled input:focus,:host .select.disabled input:focus-visible{outline:none}:host .select.disabled{border:var(--theme-input--border-thickness) solid var(--theme-input--border-color--disabled)}:host .select.disabled input{color:var(--theme-input--color--disabled)}:host .select.readonly{border:var(--theme-input--border-thickness) solid var(--theme-input--border-color--readonly)}:host .select.readonly input{color:var(--theme-input--color--readonly)}:host .trigger{display:flex;align-items:center;flex-grow:1;height:100%}:host .input-container{display:flex;position:relative;align-items:flex-start;width:100%;height:100%}:host .input-container .chips{position:relative;display:flex;align-items:center;flex-wrap:wrap;height:100%;max-height:3.5rem;flex-grow:1;overflow-y:auto}:host .input-container .chips>ix-filter-chip{margin:0.1rem}:host .input-container ix-icon-button{height:1.875rem;width:1.875rem;min-height:1.875rem;min-width:1.875rem}:host .input-container input{background:transparent;height:1.75rem;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host .input-container input,:host .input-container input:hover,:host .input-container input:focus-visible{border:none;outline:none}:host .input-container input::-moz-placeholder{color:var(--theme-input-select-icon--color)}:host .input-container input::placeholder{color:var(--theme-input-select-icon--color)}:host .input-container input.hide-placeholder::-moz-placeholder{opacity:0}:host .input-container input.hide-placeholder::placeholder{opacity:0}:host ix-dropdown{display:flex;flex-direction:column;max-width:100%}:host .dropdown-visible{--ix-icon-button-color:var(--theme-color-std-text--hover)}:host .add-item{display:flex;justify-content:flex-start;align-items:center;position:relative;width:100%}:host .select-list-header{display:flex;align-items:center;height:2rem;color:var(--theme-select-list-item-hint--color);margin:0 0.5rem 0 1rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .hidden{display:none !important}:host .proxy-list{all:unset;position:absolute;left:0px;top:0px;overflow:hidden;color:transparent;opacity:0;pointer-events:all;z-index:1000}:host .proxy-list li{height:2px;width:2px;pointer-events:all}:host(.ix-focused) .select,:host(.show-focus-outline) .select{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host(.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .select{border-color:var(--theme-input--border-color--info)}:host(.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .select:hover{border-color:var(--theme-input--border-color--info--hover) !important}:host(.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .select:active{border-color:var(--theme-input--border-color--info--active) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .select{border-color:var(--theme-input--border-color--warning)}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .select:hover{border-color:var(--theme-input--border-color--warning--hover) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .select:active{border-color:var(--theme-input--border-color--warning--active) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .select,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .select{border-color:var(--theme-input--border-color--invalid);background-color:var(--theme-input--background--invalid);box-shadow:none}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .select:hover,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .select:hover{border-color:var(--theme-input--border-color--invalid--hover) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .select:active,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .select:active{border-color:var(--theme-input--border-color--invalid--active) !important}`;
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
let selectId = 0;
const Select = class extends Mixin(...DefaultMixins, ComponentIdMixin, AriaActiveDescendantMixin) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
    this.valueChange = createEvent(this, "valueChange", 7);
    this.inputChange = createEvent(this, "inputChange", 7);
    this.addItem = createEvent(this, "addItem", 7);
    this.ixBlur = createEvent(this, "ixBlur", 7);
    if (hostRef.$hostElement$["s-ei"]) {
      this.formInternals = hostRef.$hostElement$["s-ei"];
    } else {
      this.formInternals = hostRef.$hostElement$.attachInternals();
      hostRef.$hostElement$["s-ei"] = this.formInternals;
    }
  }
  get hostElement() {
    return getElement(this);
  }
  formInternals;
  /**
   * A string that represents the element's name attribute,
   * containing a name that identifies the element when submitting the form.
   */
  name;
  /**
   * A Boolean attribute indicating that an option with a non-empty string value must be selected
   */
  required = false;
  /**
   * Label for the select component
   */
  label;
  /**
   * ARIA label for the chevron down icon button
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 3.2.0
   * @deprecated 4.4.0 Button to expand/collapse the dropdown is hidden inside the AOM
   */
  ariaLabelChevronDownIconButton = "Open select dropdown";
  /**
   * ARIA label for the clear icon button
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 3.2.0
   */
  ariaLabelClearIconButton;
  /**
   * ARIA label for the add item
   *
   * @since TODO: Define
   */
  ariaLabelAddItem = "Add item";
  /**
   * Warning text for the select component
   **/
  warningText;
  /**
   * Info text for the select component
   **/
  infoText;
  /**
   * Error text for the select component
   **/
  invalidText;
  /**
   * Valid text for the select component
   **/
  validText;
  /**
   * Helper text for the select component
   **/
  helperText;
  /**
   * Show helper, error, info, warning text as tooltip
   */
  showTextAsTooltip;
  /**
   * Current selected value.
   * This corresponds to the value property of ix-select-items
   */
  value = "";
  /**
   * Show clear button
   */
  allowClear = false;
  /**
   * Selection mode
   */
  mode = "single";
  /**
   * Select is extendable
   */
  editable = false;
  /**
   * If true the select will be in disabled state
   */
  disabled = false;
  /**
   * If true the select will be in readonly mode
   */
  readonly = false;
  /**
   * Input field placeholder
   */
  i18nPlaceholder = "Select an option";
  /**
   * Input field placeholder for editable select
   */
  i18nPlaceholderEditable = "Type of select option";
  /**
   * Select list header
   */
  i18nSelectListHeader = "Select an option";
  /**
   * Information inside of dropdown if no items where found with current filter text
   */
  i18nNoMatches = "No matches";
  /**
   * Chip label for all selected items in multiple mode.
   */
  i18nAllSelected = "All";
  /**
   * Hide list header
   */
  hideListHeader = false;
  /**
   * The width of the dropdown element with value and unit (e.g. "200px" or "12.5rem").
   */
  dropdownWidth;
  /**
   * The maximum width of the dropdown element with value and unit (e.g. "200px" or "12.5rem").
   * By default the maximum width of the dropdown element is set to 100%.
   */
  dropdownMaxWidth;
  /**
   * Show "all" chip when all items are selected in multiple mode
   */
  collapseMultipleSelection = false;
  /**
   * Enable Popover API rendering for dropdown.
   *
   * @default false
   * @since 4.3.0
   */
  enableTopLayer = false;
  /**
   * Value changed
   */
  valueChange;
  /**
   * Event dispatched whenever the text input changes.
   */
  inputChange;
  /**
   * Item added to selection
   */
  addItem;
  /**
   * Blur input
   */
  ixBlur;
  dropdownShow = false;
  selectedLabels = [];
  isDropdownEmpty = false;
  inputFilterText = "";
  inputValue = "";
  hasInputFocus = false;
  dropdownItemsVisualFocused = false;
  isInvalid = false;
  isValid = false;
  isInfo = false;
  isWarning = false;
  hostId = `ix-select-${selectId++}`;
  dropdownWrapperRef = makeRef();
  dropdownAnchorRef = makeRef();
  inputRef = makeRef();
  dropdownRef = makeRef();
  proxyListObserver = null;
  inputElement;
  touched = false;
  get nonShadowItems() {
    return Array.from(this.hostElement.querySelectorAll("ix-select-item"));
  }
  get shadowItems() {
    return Array.from(this.hostElement.shadowRoot.querySelectorAll("ix-select-item"));
  }
  get focusableItems() {
    return Array.from(this.hostElement.querySelectorAll("ix-select-item:not([disabled]):not([hidden]), ix-dropdown-item:not([disabled]):not([hidden])"));
  }
  get allFocusableItems() {
    return Array.from(this.hostElement.querySelectorAll("ix-select-item, ix-dropdown-item"));
  }
  get items() {
    return [...this.nonShadowItems, ...this.shadowItems];
  }
  get selectedItems() {
    return this.items.filter((item) => item.selected);
  }
  get addItemElement() {
    return this.hostElement.querySelector("ix-dropdown-item.add-item");
  }
  get isSingleMode() {
    return this.mode === "single";
  }
  get isMultipleMode() {
    return this.mode === "multiple";
  }
  get isEveryDropdownItemHidden() {
    return this.items.every((item) => item.hidden === true);
  }
  watchValue(value) {
    this.value = value;
    this.updateSelection();
  }
  updateFormInternalValue(value) {
    if (Array.isArray(value)) {
      this.formInternals.setFormValue(value.join(","));
    } else {
      this.formInternals.setFormValue(value);
    }
  }
  /** @internal */
  async hasValidValue() {
    return this.required && !!this.hasValue();
  }
  hasValue() {
    if (Array.isArray(this.value)) {
      return !!this.value.length;
    }
    return !!this.value;
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
    if (this.isMultipleMode && this.inputFilterText) {
      this.clearInput();
      this.removeHiddenAttributeFromItems();
    }
  }
  emitAddItem(value) {
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
    this.addItemElement?.before(newItem);
    requestAnimationFrameNoNgZone(() => {
      this.clearInput();
      this.itemClick(value);
    });
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
    this.selectedLabels = this.selectedItems.map((item) => item.label ?? item.value);
    if (this.dropdownShow && this.inputFilterText) {
      return;
    }
    if (this.selectedLabels?.length && this.isSingleMode) {
      this.inputValue = this.selectedLabels[0] ?? "";
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
    this.updateFormInternalValue(value);
    return false;
  }
  createAddItemElement() {
    const onAddItemButtonClick = () => {
      this.emitAddItem(this.inputFilterText);
    };
    const createElement = () => {
      const addItemElement = document.createElement("ix-dropdown-item");
      addItemElement.hidden = true;
      addItemElement.setAttribute("data-testid", "add-item");
      addItemElement.icon = iconPlus;
      addItemElement.classList.add("add-item");
      addItemElement.addEventListener("click", onAddItemButtonClick);
      addItemElement.style.order = Number.MAX_SAFE_INTEGER.toString();
      addItemElement.ariaHidden = "true";
      addItemElement.role = "presentation";
      return addItemElement;
    };
    const isRendered = this.hostElement.querySelector(".add-item");
    if (!isRendered) {
      this.hostElement.appendChild(createElement());
    }
  }
  componentDidLoad() {
    this.inputElement?.addEventListener("input", () => {
      this.dropdownShow = true;
      this.inputChange.emit(this.inputElement?.value);
    });
    this.createAddItemElement();
    this.proxyListObserver = new MutationObserver(() => {
      this.updateAriaProxyListbox();
    });
    this.proxyListObserver.observe(this.hostElement, {
      attributes: true,
      attributeFilter: ["aria-selected"],
      subtree: true,
      childList: true
    });
  }
  componentWillLoad() {
    this.updateSelection();
    this.updateFormInternalValue(this.value);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.proxyListObserver?.disconnect();
  }
  onLabelChange(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.updateSelection();
  }
  itemExists(item) {
    return this.items.find((i) => i.label === item);
  }
  getActiveVisualFocusedItem() {
    const elements = queryElements(this.hostElement, `.${IX_FOCUS_VISIBLE_ACTIVE}`);
    if (elements.length > 0) {
      return elements[0];
    }
    return null;
  }
  dropdownVisibilityChanged(event) {
    this.dropdownShow = event.detail;
    if (event.detail) {
      this.inputElement?.focus();
      if (this.hasValue()) {
        this.inputElement?.select();
      }
      if (!this.inputFilterText) {
        this.removeHiddenAttributeFromItems();
      }
      this.isDropdownEmpty = this.isEveryDropdownItemHidden;
      this.checkVisibilityOfProxyList();
    } else {
      this.updateSelection();
      this.inputFilterText = "";
      this.dropdownItemsVisualFocused = false;
      this.inputElement?.setAttribute("aria-activedescendant", "");
    }
  }
  setItemFilter() {
    this.inputFilterText = this.inputElement?.value.trim() ?? "";
    if (this.inputFilterText) {
      this.items.forEach((item) => {
        const proxyItem = this.hostElement.shadowRoot?.getElementById(`${item.id}-${PROXY_LISTITEM_ID_SUFFIX}`);
        item.hidden = false;
        if (proxyItem) {
          proxyItem.hidden = false;
          proxyItem.setAttribute("aria-hidden", "false");
        }
        if (!item.label?.toLowerCase().includes(this.inputFilterText.toLowerCase())) {
          item.hidden = true;
          if (proxyItem) {
            proxyItem.hidden = true;
            proxyItem.setAttribute("aria-hidden", "true");
          }
        }
      });
    } else {
      this.removeHiddenAttributeFromItems();
    }
    this.isDropdownEmpty = this.isEveryDropdownItemHidden;
    this.checkVisibilityOfProxyList();
  }
  checkVisibilityOfProxyList() {
    const proxyList = this.hostElement?.shadowRoot?.getElementById(`${this.hostId}-${PROXY_LIST_ID_SUFFIX}`);
    if (!proxyList) {
      return;
    }
    proxyList.hidden = this.isDropdownEmpty;
  }
  removeHiddenAttributeFromItems() {
    this.items.forEach((item) => {
      item.hidden = false;
      const proxyItem = this.hostElement.shadowRoot?.getElementById(`${item.id}-${PROXY_LISTITEM_ID_SUFFIX}`);
      if (proxyItem) {
        proxyItem.hidden = false;
        proxyItem.setAttribute("aria-hidden", "false");
      }
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
    const emptyValue = this.isSingleMode ? "" : [];
    this.value = emptyValue;
    this.emitValueChange(emptyValue);
    this.dropdownShow = false;
  }
  onInputBlur(event) {
    this.ixBlur.emit();
    this.touched = true;
    this.hasInputFocus = false;
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
  onInputFocus() {
    this.hasInputFocus = true;
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
  shouldDisplayAllChip() {
    return this.selectedItems.length === this.items.length && this.collapseMultipleSelection;
  }
  renderAllChip() {
    return h("ix-filter-chip", { disabled: this.disabled || this.readonly, ariaLabelCloseIconButton: this.i18nAllSelected, onCloseClick: (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.clear();
    } }, `${this.i18nAllSelected} (${this.selectedItems.length})`);
  }
  renderChip(item) {
    return h("ix-filter-chip", { disabled: this.disabled || this.readonly, key: item.value, onCloseClick: () => {
      this.itemClick(item.value);
      this.inputElement?.focus();
    } }, item.label);
  }
  onValidationChange({ isInvalid, isInvalidByRequired, isValid, isInfo, isWarning }) {
    this.isInvalid = isInvalid || isInvalidByRequired;
    this.isValid = isValid;
    this.isWarning = isWarning;
    this.isInfo = isInfo;
  }
  /** @internal */
  async getAssociatedFormElement() {
    return this.formInternals.form;
  }
  /**
   * Returns the native input element used in the component.
   */
  getNativeInputElement() {
    if (this.inputElement) {
      return Promise.resolve(this.inputElement);
    } else {
      return Promise.reject(new Error("Input element not found"));
    }
  }
  /**
   * Focuses the input field
   */
  async focusInput() {
    const inputElement = await this.getNativeInputElement();
    if (inputElement) {
      inputElement.focus();
    }
  }
  /**
   * Check if the input field has been touched.
   * @internal
   * */
  isTouched() {
    return Promise.resolve(this.touched);
  }
  getControllingAriaElement() {
    return this.inputRef.waitForCurrent();
  }
  isAriaActiveDescendantActive() {
    return this.dropdownShow;
  }
  getAriaActiveDescendantProxyItemId() {
    return "proxy-listbox-item";
  }
  componentWillRender() {
    if (this.addItemElement) {
      this.addItemElement.hidden = !this.isAddItemVisible();
      this.addItemElement.label = this.inputFilterText;
    }
    this.updateAriaProxyListbox();
  }
  updateAriaProxyListbox() {
    const ariaActiveDescendantHelper = this.hostElement.shadowRoot?.getElementById(`${this.hostId}-proxy-listbox`);
    if (this.focusableItems.length === 0) {
      return;
    }
    updateFocusProxyList(ariaActiveDescendantHelper, this.focusableItems, (item, proxyElement) => {
      proxyElement.role = "option";
      proxyElement.innerText = item.label ?? "";
      proxyElement.ariaLabel = item.getAttribute("aria-label") || item.label || "";
      proxyElement.ariaSelected = item.getAttribute("aria-selected") || "false";
      proxyElement.ariaChecked = item.getAttribute("aria-checked") || "false";
      proxyElement.addEventListener("click", (event) => {
        event.stopPropagation();
        event.preventDefault();
        item.click();
      });
      if (this.addItemElement === item) {
        proxyElement.ariaLabel = `${this.ariaLabelAddItem}: ${item.label}`;
      }
      item.ariaHidden = "true";
    });
  }
  render() {
    return h(Host, { key: "8e54aec58ba0b7b079e8786d874f6f7aa3331362", id: this.getHostElementId(), class: {
      readonly: this.readonly,
      disabled: this.disabled,
      "show-focus-outline": this.hasInputFocus && !this.dropdownItemsVisualFocused
    }, tabIndex: this.disabled ? -1 : 0 }, h("ix-field-wrapper", { key: "148c4e0cf994a3fb758ec103018bb6a4ec3fc80d", required: this.required, label: this.label, helperText: this.helperText, invalidText: this.invalidText, infoText: this.infoText, warningText: this.warningText, validText: this.validText, showTextAsTooltip: this.showTextAsTooltip, isInvalid: this.isInvalid, isValid: this.isValid, isInfo: this.isInfo, isWarning: this.isWarning, controlRef: this.inputRef }, h("div", { key: "29acbf938059fd0321d784ef60fd845d53c7eb15", class: {
      select: true,
      disabled: this.disabled,
      readonly: this.readonly
    }, ref: (ref) => {
      this.dropdownAnchorRef(ref);
      this.dropdownWrapperRef(ref);
    } }, h("div", { key: "97d62a6824644d2fad0b9dfb9e9ee422e5f71332", class: "input-container" }, h("div", { key: "c2aff6bd918defbea822262e059d5ba2805f3fbf", class: "chips" }, this.isMultipleMode && this.items.length !== 0 && (this.shouldDisplayAllChip() ? this.renderAllChip() : this.selectedItems?.map((item) => this.renderChip(item))), h("div", { key: "793fa332c6c781a8a7f7602d3bd90ec764ae7a70", class: "trigger" }, h("input", { key: "9d3317cc1e2c30a0732d05ee1a20fd9f94f414a3", id: `${this.hostId}-input`, role: "combobox", "aria-controls": `${this.hostId}-proxy-listbox`, "aria-expanded": a11yBoolean(this.dropdownShow), "aria-autocomplete": "list", "aria-disabled": a11yBoolean(this.disabled), autocomplete: "off", "data-testid": "input", disabled: this.disabled, readOnly: this.readonly, required: this.required, type: "text", class: {
      "allow-clear": this.allowClear && !!this.selectedLabels?.length
    }, placeholder: this.placeholderValue(), value: this.inputValue ?? "", ref: (ref) => {
      this.inputElement = ref;
      this.inputRef(ref);
    }, onFocus: () => this.onInputFocus(), onBlur: (e) => this.onInputBlur(e), onInput: () => this.setItemFilter() }), this.allowClear && !this.disabled && !this.readonly && (this.selectedLabels?.length || this.inputFilterText) ? h("ix-icon-button", { key: "clear", class: "clear", icon: iconClear, variant: "subtle-tertiary", oval: true, size: "16", onClick: (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.clear();
    }, "aria-label": this.ariaLabelClearIconButton }) : null, this.disabled || this.readonly ? null : h("ix-icon-button", { "aria-label": this.ariaLabelChevronDownIconButton, "aria-hidden": "true", ref: (ref) => {
      const element = ref;
      element.tabIndex = -1;
      element.ariaHidden = "true";
    }, "data-select-dropdown": true, key: "dropdown", class: { "dropdown-visible": this.dropdownShow }, icon: this.dropdownShow ? iconChevronUpSmall : iconChevronDownSmall, variant: "subtle-tertiary" })))))), h("ix-dropdown", { key: "fb12bf0c967412cf895b4e65bbd95c7a69e1bcfb", id: `${this.hostId}-listbox`, keyboardActivationKeys: ["ArrowUp", "ArrowDown"], keyboardItemTriggerKeys: ["Enter"], disableFocusTrap: true, focusHost: this.hostElement, ref: this.dropdownRef, show: this.dropdownShow, closeBehavior: this.isMultipleMode ? "outside" : "both", hidden: this.disabled || this.readonly, anchor: this.dropdownAnchorRef.waitForCurrent(), trigger: this.dropdownWrapperRef.waitForCurrent(), onShowChanged: (e) => this.dropdownVisibilityChanged(e), placement: "bottom-start", enableTopLayer: this.enableTopLayer, overwriteDropdownStyle: async () => {
      const styleOverwrites = {};
      const minWidth = this.hostElement.shadowRoot?.querySelector(".select")?.getBoundingClientRect().width;
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
    }, onClick: (event) => {
      const target = event.target;
      const isTargetElement = target.tagName === "IX-DROPDOWN-ITEM" || target.tagName === "IX-SELECT-ITEM";
      if (!isTargetElement) {
        return;
      }
      const activeVisualFocusedItem = this.getActiveVisualFocusedItem();
      const item = activeVisualFocusedItem ?? target;
      if (!item) {
        return;
      }
      event.stopPropagation();
      if (!item.classList.contains("add-item")) {
        this.itemClick(item.value);
        this.setItemFilter();
      }
      if (this.isSingleMode) {
        this.dropdownShow = false;
      }
    } }, h("div", { key: "9e36e83eecdf41e32525b86979353ebc1cab0d2c", "aria-hidden": "true", class: {
      "select-list-header": true,
      hidden: this.hideListHeader || this.isDropdownEmpty
    }, title: this.i18nSelectListHeader, onClick: (e) => e.preventDefault() }, this.i18nSelectListHeader), h("slot", { key: "23317873f00bbd34e7a3fd21165996859ba21fea", onSlotchange: () => {
      this.updateSelection();
    } }), h(FocusProxy, { key: "19b96d4679750f63fcd176b77d9e04efa3d1ec4c", hostId: this.hostId, otherProps: {
      "aria-hidden": a11yBoolean(!this.dropdownShow),
      "aria-multiselectable": a11yBoolean(this.isMultipleMode),
      hidden: this.disabled || this.readonly
    } }), this.isDropdownEmpty && !this.editable && h("div", { key: "61e6ead7472c2037bbe63a15e368ee4c7d7f07c3", class: "select-list-header" }, this.i18nNoMatches)));
  }
  static get delegatesFocus() {
    return true;
  }
  static get formAssociated() {
    return true;
  }
  static get watchers() {
    return {
      "value": [{
        "watchValue": 0
      }]
    };
  }
};
__decorate([
  HookValidationLifecycle()
], Select.prototype, "onValidationChange", null);
Select.style = selectCss();
export {
  Select as ix_select
};
